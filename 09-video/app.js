// get element
let switchBtn = document.querySelector('.switch');
let video = document.querySelector('.video-container');
// add event listener
switchBtn.addEventListener('click',()=>{
    if(!switchBtn.classList.contains('slide')){
        switchBtn.classList.add('slide');
        video.pause();
    }else{
        switchBtn.classList.remove('slide');
        video.play();
    }
});
// function
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});