$(() => {
    const app = Sammy("#app", function () {
        this.use("Handlebars", "hbs");

        this.get("messages.html", function () {
            if (auth.isAuth()) {
                this.redirect("#/homeLogged");
            } else {
                this.redirect("#/homeNotLogged");
            }
        });

        this.get("#/homeNotLogged", function () {
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
                this.partial("./templates/homeNotLogged.hbs");
            }).catch(notify.handleError);
        });

        this.get("#/homeLogged", function (ctx) {
            ctx.isAuth = auth.isAuth();
            ctx.userame = sessionStorage.getItem("username");
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
                this.partial("./templates/homeLogged.hbs");
            }).catch(notify.handleError);
        });

        this.get('#/register', function () {
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
                this.partial("./templates/register.hbs");
            }).catch(notify.handleError);
        });

        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let name = ctx.params.name;
            auth.register(username, password, name)
                .then(function (data) {
                    auth.saveSession(data);
                    notify.showInfo("Register successful!");
                    ctx.redirect('#/homeLogged');
                }).catch(notify.handleError);
        });

        this.get('#/login', function () {
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
                this.partial("./templates/login.hbs");
            }).catch(notify.handleError);
        });

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            auth.login(username, password)
                .then(function (data) {
                    auth.saveSession(data);
                    ctx.redirect('#/homeLogged');
                }).catch(notify.handleError);
        });
        this.get('#/logout', function (ctx) {
            auth.logout()
                .then(function () {
                    sessionStorage.clear();
                    notify.showInfo("Logout successfully!");
                    ctx.redirect('#/homeNotLogged');
                }).catch(notify.handleError);
        });

        this.get('#/myMesseges', function (ctx) {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem("username");
            messageService.getMyMesseges()
                .then(function (res) {
                    res.forEach((el, index) => {
                        el.date = formatDate(el._kmd.ect);
                    });
                    ctx.messages = res;
                    ctx.loadPartials({
                        header: "./templates/common/header.hbs",
                        footer: "./templates/common/footer.hbs",
                        message: "./templates/common/message.hbs"
                    }).then(function () {
                        this.partial("./templates/myMessagesView.hbs");
                    }).catch(notify.handleError);
                }).catch(notify.handleError);
        });

        this.get('#/sendMessege', function (ctx) {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem("username");
            messageService.listAllUsers()
                .then(function (options) {
                    console.log(options);
                    ctx.options = options;
                    ctx.loadPartials({
                        header: "./templates/common/header.hbs",
                        footer: "./templates/common/footer.hbs",
                        option: "./templates/common/send-message.hbs"
                    }).then(function () {
                        this.partial("./templates/sendMsgView.hbs");
                    }).catch(notify.handleError);
                }).catch(notify.handleError);
        });

        this.post('#/createMsg', function (ctx) {
            let sender_username = sessionStorage.getItem("username");
            let sender_name = sessionStorage.getItem("name");
            let recipient_username = ctx.params.recipient;
            let text = ctx.params.text;

            messageService.sendMessage(sender_username, sender_name, recipient_username, text)
                .then(function () {
                    ctx.redirect("#/archieve");
                }).catch(notify.handleError)
        });

        this.get('#/archieve', function (ctx) {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem("username");
            messageService.getArchieve()
                .then(function (res) {
                    res.forEach((el, index) => {
                        el.date = formatDate(el._kmd.ect);
                    });
                    ctx.messages = res;
                    ctx.loadPartials({
                        header: "./templates/common/header.hbs",
                        footer: "./templates/common/footer.hbs",
                        message: "./templates/common/archieve-msg.hbs"
                    }).then(function () {
                        this.partial("./templates/archieveview.hbs");
                    }).catch(notify.handleError);
                }).catch(notify.handleError);
        });

        this.get("#/delete/:id", function (ctx) {
            messageService.deleteMsgById(ctx.params.id.slice(1))
                .then(function () {
                    context.redirect("#/archieve");
                }).catch(notify.handleError);
        });
    });
    app.run();
});

function formatDate(dateISO8601) {
    let date = new Date(dateISO8601);
    if (Number.isNaN(date.getDate()))
        return '';
    return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
        "." + date.getFullYear() + ' ' + date.getHours() + ':' +
        padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

    function padZeros(num) {
        return ('0' + num).slice(-2);
    }
}

function formatSender(name, username) {
    if (!name)
        return username;
    else
        return username + ' (' + name + ')';
}