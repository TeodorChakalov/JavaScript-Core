const URL = 'https://phonebook-31672.firebaseio.com/phonebook';

$('#btnLoad').on('click', function () {
    $('#phonebook').empty();
    $.ajax({
        method: 'GET',
        url: URL + '.json',
        success: handleSuccess,
        error: handleError
    });

    function handleSuccess(res) {
        for (let key in res) {
            let li = $(`<li>${res[key].name}: ${res[key].phone} </li>`)
                .append($('<a href="#">[Delete]</a>')
                    .click(function () {
                        $.ajax({
                            method: 'DELETE',
                            url: URL + '/' + key + '.json'
                        }).then($(li).remove())
                            .catch(handleError)
                    }));
            $('#phonebook').append(li)
        }
    }
});

$('#btnCreate').on('click', function () {
    let name = $('#person').val();
    let phone = $('#phone').val();

    if (name !== '' && phone !== '') {
        $.ajax({
            method: 'POST',
            url: URL + '.json',
            data: JSON.stringify({name, phone}),
            success: handleSuccess,
            error: handleError
        });
    }

    function handleSuccess(res) {
        let li = $(`<li>${name}: ${phone} </li>`)
            .append($('<a href="#">[Delete]</a>')
                .click(function () {
                    $.ajax({
                        method: 'DELETE',
                        url: URL + '/' + res.key + '.json'
                    }).then($(li).remove())
                        .catch(handleError)
                }));
        $('#phonebook').append(li);

        $('#person').val('');
        $('#phone').val('');
    }
});

function handleError(err) {
    console.log(err)
}