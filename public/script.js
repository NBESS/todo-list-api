// render an input field to Todo list when the "Add" button is clicked
function renderTodos(){

    $.get('http://localhost:3000/api/todos')
        .then((data)=>data.map((todo)=>{
            const $newTodoHtml = $(`
        <li class="todo-item">
        <input class="todo-input" type="text" value="${todo.todo}">
        <div class="buttons">
            <button class="update-button todo-item-button">Save</button>
            <button class="delete-button todo-item-button">Delete</button>
        </div>
        </li>
        `);
        return $('.add').before($newTodoHtml);
    }))
}
document.addEventListener('DOMContentLoaded', ()=>{

    renderTodos();
})

$('.add-todo').on('click', ()=>{
    return $('.add').before(`
    <li class="todo-item">
         <input class="todo-input" type="text" placeholder="Enter a new task">
         <div class="buttons">
             <button class="update-button todo-item-button" onclick="saveClicked()">Save</button>
             <button class="delete-button todo-item-button">Delete</button>
         </div>
     </li>
    `)
})

function saveClicked(updatedTodo){
    updatedTodo = data.body.todo;
    $.post('http://localhost:3000/api/todos', {'todo': 'new'})
        .done(renderTodos);

    
        // $.post("http://localhost:3000/api/todos", {'todo': "Get a job" })
        //   .done((data)=> {
       //     alert( "Data Loaded: " + data );
        //   });
}



