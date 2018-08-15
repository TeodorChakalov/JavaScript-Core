$(async () => {
    const data = await $.get('./data.json');
    const contactHTML = await $.get('./templates/contact.hbs');

    let contactTemplate = Handlebars.compile(contactHTML);
    let finalData = {contacts: data};
    let resultHtml = contactTemplate(finalData);

    $('#list').append(resultHtml);

    const partialContactsHTML = await $.get('./templates/partials/personalContacts.hbs');
    const partialInfoHTML = await $.get('./templates/partials/personalInfo.hbs');
    Handlebars.registerPartial('personalContacts', partialContactsHTML);
    Handlebars.registerPartial('personalInfo', partialInfoHTML);
    const detailsHtml = await $.get('./templates/details.hbs');
    const detailsTemplate = Handlebars.compile(detailsHtml);

    $('.contact').on('click', function () {

        $('.content > div').removeClass('contactSelected');
        $(this).addClass('contactSelected');

        let index = $(this).attr('data-id');
        let result = detailsTemplate(data[index]);

        $('#details > div').remove();
        $('#details').append(result);
    });
});