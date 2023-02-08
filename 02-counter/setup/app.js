// // get elememt
// const counter = document.querySelector('.counter');
// const Des = document.querySelector('.Descreasing');
// const Ins = document.querySelector('.Increasing');
// const Reset = document.querySelector('.Reset');

// let number = 0
// // add event listener
// Des.addEventListener('click', descreaseCounter);
// Ins.addEventListener('click', increaseCounter);
// Reset.addEventListener('click', resetCounter);
// // function
// function descreaseCounter(){
//     counter.textContent = number--;

// }
// function increaseCounter(){
//     counter.textContent = number++
// }
// function resetCounter(){
//     number = 0;
//     counter.textContent = number ;
// }

const btns = document.querySelectorAll('.btn');
const value = document.querySelector('.counter');
let counter =0;

// function
btns.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        // console.log(e.target);
        // console.log(btn.classList)
            if(btn.classList.contains('Descreasing')){
                value.textContent = counter--;
            }else if(btn.classList.contains('Increasing')){
                value.textContent = counter++;
            }else{
                counter = 0;
                value.textContent = counter;
            }
    })
})
// btns.forEach(addEventListener('click',btn =>{
//     if(btn.classList.contains('Descreasing')){
//         value.textContent = counter--;
//     }else if(btn.classList.contains('Increasing')){
//         value.textContent = counter++;
//     }else{
//         counter = 0;
//         value.textContent = counter;
//     }
// }));