  function showDetails(petName) {
	// Get all cards
	const cards = document.querySelectorAll(".card");
	let petInfo = "";
  
	// Loop to find the clicked data and get its details
	cards.forEach(card => {
	  if (card.getAttribute("onclick").includes(petName)) {
		petInfo = card.getAttribute("data-pet");
	  }
	});
  
	if (petInfo) {
	  const detailBox = document.getElementById("pet-details");
	  const petInfoText = document.getElementById("pet-info-text");
  
	  petInfoText.textContent = petInfo;
	  // use to display the details by clicked on card
	  detailBox.classList.remove("d-none");
	  // use to scroll down where details are shown
	  detailBox.scrollIntoView({ behavior: 'smooth' });
	}
  }

  
  
  