const filterButtons = document.querySelectorAll('.filter-btn')
const projectCards = document.querySelectorAll('.project-card')
const emptyMessage = document.querySelector('.empty-message')
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const projectImages = document.querySelectorAll(".project-card img");
const imageModal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");
const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY && window.scrollY > 80) {
    // Scrolling down: hide navbar
    navbar.classList.add("navbar-hidden");
  } else {
    // Scrolling up: show navbar
    navbar.classList.remove("navbar-hidden");
  }
  lastScrollY = window.scrollY;
});
filterButtons.forEach((button) => {
    button.addEventListener('click', ()=>{
filterButtons.forEach((btn =>{
    btn.classList.remove('active-btn')}));
button.classList.add('active-btn') 
 const filterValue = button.getAttribute('data-filter')
 let visibleCount = 0 
 projectCards.forEach((card) => {
    const cardCategory = card.getAttribute('data-category')
    if (filterValue === 'all' || filterValue === cardCategory) {
         card.style.display = 'block'
    visibleCount++ }
    else {
        card.style.display = 'none'
    }
 })

    if(visibleCount === 0) {
        emptyMessage.style.display = 'block' }
         else {
             emptyMessage.style.display = 'none'
            }
});

});
contactForm.addEventListener("submit", async function (event) {
  // 1. Stop the browser from redirecting to Formspree's page
  event.preventDefault();

  // 2. Pack up all the inputs (name, email, message) from the form
  const formData = new FormData(contactForm);
  formStatus.textContent = "Sending...";

  // 3. Send the data to your Formspree URL silently in the background
  const response = await fetch(contactForm.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  // 4. Show confirmation text and clear the boxes if it worked
  if (response.ok) {
    formStatus.textContent = "Message sent! Thanks for reaching out.";
    contactForm.reset();
  } else {
    formStatus.textContent = "Oops! Something went wrong. Please try again.";
  }
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close the dropdown automatically when a visitor taps a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Close the menu automatically when the user scrolls
window.addEventListener("scroll", () => {
  if (navLinks.classList.contains("show")) {
    navLinks.classList.remove("show");
  }
});

// Close the menu when tapping anywhere outside the navbar
document.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar")) {
    navLinks.classList.remove("show");
  }
});
projectImages.forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    imageModal.style.display = "flex";
  });
});

// Close when clicking the X button
closeModal.addEventListener("click", () => {
  imageModal.style.display = "none";
});

// Close when clicking the dark background outside the image
imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    imageModal.style.display = "none";
  }
});