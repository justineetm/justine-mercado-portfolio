const filterButtons = document.querySelectorAll('.filter-btn')
const projectCards = document.querySelectorAll('.project-card')
const emptyMessage = document.querySelector('.empty-message')


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
