const form = document.getElementById('adoptForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!form.checkValidity()) {
	event.stopPropagation();
	form.classList.add('was-validated');
  } else {
	successMessage.classList.remove('d-none');
	form.reset();
	form.classList.remove('was-validated');
  }
});