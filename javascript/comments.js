// This file created by: Kübra Veli
$(document).ready(function () {
    // Load existing comments
    loadComments();

    $("#comment-form").submit(function (e) {
        const form = this;

        // Check form validity
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
            $(form).addClass('was-validated');
            return;
        }

        e.preventDefault();

        const commentData = {
            name: $("#commentName").val().trim(),
            email: $("#commentEmail").val().trim(),
            text: $("#commentText").val().trim(),
            timestamp: new Date().toISOString()
        };

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

        $("#comments-list").prepend(commentHtml);
        saveComments();
        form.reset();
        $(form).removeClass('was-validated');
    });

    // Delete comment handler
    $(document).on('click', '.delete-btn', function () {
        if (confirm("Do you really want to remove this comment?")) {
            $(this).closest('.col-12').remove();
            saveComments();
        }
    });

    function saveComments() {
        localStorage.setItem("petComments", $("#comments-list").html());
    }

    function loadComments() {
        const saved = localStorage.getItem("petComments");
        if (saved) {
            $("#comments-list").html(saved);
        }
    }
});