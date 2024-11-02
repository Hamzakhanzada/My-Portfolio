document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("offcanvasToggle");
    const offcanvas = document.getElementById("offcanvasRight");
    const closeButton = document.getElementById("offcanvasClose");
  
    // Function to toggle offcanvas visibility
    function toggleOffcanvas() {
      offcanvas.classList.toggle("invisible");
      offcanvas.classList.toggle("translate-x-full");
    }
  
    // Open offcanvas on button click
    toggleButton.addEventListener("click", toggleOffcanvas);
  
    // Close offcanvas on close button click
    closeButton.addEventListener("click", toggleOffcanvas);
  });
  