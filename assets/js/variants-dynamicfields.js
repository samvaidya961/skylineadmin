// dynamic fields
$(document).ready(function () {
    var maxField = 20; //Input fields increment limitation
    var addButton = $('.add_button1'); //Add button selector
    var wrapperip1 = $('.field_wrapper1'); //Input field wrapper
    var fieldHTML = '<div class="mb-4"><input type="text" class="form-control form-control-sm d-inline m-1 mb-2" name="field_name1[]" value=""/><a href="javascript:void(0);" class="remove_button mx-1"><span class="material-icons text-danger">remove_circle_outline</span></a><div class="d-flex variantmorevalues"><input type="text" class="form-control form-control-sm m-1" placeholder="MRP" name="field_name2[]"><input type="text" class="form-control form-control-sm m-1" placeholder="Discount" name="field_name3[]"><input type="text" class="form-control form-control-sm m-1" placeholder="GST" name="field_name4[]"><input type="text" class="form-control form-control-sm m-1" placeholder="Price" name="field_name5[]"><select class="form-select form-select-sm m-1" aria-label=".form-select-sm example" name="field_name6[]"><option selected>In Stock</option><option value="1">Out Of Stock</option></select></div></div>'; //New input field html
    var x = 1; //Initial field counter is 1

    //Once add button is clicked
    $(addButton).click(function () {
        //Check maximum number of input fields
        if (x < maxField) {
            x++; //Increment field counter
            $(wrapperip1).append(fieldHTML); //Add field html
        }
    });

    //Once remove button is clicked
    $(wrapperip1).on('click', '.remove_button', function (e) {
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});

