const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// get element
let btn = document.querySelector('#btn');
let color = document.querySelector('.color');

// add event listener
btn.addEventListener('click',changeBgColor);
// function
function changeBgColor(){
    // take random vd =2
    let randomColor = Math.floor(Math.random() * colors.length);
    console.log('this'+randomColor);
    //take 2 to change bg color
    document.body.style.backgroundColor = colors[randomColor];
    // show to inner
    color.textContent = colors[randomColor];
}
