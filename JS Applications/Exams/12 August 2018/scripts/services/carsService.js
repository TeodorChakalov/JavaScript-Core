let cars = (() => {
    function getAllCars() {
        let endpoint = 'cars?query={}&sort={"_kmd.ect": -1}';

        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function createCar(brand, description, fuel, imageUrl, author, model, price, title, year) {
        let obj = {brand, description, fuel, imageUrl, author, model, price, title, year};

        return remote.post('appdata', 'cars', 'kinvey', obj);
    }

    function editCar(carId, brand, description, fuel, imageUrl, author, model, price, title, year) {
        let endpoint = `cars/${carId}`;
        let obj = {brand, description, fuel, imageUrl, author, model, price, title, year};

        return remote.update('appdata', endpoint, 'kinvey', obj)
    }

    function deleteCar(carId) {
        let endpoint = `cars/${carId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    function getMyCars(username){
        let endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getCarById(carId) {
        let endpoint = `cars/${carId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    return {getAllCars, createCar, editCar, deleteCar, getMyCars, getCarById};
})();