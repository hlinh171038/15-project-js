// get element
const btnGrocery = document.querySelector('.btn-grocery');
const itemsGrocery = document.querySelector('.items-container');
const inputFormGrocery = document.querySelector('.grocery-input');
const filter = document.querySelector('.filter');
// const btnTrashItem = document.querySelector('.btn-trash');
// const btnEditItem =  document.querySelector('.btn-edit');
// add event listener
window.addEventListener('DOMContentLoaded',getLocalStorage)
btnGrocery.addEventListener('click',addNewItem);
itemsGrocery.addEventListener('click',deleteCurrentItem);
filter.addEventListener('click',optionFilter);
// create item when click btnGrocery
function drawItem(value){
    let item = document.createElement('div');
    item.classList.add('item');
    let p = document.createElement('p');
    p.classList.add('content');
    p.textContent = value;
    item.appendChild(p);
    saveLocalStorage(value);
    let trashBtn = document.createElement('button');
    trashBtn.classList.add('btn-trash');
    trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    item.appendChild(trashBtn);
    let editBtn = document.createElement('button');
    editBtn.classList.add('btn-edit');
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    item.appendChild(editBtn);
    itemsGrocery.appendChild(item);
}

function addNewItem(e){
    e.preventDefault();
    let valueInput=inputFormGrocery.value;
    if(valueInput === ''){
        alert('typing your grocery name ...');
    }else{
        drawItem(valueInput);
    inputFormGrocery.value = ' '
    }
    

}
 // delete items

 function deleteCurrentItem(e){
    const currentItem = e.target;
    if(currentItem.classList[0] === 'btn-trash'){
        console.log(currentItem.parentElement);
        let parentItem = currentItem.parentElement;
        deleteLocalStorage(parentItem);
        parentItem.remove();
    }
    if(currentItem.classList[0] ==='btn-edit'){
        let parentItem = currentItem.parentElement;
        parentItem.classList.toggle('toggle');
    }

 }

 // filter
 function optionFilter(e){
    let itemsChild = itemsGrocery.childNodes;
    let value = e.target.value;
    itemsChild.forEach(item =>{
        switch(value){
            case 'all':
                item.style.display = 'flex';
                break;
            case 'complete':
                if(item.classList.contains('toggle')){
                    item.style.display = 'flex';
                }else{
                    item.style.display = 'none';
                }
                break;
            case 'uncomplete':
                if(!item.classList.contains('toggle')){
                    item.style.display = 'flex';
                }else{
                    item.style.display = 'none';
                }
                break;
        }
    })
    
 }
  
 // save content to local storage
 function saveLocalStorage(item){
    let items;
    // check if have any localstorage with name items;
    if(localStorage.getItem('items') === 'null' ||!localStorage.getItem('items')){
        console.log(items)
        items =[];
    }else {
        items = JSON.parse(localStorage.getItem('items'));

    }
    //push into local items
    items.push(item);
    // set back to loacl storage
    localStorage.setItem('items',JSON.stringify(items));
 }

 // get local storage to used
 function getLocalStorage(){
    let items;
     if(localStorage.getItem('items') === 'null' || !localStorage.getItem('items')){
        items = [];
     }else{
        items = JSON.parse(localStorage.getItem('items'));
     }
     console.log(items)
     items.forEach(groItem =>{
        let item = document.createElement('div');
        item.classList.add('item');
        let p = document.createElement('p');
        p.classList.add('content');
        p.textContent = groItem;
        item.appendChild(p);
        let trashBtn = document.createElement('button');
        trashBtn.classList.add('btn-trash');
        trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        item.appendChild(trashBtn);
        let editBtn = document.createElement('button');
        editBtn.classList.add('btn-edit');
        editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        item.appendChild(editBtn);
        itemsGrocery.appendChild(item);
     })
 }

 // delete from local storage
 function deleteLocalStorage(item){
    let items;
     if(localStorage.getItem('items') === 'null' || !localStorage.getItem('items')){
        items = [];
     }else{
        items = JSON.parse(localStorage.getItem('items'));
     }
     // delete
     let pText = item.children[0].innerText;
     // index
     let index = items.indexOf(pText);
     // delete
     items.splice(index,1);
     localStorage.setItem('items',JSON.stringify(items));
 }
