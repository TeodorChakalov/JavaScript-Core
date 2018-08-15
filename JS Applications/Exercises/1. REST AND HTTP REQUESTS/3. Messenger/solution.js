function attachEvents() {
    let baseUrl = `https://messenger-f9368.firebaseio.com/messenger`;
    let author = $("#author");
    let content = $("#content");

    $("#submit").on('click', function () {
        if (author.val() !== '' && content.val() !== '') {
            $.ajax({
                method: "POST",
                url: baseUrl + ".json",
                data: JSON.stringify({author: author.val(), content: content.val(), timestamp: Date.now()}),
                success: () => {
                    author.val("");
                    content.val("");
                },
                error: handleError
            });
        }
    });

    $("#refresh").on('click', function () {
        $.ajax({
            method: "GET",
            url: baseUrl + ".json",
            success: handleSuccess,
            error: handleError
        });
    });


    function handleSuccess(data) {
        let sortedIds = Object.keys(data).sort((a, b) => {
            let timeOne = data[a].timestamp;
            let timeTwo = data[b].timestamp;

            return timeOne - timeTwo;
        });
        for (let id of sortedIds) {
            $("#messages").append(data[id].author + ": " + data[id].content);
        }
    }

    function handleError(err) {
        console.log(err);
    }
}