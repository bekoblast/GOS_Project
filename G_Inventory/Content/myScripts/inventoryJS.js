$(document).ready(function () {
    $('#productsTable').DataTable({
        "columnDefs": [
            {
                "targets": [0],
                "visible": false,
                "searchable": false
            },
        ],
        "pageLength": 100
    });
    //==================================================
    validate();
});
//======================================================
function validate() {
    $('#addProductForm').validate({
        rules: {
            pName: {
                required: true,
                minlength: 2
            },
            pQuantity: {
                required: true,
                digits: true,
                min: 1
            },
            pCost: {
                required: true,
                number: true,
                min: 0.01
            },
            pPrice: {
                required: true,
                number: true,
                min: 0.01
            },
        },
        messages: {
            pName: {
                required: "Product Name is Required!",
                minlength: "Product name must consist at least 2 characters"
            },
            pQuantity: {
                required: "Quantity is Required",
                digits: "Numbers only",
                min: "Minimum Quantity is 1"
            },
            pCost: {
                required: "Cost is Required",
                number: "Numbers Only",
                min: "minimum cost value is 0.01"
            },
            pPrice: {
                required: "Price is Required",
                number: "Numbers Only",
                min: "minimum price value is 0.01"
            },
        },

    });
}
//======================================================
$(document).on('click', '#submitBtn', function () {
    if ($('#addProductForm').valid()) {
        //alert('success');
        var product = {
            Name: $('#productName').val(),
            CategoryID: $('#productCategory').val(),
            Qty: $('#productQuantity').val(),
            Cost: $('#productCost').val(),
            Price: $('#productPrice').val(),
        }

        $.ajax({
            url: '/Inventory/AddProduct',
            method: 'POST',
            data: product,
            success: function () {
                alert('Product added succefully!')
                $('#AddProductModal').modal('toggle');
                var table = $('#addProductForm').DataTable({
                    ajax: "data.json"
                });
                table.ajax.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);

            }
        });
    }

});
//======================================================