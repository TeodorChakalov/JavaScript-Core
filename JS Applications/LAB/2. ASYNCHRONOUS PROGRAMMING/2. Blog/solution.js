function attachEvents() {
    const USERNAME = 'peter';
    const PASSWORD = 'p';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {"Authorization": 'Basic ' + BASE_64};

    let URL = 'https://baas.kinvey.com/appdata/kid_H1BbHaZVQ/';

    $('#btnLoadPosts').on('click', function () {
        $('#posts').empty();
        $.ajax({
            method: 'GET',
            url: URL + 'posts',
            headers: AUTH
        }).then(function (res) {
            for (let post of res) {
                $('#posts').append(`<option id="${post._id}" body="${post.body}">${post.title}</option>`);
            }
        }).catch(function (err) {
            console.log(err)
        });
    });

    $('#btnViewPost').on('click', function () {
        let postId = $('#posts').find(':selected').attr('id');
        let body = $('#posts').find(':selected').attr('body');
        let optionVal = $('#posts').val();

        $.ajax({
            method: 'GET',
            url: URL + `comments/?query={"post_id":"${postId}"}`,
            headers: AUTH
        }).then(function (res) {
            $('#post-body').text('');
            $('#post-comments').text('');

            $('#post-title').text(optionVal);

            $('#post-body').append(`<li>${body}</li>`);

            for (let line of res) {
                $('#post-comments').append(`<li>${line.text}</li>`)
            }
        }).catch(function (err) {
            console.log(err);
        });
    });
}