const filterButtons = document.querySelectorAll('.filter-btn')
const projectCards = document.querySelectorAll('.project-card')
const emptyMessage = document.querySelector('.empty-message')
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");


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