$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let template = $('#cat-template').html();
        let compiled = Handlebars.compile(template);
        let render = compiled({cats: window.cats});
        $('#allCats').append(render);

        $('.btn-primary').click(function () {
           let clickedElement = $(this);
           if(clickedElement.text() === 'Show status code'){
               clickedElement.text('Hide status code')
           }else{
               clickedElement.text('Show status code')
           }
           clickedElement.next('div').toggle();
        });
    }
});
