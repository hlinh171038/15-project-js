// call variable
const likeIcon = document.querySelector('.heart__icon');
const submitForm = document.querySelector('.submit_btn');
const userName = document.querySelector('#user');
const comment = document.querySelector('#comment');
const feedBackContainer = document.querySelector('.comments__container');
const countLike = document.querySelector('.count');
// add event listener
window.addEventListener('DOMContentLoaded',useLocalStorage);
likeIcon.addEventListener('click',addLike);
submitForm.addEventListener('click',submitFeedBack);



let positiveFeedback = false;
let arrNewInfo =[];
let count = 0;
// submit feed back
function submitFeedBack(e){
    e.preventDefault();
    // check have form and name
    if(userName.value && comment.value){
        let user = userName.value;
        let cmt = comment.value;
        let objInfo = {
            'id':Math.floor((Math.random()*1000)+1),
            'user':user,
            'comment':cmt,
            'positiveFeedback':positiveFeedback
        }
        arrNewInfo.push(objInfo);
        saveLocalStorage(objInfo);
        // count like
        if(positiveFeedback === true){
            count++;
        }
        countLike.textContent = count;
        // remove name and comment after add new feed back
        resetForm();
        addNewFeeadBack(arrNewInfo);
        
    
    }else{
        console.log('typing the name and comment, please')
    }
}
// like icon
function addLike(){
    likeIcon.classList.toggle('liked');
    if(likeIcon.classList.contains('liked')){
        likeIcon.innerHTML = `<i class="fas fa-heart"></i>`;
        positiveFeedback = true;
    }else{
        likeIcon.innerHTML = `<i class="far fa-heart"></i>`;
        positiveFeedback = false;
    }
}
//....................................

function addNewFeeadBack(arr){
    // first character of image 
    
    let result = arr.map(item =>{
                    let firstChar = item.user.charAt(0);
                    return `<div class="comment__card">
                                <div class="pic center__display">
                                    ${firstChar}
                                </div>
                                <div class="comment__info">
                                    <small class="nickname">
                                        ${item.user}
                                    </small>
                                    <p class="comment">
                                        ${item.comment}
                                    </p>
                                    <div class="comment__bottom">
                                        <div class="heart__icon--comment">
                                            ${item.positiveFeedback ?`<i class="fas fa-heart positive"></i>`:`<i class="far fa-heart"></i>`}
                                        </div>
                                        <button>
                                            reply
                                        </button>
                                    </div>
                                </div>
                            </div>  `
                }).join('');
    feedBackContainer.innerHTML = result;

}
 // reset form
function resetForm(){
  userName.value ='';
  comment.value = '';
  likeIcon.innerHTML = `<i class="far fa-heart"></i>`
  positiveFeedback = false;
} 
function useLocalStorage(){
    // check local storage
    let items;
    if(localStorage.getItem('items') === null || !localStorage.getItem('items') ){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }

    // show in broswer
  let result=  items.map(item =>{
        let firstChar = item.user.charAt(0);
        return `<div class="comment__card">
                    <div class="pic center__display">
                        ${firstChar}
                    </div>
                    <div class="comment__info">
                        <small class="nickname">
                            ${item.user}
                        </small>
                        <p class="comment">
                            ${item.comment}
                        </p>
                        <div class="comment__bottom">
                            <div class="heart__icon--comment">
                                ${item.positiveFeedback ?`<i class="fas fa-heart positive"></i>`:`<i class="far fa-heart"></i>`}
                            </div>
                            <button>
                                reply
                            </button>
                        </div>
                    </div>
                </div>  `
    }).join('');
    feedBackContainer.innerHTML = result;
    // set back local storage
    localStorage.setItem('items',JSON.stringify(items));
}
// save local storage
function saveLocalStorage(item){
    // check
    let items;
    if(localStorage.getItem('items') === null || !localStorage.getItem('items') ){
        items =[];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    // push item into local items
    items.push(item);
    // give back the local storage
    localStorage.setItem('items',JSON.stringify(items))
}