let array =[
    {
        question: 'What is your name ?',
        answer:'My name is Linh'
    },
    {
        question: 'How old are you ?',
        answer:'I am 25 year old'
    }
    
]
// get element
const containerAll = document.querySelector('.container-all');
const btnQues = document.querySelector('.question-btn');
const questionText = document.querySelector('.question-text');
const container = document.querySelectorAll('.container')
// add event 
document.addEventListener('DOMContentLoaded',loadQuestion);
// btnQues.addEventListener('click',openAnswer);
// function
function loadQuestion(){
    // array.forEach(item =>{
    //     console.log(item)
    //     questionText.textContent = item.question;
    // })
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
       
        let container = document.createElement('div');
        container.classList.add('container');
        containerAll.appendChild(container);
        let containerQuestion = document.createElement('div');
        containerQuestion.classList.add('container-question');
        container.appendChild(containerQuestion);
        let questionText = document.createElement('p');
        questionText.classList.add('question-text');
        questionText.textContent = array[i].question;
        containerQuestion.appendChild(questionText);
        let QuestionBtn = document.createElement('button');
        QuestionBtn.classList.add('question-btn')
        QuestionBtn.innerHTML = '<i class="fa-regular fa-square-plus"></i>';
        let containerAnswer = document.createElement('div');
        containerAnswer.classList.add('container-answer');
        container.appendChild(containerAnswer);
        let textAnswer = document.createElement('p');
        textAnswer.textContent = array[i].answer;
        containerAnswer.appendChild(textAnswer);
        // open pop up
        QuestionBtn.addEventListener('click',()=>{
            containerAnswer.classList.toggle('container-answer');
        });
        containerQuestion.appendChild(QuestionBtn); 
    }
}
