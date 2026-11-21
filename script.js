document.addEventListener("DOMContentLoaded", function () {
  console.log("KING ASAD German Learning Website is ready!");

  const welcomeButton = document.getElementById("welcomeButton");

  if (welcomeButton) {
    welcomeButton.addEventListener("click", function () {
      alert("Welcome to KING ASAD German Learning!");
    });
  }
});
