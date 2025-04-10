// Create by Eunji

$(document).ready(function () {

    // Random animals
    const pets = ["Cat🐈", "Dog🐶", "Rabbit🐰", "Parrot🦜"];

    // Generate and display a random pet when the button is clicked
    $("#randomBtn").click(function () {
      const pick = pets[Math.floor(Math.random() * pets.length)];
      $("#randomPet").text("Today's recommended pet: " + pick);
    });
});