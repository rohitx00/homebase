// Assuming you have a way to select or identify the property image
function showPropertyDetails() {
  // Get the modal element
  const modal = document.getElementById("propertyModal");

  // Set the image source and other details (you can add more logic if you have multiple properties)
  document.getElementById("modal-property-image").src =
    "./assets/images/property-4.png"; // Update this with the correct image path

  // Show the modal
  modal.style.display = "block";
}

function closePropertyDetails() {
  // Get the modal element
  const modal = document.getElementById("propertyModal");

  // Hide the modal
  modal.style.display = "none";
}

// Optional: Close modal when clicking outside of the modal content
window.onclick = function (event) {
  const modal = document.getElementById("propertyModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
