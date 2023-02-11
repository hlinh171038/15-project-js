// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels


const navToggleBtn = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.nav-container');
const navLinksContainer = document.querySelector('.nav-title');
const links = document.querySelector('.links');
const topLink = document.querySelector('.scroll-link');
const dateFooter= document.querySelector('#date');
// add event listener
navToggleBtn.addEventListener('click', toggleBtnNav);

//function
// ********** set date ************
window.addEventListener('DOMContentLoaded',()=>{
    dateFooter.innerHTML = new Date().getFullYear();
})
// ********** close links ************
            // function toggleBtnNav(){
            //     navToggle.classList.toggle('nav-toggle');
            // }
    // do by other way
        function toggleBtnNav(){
            let navCon = navLinksContainer.getBoundingClientRect().height;// 0
            let navLinks = links.getBoundingClientRect().height;// 0 
            console.log(navCon, navLinks);
            if(navCon === 0){
                navLinksContainer.style.height = `${navLinks}px`
            }else{
                navLinksContainer.style.height = 0;
            }
            
        }

    //
    window.addEventListener('scroll', ()=>{
      let windownScroll = window.pageYOffset;
      let nav = navContainer.getBoundingClientRect().height;
      if(windownScroll >500){
        topLink.classList.add('top-link');
      }else{
        topLink.classList.remove('top-link');
      }
      if(windownScroll > nav){
        navContainer.classList.add('nav-fixed');
      }else{
        navContainer.classList.remove('nav-fixed');
      }
    })
// ********** fixed navbar ************

