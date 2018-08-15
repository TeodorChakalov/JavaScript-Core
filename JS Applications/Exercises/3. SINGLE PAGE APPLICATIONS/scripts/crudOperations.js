const BASE_URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_HkXpCUdNX'
const APP_SECRET = '69fa82dbedb04c53a23be4ed4ddbfe66'
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)}
const ADS_PER_PAGE = 3;

function registerUser() {
    let username = $('#formRegister input[name=username]').val();
    let password = $('#formRegister input[name=passwd]').val();
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/',
        headers: AUTH_HEADERS,
        data: { username, password }
    }).then(function (res) {
        singInUser(res, 'Registration successful.')
    }).catch(handleAjaxError)
}

function loginUser() {
    let username = $('#formLogin input[name=username]').val();
    let password = $('#formLogin input[name=passwd]').val();

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data: { username, password }
    }).then(function (res) {
        singInUser(res, 'Login successful.')
    }).catch(handleAjaxError)
}

function logoutUser() {
    sessionStorage.clear();
    showHideMenuLinks()
    showHomeView()
    showInfo('Logout successful')
}

function singInUser(res, message) {
    saveAuthInSession(res)
    showHideMenuLinks()
    showHomeView()
    showInfo(message)
}

function createAd() {
    let title = $('#formCreateAd input[name=title]').val();
    let publisher = sessionStorage.getItem('username')
    let description = $('#formCreateAd textarea[name=description]').val();
    let price = $('#formCreateAd input[name=price]').val();
    let dateOfPublishing = $('#formCreateAd input[name=datePublished]').val();
    let imgPath = $('#formCreateAd input[name=imgPath]').val();
    let counter = 0;
    let checkValid = checkIsValid(title, price);

    if (checkValid.length > 0) {
        showError(checkValid)
        return
    }

    let data = { title, publisher, description, price, dateOfPublishing, imgPath, counter }
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads',
        headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') },
        data: data
    }).then(function (res) {
        showListAdView()
        showInfo('Ad created successful.')
    }).catch(handleAjaxError)
}

function deleteAd(ad) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads/' + ad._id,
        headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') }
    }).then(function (res) {
        showListAdView()
        showInfo('Ad deleted.')
    }).catch(handleAjaxError)
}

function editAd() {
    let id = $('#formEditAd input[name=id]').val();
    let title = $('#formEditAd input[name=title]').val();
    let publisher = sessionStorage.getItem('username')
    let description = $('#formEditAd textarea[name=description]').val();
    let price = $('#formEditAd input[name=price]').val();
    let dateOfPublishing = $('#formEditAd input[name=datePublished]').val();
    let imgPath = $('#formEditAd input[name=imgPath]').val();
    let data = { title, publisher, description, price, dateOfPublishing, imgPath }
    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/ads/' + id,
        headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') },
        data: data
    }).then(function (res) {
        showListAdView()
        showInfo('Ad edited successful.')
    }).catch(handleAjaxError)
}

function saveAuthInSession(userInfo) {
    sessionStorage.setItem('username', userInfo.username)
    sessionStorage.setItem('authToken', userInfo._kmd.authtoken)
    sessionStorage.setItem('id', userInfo._id)
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error."
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description
    showError(errorMsg)
}

function displayPaginationAndBooks(adverts) {
    let pagination = $('#pagination-demo')
    if (pagination.data("twbs-pagination")) {
        pagination.twbsPagination('destroy')
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(adverts.length / ADS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            //$('#ads > table tr:not(:first-child').remove();
            $('#ads table').remove();
            $('#ads>div').remove();
            let startad = (page - 1) * ADS_PER_PAGE
            let endad = Math.min(startad + ADS_PER_PAGE, adverts.length)
            $(`a:contains(${page})`).addClass('active')
            for (let i = startad; i < endad; i++) {
                createTr(adverts[i])
            }
        }
    })
}

function createTr(ad) {
    let div = $('<div>')
        .addClass('ad-box')
        .append(`<div class="ad-title">${ad.title}</div>`)
        .append(`<div><img src="${ad.imgPath}"></div>`)
        .append(`<div>Price: ${Number(ad.price).toFixed(2)} By: ${ad.publisher}</div>`)

    // let tr = $('<tr>').append(`<td>${ad.title}`)
    //                   .append(`<td>${ad.publisher}`)
    //                   .append(`<td>${ad.description}`)
    //                   .append(`<td>${ad.price}`)
    //                   .append(`<td>${ad.dateOfPublishing}`)
    let innerDiv = $('<div>')
    let readMoreTag = $('<a class="readMore" href="#">Read more</a>').on('click', function () {
        readMore(ad)
    })

    innerDiv.append(readMoreTag)
    if (ad._acl.creator === sessionStorage.getItem('id')) {

        let edit = $('<a class="editButton" href="#">Edit</a>').on('click', function () {
            loadAdForEdit(ad)
        });
        let deleteATag = $('<a class="deleteButton" href="#">Delete</a>').on('click', function () {
            deleteAd(ad)
        })
        innerDiv.append(edit)
        innerDiv.append(deleteATag);
    }
    div.append(innerDiv)
    $('#ads').append(div)
}

function checkIsValid(title, price) {
    let regex = /^-?\d+\.?\d*$/g;

    if (title.length < 5) {
        return 'Title must be at least 5 char'
    }
    if (!regex.test(price)) {
        return "Price is not a number"
    }

    if (Number(price) <= 0) {
        return "Price must be greater than 0"
    }

    return '';
}