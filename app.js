const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'));

const todoList = [
  {
    id: 1,
    todo: 'Implement a REST API',
  },
  {
    id: 2,
    todo: 'Build templates',
  },
  {
    id: 3,
    todo: 'Implement Marketing Plan',
  },
  {
    id: 4,
    todo: 'Profit',
  },
];

// GET /api/todos
app.get('/api/todos', (req, res) => {
  res.json(todoList);
})

// GET /api/todos/:id

app.get('/api/todos/:id', (req, res) => {
  const todo =
  todoList.find((todo) => {
    return todo.id === Number.parseInt(req.params.id);
  }) || {};
  const status = Object.keys(todo).length ? 200 : 404;
  res.status(status).json(todo);
})

// POST /api/todos
app.post('/api/todos', (req, res) => {
  if (req.body.todo){

    const maxId = todoList.reduce((max,currentTodo) => {
      if (currentTodo.id > max) {
        max = currentTodo.id;
        return max;
      }
  
    }, 0);
  
    res.json(req.body);
      const newTodo = {
      id: maxId + 1,
      todo: req.body.todo,
      }
      todoList.push(newTodo);
  }

    else {
          res.status(400).json({
            error: 'Please provide todo text',
          })
        }

});


// PUT /api/todos/:id

// DELETE /api/todos/:id

app.listen(port, () => {
  console.log('Todo List API is now listening on port ' + "http://localhost:" + port);
})