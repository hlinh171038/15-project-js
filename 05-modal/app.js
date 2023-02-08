const btnOpen = document.querySelector('.btn-success');
const overlay = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.close-btn');
// add event listener
btnOpen.addEventListener('click', openPopup);
btnClose.addEventListener('click',closePopup)


// function
function openPopup(){
    overlay.classList.add('overlay')
}
function closePopup(){
    overlay.classList.remove('overlay')
}