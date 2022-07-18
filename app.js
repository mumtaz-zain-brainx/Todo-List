// Getting Input/Items 
const addBtn = document.getElementById("addBtn");
const task = document.getElementById("task");

const todos = document.getElementById("todos");

const deleteBtns = document.getElementsByClassName("delete");
const checkboxBtns = document.getElementsByClassName("chkbox");


addDeleteBtn()
addTaskCompleted()
// Adding Event Listener(s)

task.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask()
    }
});


addBtn.addEventListener("click",addTask);

function addTask(){
    var val = task.value;
    if( val == ""){
        alert("Enter task details");
    }
    else{

        const li = document.createElement('li');
        li.classList.add("list-group-item");
        li.classList.add("listItem");
    
        // Task details and checkbox creatation
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("ms-1");
        taskDiv.classList.add("d-flex");
        taskDiv.classList.add("align-items-center");
    
        const checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("me-2");
        checkbox.classList.add("chkbox");
    
        const span = document.createElement("span")
        const spanNode = document.createTextNode(task.value);
        span.appendChild(spanNode);

        const editInput = document.createElement("INPUT");
        editInput.setAttribute("type","text");
        editInput.classList.add("editInput");
    
        taskDiv.appendChild(checkbox)
        taskDiv.appendChild(span)
    
        // List button creatation 
        const btnDiv = document.createElement("div");
    
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('delete');
        const deleteIcon = document.createElement("i")
        deleteIcon.classList.add("fa");
        deleteIcon.classList.add("fa-trash");
        deleteIcon.classList.add("text-danger");
    
        deleteBtn.appendChild(deleteIcon)
    
        
        const editBtn = document.createElement("button");
        editBtn.classList.add('btn');
        editBtn.classList.add('edit');
        const editIcon = document.createElement("i")
        editIcon.classList.add("fa");
        editIcon.classList.add("fa-edit");
        editIcon.classList.add("text-primary");
    
        editBtn.appendChild(editIcon)
        
    
        btnDiv.appendChild(deleteBtn)
        btnDiv.appendChild(editBtn)
    
    
    
        li.appendChild(taskDiv)
        li.appendChild(btnDiv)
    
        todos.appendChild(li);
    
        task.value = ""
    
        addDeleteBtn()
        addTaskCompleted()

    }
}




function addTaskCompleted(){
    for(let i = 0; i<checkboxBtns.length;i++){
        checkboxBtns[i].addEventListener('click', function() {
            if(checkboxBtns[i].checked){
                checkboxBtns[i].nextSibling.style.textDecoration = "line-through";
            }else{
                checkboxBtns[i].nextSibling.style.textDecoration = "none";
            }
        });
    }
}



function addDeleteBtn(){

    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].onclick = function() {
        var listItem = this.parentElement.parentElement;
        listItem.style.display = "none";
      }
    }
}
