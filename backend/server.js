const bodyParser = require("body-parser");
const express = require("express");
const port = 3001;
const uuid = require("uuid");
const app = express();
var cors = require("cors");

// Middlewares
app.use(bodyParser.json());
app.use(cors());

const todos = [
  { id: 1, task: "Learn Cypress" },
  { id: 2, task: "Play Pokemon GO" },
  { id: 3, task: "Learn Playwright" },
  { id: 4, task: "Listen to Taylor Swift" },
];

app.get("/", (req, res) => {
  res.send("Automated QA Home Page");
});

// GET, POST, PUT, PATCH, DELETE
app.get("/playground/todos", (req, res) => {
  res.json(todos);
});

app.get("/playground/todo/:id", (req, res) => {
  let todo = todos.filter((todo) => todo.id == req.params.id);

  res.json({ msg: "1 Todo", data: todo });
});

app.post("/playground/todos", (req, res) => {
  todos.push({ id: uuid.v4(), task: req.body.task || "null" });
  res.json(todos);
});

app.put("/playground/todos/:id", (req, res) => {
  let todo = todos.find((todo) => todo.id == req.body.id);
  if (todo) {
    todo.task = req.body.task;
    res.json(todos);
  } else {
    res.send("Todo with given id doesn't exist");
  }
});

app.delete("/playground/todos/:id", (req, res) => {
  let index = todos.findIndex((todo) => todo.id == req.params.id);
  // console.log(index);
  if (index !== -1) {
    todos.splice(index, 1);
    res.json(todos);
  } else {
    res.send("Todo with given id doesn't exist");
  }
});

app.listen(port, () => {
  console.log("App is listening on port:", port);
});
