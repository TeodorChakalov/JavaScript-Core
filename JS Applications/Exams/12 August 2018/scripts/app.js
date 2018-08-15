$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', getWelcomePage);
        this.get('index.html', getWelcomePage);

        function getWelcomePage(ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs'
                }).then(function () {
                    this.partial('./templates/welcome-anonymous.hbs');
                })
            } else {
                ctx.redirect('#/catalog')
            }
        }

        this.get('#/register', function () {
            this.loadPartials({
                footer: './templates/common/footer.hbs',
                navigation: './templates/common/navigation.hbs'
            }).then(function () {
                this.partial('./templates/forms/registerForm.hbs');
            });
        });

        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            if (!/^[A-Za-z]{3,}$/.test(username)) {
                notify.showError('Username must be at least 3 character long');
            } else if (!/^[A-Za-z0-9]{6,}$/.test(password)) {
                notify.showError('Password must be at least 6 characters long and contain only english alphabet letters')
            } else if (password !== repeatPass) {
                notify.showError('Passwords must match!');
            } else {
                auth.register(username, password)
                    .then(function (userData) {
                        auth.saveSession(userData);
                        notify.showInfo('User registration successful.');
                        ctx.redirect('#/catalog');
                    }).catch(notify.handleError);
            }
        });

        this.get('#/login', function () {
            this.loadPartials({
                footer: './templates/common/footer.hbs',
                navigation: './templates/common/navigation.hbs'
            }).then(function () {
                this.partial('./templates/forms/loginForm.hbs');
            });
        });

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            if (username !== "" && password !== "") {
                auth.login(username, password)
                    .then(function (userData) {
                        auth.saveSession(userData);
                        notify.showInfo('Login successful.');
                        ctx.redirect('#/catalog');
                    }).catch(notify.handleError)
            }
            else {
                notify.showError("Invalid credentials");
                ctx.redirect('#/login');
            }
        });

        this.get('#/logout', function (ctx) {
            auth.logout()
                .then(function () {
                    notify.showInfo('Logout successful.');
                    sessionStorage.clear();
                    ctx.redirect('#/catalog');
                }).catch(notify.handleError);
        });

        this.get('#/catalog', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                cars.getAllCars()
                    .then(function (cars) {
                        cars.forEach((p, i) => {
                            p.isAuthor = p._acl.creator === sessionStorage.getItem('userId');
                        });

                        ctx.isAuth = auth.isAuth();
                        ctx.username = sessionStorage.getItem('username');
                        ctx.cars = cars;

                        ctx.loadPartials({
                            navigation: './templates/common/navigation.hbs',
                            carList: './templates/cars/carList.hbs',
                            car: './templates/cars/car.hbs',
                            footer: './templates/common/footer.hbs',
                        }).then(function () {
                            this.partial('./templates/cars/catalogPage.hbs');
                        }).catch(notify.handleError);
                    });
            }
        });

        this.get('#/create', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.loadPartials({
                    navigation: './templates/common/navigation.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/cars/createPage.hbs');
                });
            }
        });

        this.post('#/create', function (ctx) {
            let brand = ctx.params.brand;
            let description = ctx.params.description;
            let fuel = ctx.params.fuel;
            let imageUrl = ctx.params.imageUrl;
            let author = sessionStorage.getItem('username');
            let model = ctx.params.model;
            let price = ctx.params.price;
            let title = ctx.params.title;
            let year = ctx.params.year;

            if (title.length > 33) {
                notify.showError('The title length must not exceed 33 characters!');
            } else if (description.length > 450 && description.length < 30) {
                notify.showError('The description length must not exceed 450 characters and should be at least 30!');
            }else if (brand.length > 11) {
                notify.showError('The brand length must not exceed 11 characters!');
            }else if (fuel.length > 11) {
                notify.showError('The fuel length must not exceed 11 characters!');
            }else if (model.length > 11 && model.length < 4) {
                notify.showError('The model length must not exceed 11 characters and should be at least 4!');
            }else if (year.length !== 4) {
                notify.showError('The year must be only 4 chars long!');
            }else if (price.length > 1000000) {
                notify.showError('The maximum price is 1000000 $');
            } else if (!imageUrl.startsWith('http')) {
                notify.showError('Link url should always start with [http]');
            } else {
                cars.createCar(brand, description, fuel, imageUrl, author, model, price, title, year)
                    .then(function () {
                        notify.showInfo('listing created.');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/edit/:carId', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                let carId = ctx.params.carId;
                cars.getCarById(carId)
                    .then(function (car) {
                        ctx.isAuth = auth.isAuth();
                        ctx.username = sessionStorage.getItem('username');
                        ctx.car = car;

                        ctx.loadPartials({
                            navigation: './templates/common/navigation.hbs',
                            footer: './templates/common/footer.hbs',
                        }).then(function () {
                            this.partial('./templates/cars/editPage.hbs');
                        });
                    });
            }
        });

        this.post('#/edit', function (ctx) {
            let carId = ctx.params.carId;
            let brand = ctx.params.brand;
            let description = ctx.params.description;
            let fuel = ctx.params.fuel;
            let imageUrl = ctx.params.imageUrl;
            let author = sessionStorage.getItem('username');
            let model = ctx.params.model;
            let price = ctx.params.price;
            let title = ctx.params.title;
            let year = ctx.params.year;

            if (title.length > 33) {
                notify.showError('The title length must not exceed 33 characters!');
            } else if (description.length > 450 && description.length < 30) {
                notify.showError('The description length must not exceed 450 characters and should be at least 30!');
            }else if (brand.length > 11) {
                notify.showError('The brand length must not exceed 11 characters!');
            }else if (fuel.length > 11) {
                notify.showError('The fuel length must not exceed 11 characters!');
            }else if (model.length > 11 && model.length < 4) {
                notify.showError('The model length must not exceed 11 characters and should be at least 4!');
            }else if (year.length !== 4) {
                notify.showError('The year must be only 4 chars long!');
            }else if (price.length > 1000000) {
                notify.showError('The maximum price is 1000000 $');
            } else if (!imageUrl.startsWith('http')) {
                notify.showError('Link url should always start with [http]');
            } else {
                cars.editCar(carId, brand, description, fuel, imageUrl, author, model, price, title, year)
                    .then(function () {
                        notify.showInfo(`Listing ${title} updated.`);
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/delete/:carId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
            } else {
                let postId = ctx.params.carId;

                cars.deleteCar(postId)
                    .then(function () {
                        notify.showInfo('Listing deleted.');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/myListings', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            cars.getMyCars(sessionStorage.getItem('username'))
                .then((cars) => {
                    cars.forEach((p) => {
                        p.isAuthor = p._acl.creator === sessionStorage.getItem('userId');
                    });

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.cars = cars;

                    ctx.loadPartials({
                        navigation: './templates/common/navigation.hbs',
                        carList: './templates/cars/carList.hbs',
                        car: './templates/cars/car.hbs',
                        footer: './templates/common/footer.hbs',
                    }).then(function () {
                        this.partial('./templates/cars/myCarsPage.hbs');
                    });
                })
        });

    });

    app.run();
});