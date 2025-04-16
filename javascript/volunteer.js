//This file created by: Kübra Veli


$(document).ready(function() {
    const form = $("#guardian-application");

    //Form submit event handler
    form.submit(function(e) {
        let isValid = true; //Form validity
        e.preventDefault(); //Prevent default form submission
        clearNotifications(); //Clear existing alerts
        resetValidation(); //Reset form validation states

        //Get form values from user
        const name = $("#guardianName").val().trim();
        const email = $("#guardianEmail").val().trim();
        const phone = $("#guardianContact").val().trim();
        const talents = $("input[name='talents']:checked").length;
        const servicePref = $("#servicePreference").val().trim();

        //Validate Name
        if (!/^[A-Za-z ]{3,30}$/.test(name)) {
            $("#guardianName").addClass("is-invalid");
            isValid = false;
        }
        //Validate Email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $("#guardianEmail").addClass("is-invalid");
            isValid = false;
        }
        //Validate Phone
        if (!/^\+[1-9]\d{1,14}$/.test(phone)) {
            $("#guardianContact").addClass("is-invalid");
            isValid = false;
        }
        //Validate Role Selection
        if (!servicePref) {
            $("#servicePreference").addClass("is-invalid");
            isValid = false;
        }
        //Validate Skills
        if (talents === 0) {
            $("input[name='talents']").closest("fieldset").addClass("is-invalid");
            isValid = false;
        }
        //Final validation check
        if (isValid) {
            showNotification("Thank you for signing up! We appreciate your kindness", "success", 3000);
            form[0].reset(); //Reset form
        } else {
            showNotification("Please fix the errors in your form and try again", "danger");
        }
    });

    //Input change handler to clear validation states
    $("input, select").on("input", function() {
        $(this).removeClass("is-invalid");
    });

    //Function to show Bootstrap alerts
    function showNotification(message, type, timeout = 5000) {
        const alert = $(`
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `);
        form.prepend(alert); //Add alert to form
        if (timeout) setTimeout(() => alert.alert("close"), timeout); //for auto-close alert
    }

    //Function to clear all notifications
    function clearNotifications() {
        $(".alert").alert("close");
    }
    //Function to reset validation states
    function resetValidation() {
        $(".is-invalid").removeClass("is-invalid");
    }
});