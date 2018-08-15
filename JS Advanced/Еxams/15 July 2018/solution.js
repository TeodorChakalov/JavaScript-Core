function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let productForm = $('input[placeholder="Enter product"]');
    let priceForm = $('input[class="input1"]')[0];
    let quantityForm = $('input[class="input1"]')[1];
    // console.log(priceForm.value);
    // console.log(quantityForm.value)

    productForm.on("input", function () {
        $("#submit").prop("disabled", false);
        if (productForm.val() == '') {
            $("#submit").prop("disabled", true);
        }
    });

    let sumCapacity = 0;
    let sumQuantity = 0;

    $('#submit').on('click', function () {
        $("ul").append($("<li>").text(`Product: ${productForm.val()} Price: ${priceForm.value} Quantity: ${quantityForm.value}`));
        $("#submit").prop("disabled", true);

        let capacityValue = $('input[class="input1"]')[1].value;
        let quantityValue = $('input[class="input1"]')[0].value;

        sumCapacity += Number(capacityValue);
        sumQuantity += Number(quantityValue);

        if(sumCapacity >= 150){
            $("#capacity").addClass('fullCapacity').val('full');
            $(productForm).prop("disabled", true);
            $(priceForm).prop("disabled", true);
            $(quantityForm).prop("disabled", true);
        }else{
            $("#capacity").val(sumCapacity);
        }
        $("#sum").val(sumQuantity);

        productForm.val('');
        $('input[class="input1"]')[0].value = 1;
        $('input[class="input1"]')[1].value = 1;
    });
}
