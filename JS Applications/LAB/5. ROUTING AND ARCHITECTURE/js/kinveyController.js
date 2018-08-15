const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_r1Tm3BxS7';
const APP_SECRET = 'f703d81e03144e48a490e0a790ad5c09';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};

const kinveyController = (function () {
    function registerUser(username, password, firstName, lastName, phone, email) {
        $.ajax({
            method: "POST",
            url: BASE_URL + 'user/' + APP_KEY + '/',
            headers: AUTH_HEADERS,
            data: {username, password, firstName, lastName, phone, email}
        }).then(function (res) {
            saveAuthInSession(res);
        }).catch(handleError)
    }

    function loginUser(username, password) {
        $.ajax({
            method: "POST",
            url: BASE_URL + 'user/' + APP_KEY + '/login',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            saveAuthInSession(res);
        }).catch(handleError)
    }

    function editUser(firstName, lastName, phone, email) {
        $.ajax({
            method: 'PUT',
            url: BASE_URL + 'user/' + APP_KEY + '/' + sessionStorage.getItem('userId'),
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
            data: {firstName, lastName, phone, email}
        }).then(function (res) {
            saveAuthInSession(res)
        }).catch(handleError)
    }

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('firstName', userInfo.firstName);
        sessionStorage.setItem('lastName', userInfo.lastName);
        sessionStorage.setItem('phone', userInfo.phone);
        sessionStorage.setItem('email', userInfo.email);
        sessionStorage.setItem('userId', userInfo._id);
    }

    function handleError(err) {
        console.log(err)
    }

    return {registerUser, loginUser, editUser}
}());