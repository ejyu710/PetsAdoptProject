// This file created by: Kübra Veli


$(document).ready(function () {
    //Set up the volunteer role sections
    $('[class^="role-info"]').collapse({toggle: false});

    //Handle form submission
    $("#guardian-application").submit(function (e) {
        e.preventDefault();

        clearNotifications();

        const contact = $("#guardianContact").val();
        const email = $("#guardianEmail").val();
        let isValid = true;

        //Make sure email looks okay
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showNotification('Please enter a valid email address', 'danger');
            isValid = false;
        }

        //Make sure phone number has a valid format
        if (!/^\+?[1-9]\d{9,14}$/.test(contact)) {
            showNotification('Please enter a valid phone number', 'danger');
            isValid = false;
        }

        //Make sure they picked at least one skill
        if (!$("input[name='talents']:checked").length) {
            showNotification('Please select at least one capability', 'warning');
            isValid = false;
        }

        //Form process
        if (isValid) {
            showNotification('Application received! Thank you for your commitment.', 'success', 3000);
            $(this)[0].reset();
        }
    });

    //Show alerts with custom message and type
    function showNotification(message, type, timeout = 5000) {
        const alert = $(`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`);
        $('#guardian-application').prepend(alert);
        if (timeout) setTimeout(() => alert.alert('close'), timeout);
    }

    //Remove all existing alerts
    function clearNotifications() {
        $('.alert').alert('close');
    }
});
