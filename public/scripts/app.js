console.log("Yes!")

$(() => {
    console.log("Inside, Yes!");

    // --------------- Functions --------------- //
    // Title Edit
    const editTitle = event => {
        const $select = $(event.currentTarget);
        $select.siblings("input").val($select.text());
        $select.hide();
        $select.siblings(".title-edit-buttons").css("display", "flex");
        $select.siblings("input").show();
    }

    // Apply Title Edit
    const applyTitleEdit = event => {
        const $select = $(event.currentTarget);
        const $inputVal = $select.parent().siblings("input").eq(0).val();
        const $title = $select.parent().siblings("h4");
        $title.text($inputVal);
        $select.parent().hide();
        $select.parent().siblings("input").hide();
        $title.show();
        $("#currentLists").val($("#todo-list-1").html())
        // console.log($("#currentLists").val())
    }

    // Cancel Title Edit
    const cancelTitleEdit = event => {
        const $select = $(event.currentTarget);
        const $title = $select.parent().siblings("h4");
        $select.parent().hide();
        $select.parent().siblings("input").hide();
        $title.show();
    }

    // Toggle Checkbox
    const checkToggle = event => {
        const $select = $(event.currentTarget);
        const $isChecked = $select.is(":checked");
        $isChecked ? $select.parent().addClass("done") : $select.parent().removeClass("done");
    }

    // Edit Existing Item
    const editItem = event => {
        const $select = $(event.currentTarget);
        const $label = $select.parent().siblings("label").eq(0);
        const $modify = $select.parent();
        const $editor = $select.parent().siblings(".list-item-editor").eq(0);
        $label.hide();
        $modify.hide();
        $editor.css("display", "flex");
        $editor.find("input").val($label.find(".item-text").text())
    }

    // Delete Existing Item
    const deleteItem = event => {
        const $item = $(event.currentTarget).parent().parent();
        $item.remove();
        
        // Submit after deletion
        $("#currentLists").val($("#todo-list-main").html());
        $("#todo-list-main").submit();
    }

    // Apply Changes to Item
    const applyEdit = event => {
        const $select = $(event.currentTarget);
        const $label = $select.parent().parent().siblings("label").eq(0);
        const $modify = $select.parent().parent().siblings(".list-item-modify");
        const $editor = $select.parent().parent();
        $label.find(".item-text").text($editor.find("input").val());
        $label.css("display", "flex");
        $modify.css("display", "flex");
        $editor.hide();
    }

    // Cancel Changes to Item
    const cancelEdit = event => {
        const $select = $(event.currentTarget);
        const $label = $select.parent().parent().siblings("label").eq(0);
        const $modify = $select.parent().parent().siblings(".list-item-modify");
        const $editor = $select.parent().parent();
        $label.css("display", "flex");
        $modify.css("display", "flex");
        $editor.hide();
    }

    // Add Item List
    const addItem = event => {
        const $value = $(event.currentTarget).siblings("input").eq(0).val();
        $(event.currentTarget).parent().siblings(".list-item-wrapper").append(`<label><input type="checkbox">${$value}</label>`)
    }

    // Constant Update Input
    const formInputUpdate = () => {
        const $form = $("#todo-list-main");
        console.log($form.html())
        $("#currentLists").val($form.html());
    }

    // --------------- Events --------------- //
    $(".todo-list-title-wrapper h4").on('click', this, editTitle);
    $(".todo-list-title-wrapper .apply-edit").on('click', this, applyTitleEdit);
    $(".todo-list-title-wrapper .cancel-edit").on('click', this, cancelTitleEdit);
    $(".list-item-wrapper label input[type=checkbox]").on("click", this, checkToggle);
    $(".edit").on('click', this, editItem);
    $(".delete").on('click', this, deleteItem);
    $(".list-item-wrapper .apply-edit").on('click', this, applyEdit);
    $(".list-item-wrapper .cancel-edit").on('click', this, cancelEdit);
    $(".add-item").on('click', this, addItem);
    $("#todo-list-main input").on('input', formInputUpdate);
})