//This file created by: Kübra Veli

$(document).ready(function() {
    //Load existing comments from localStorage
    loadComments();
    //Form submit event handler
    $("#comment-form").submit(function(e) {
        const form = this;
        //Check form validity using HTML5 validation
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
            $(form).addClass('was-validated');
            return;
        }
        e.preventDefault(); //Prevent default form submission
        //Collect form data
        const commentData = {
            name: $("#commentName").val().trim(),
            email: $("#commentEmail").val().trim(),
            text: $("#commentText").val().trim(),
            timestamp: new Date().toISOString() //Add timestamp
        };
        //Create comment HTML template
        const commentHtml = `
            <div class="col-12">
                <div class="card shadow-sm mb-3">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${commentData.name}
                            <small class="text-muted float-end">
                                ${new Date(commentData.timestamp).toLocaleDateString()}
                            </small>
                        </h5>
                        <p class="card-text">${commentData.text}</p>
                        <button class="btn btn-danger btn-sm delete-btn">
                            Delete this comment
                        </button>
                    </div>
                </div>
            </div>
        `;
        //Added new comment and save to localStorage
        $("#comments-list").prepend(commentHtml);
        saveComments();
        form.reset(); //Reset form
        $(form).removeClass('was-validated');
    });
    //Delete comment event handler
    $(document).on('click', '.delete-btn', function () {
        if (confirm("Do you really want to remove this comment?")) {
            $(this).closest('.col-12').remove();
            saveComments(); //Update localStorage
        }
    });
    //Save comments to localStorage
    function saveComments(){
        localStorage.setItem("petComments", $("#comments-list").html());
    }
    //Load comments from localStorage
    function loadComments(){
        const saved = localStorage.getItem("petComments");
        if (saved) {
            $("#comments-list").html(saved);
        }
    }
});