const form = document.querySelector('#What To Do');
const input = document.querySelector('#Add');
const list = document.querySelector('#List');
addEventListener('submit', function(e) {
    e.preventDefault();
    const nextToDo = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Finished';
    nextToDo.innerText = input.value;
    nextToDo.appendChild(removeButton);
    input.value = '';
    list.appendChild(nextToDo);
    saveData();
});
list.addEventListener('click',function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        saveData();
    }else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('crossout');
        saveData();
    }
})
function saveData(){
    localStorage.setItem('data',list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem('data');
}
showTask();
