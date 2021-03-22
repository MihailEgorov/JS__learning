"use strict";

const todoControl = document.querySelector(".todo-control"), 
      headerInput = document.querySelector(".header-input"), 
      todoList = document.querySelector(".todo-list"), 
      todoRemove = document.querySelector(".todo-remove"), 
      todoCompleted = document.querySelector(".todo-completed"),
      todoUl = document.querySelector(".todo");
    
let todoData = [];

if (localStorage.getItem("todo")) {
  todoData = JSON.parse(localStorage.getItem("todo"));
  render();
}

function render(){
  todoList.textContent = '';
  todoCompleted.textContent = '';


  todoData.forEach(function(item){

    const li = document.createElement("li");
    li.classList.add("todo-item");

    /*=== создание элемента "дела" === */
    li.innerHTML = 
        '<span class="text-todo">' +
          item.value +
        '</span>' + 
        '<div class="todo-buttons">' + 
        '<button class="todo-remove"></button>' + 
        '<button class="todo-complete"></button>' + 
        '</div>';

    if (item.completed) {
      todoCompleted.append(li);
    }
    else{
      todoList.append(li);
    }
    
    /* === статус дел === */
    const btnTodoCompleted = li.querySelector(".todo-complete"); 
    btnTodoCompleted.addEventListener("click", function(){
      item.completed = !item.completed;
      render();
    });

    /* === удаление дел === */
    const btntodoRemove = li.querySelector(".todo-remove");
    btntodoRemove.addEventListener("click", function(){
      todoData.splice(item, 1);
      render();
    });

   });

  todoData.forEach(function(){
    localStorage.setItem("todo", JSON.stringify(todoData));
  });
}

todoControl.addEventListener("submit", function(event){
  event.preventDefault();

  const newTodo = {
    value: headerInput.value,
    completed: false
  };

  if (headerInput.value.trim() !== "") {
    todoData.push(newTodo);
    headerInput.value = "";
    render();
  }

});

render();
