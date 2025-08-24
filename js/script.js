document.getElementById("subscribeBtn").addEventListener("click", function () {
  let email = document.querySelector(".newsletter-box input").value;
  if (email) {
    alert("Thank you for subscribing with " + email);
  } else {
    alert("Please enter a valid email address.");
  }
});
// Newsletter Subscribe
document.getElementById("subscribeBtn").addEventListener("click", function() {
  let email = document.querySelector(".newsletter-box input").value;
  if (email) {
    alert("Thank you for subscribing with " + email);
  } else {
    alert("Please enter a valid email address.");
  }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {    
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});