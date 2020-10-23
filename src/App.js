import React, { Component } from "react";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
  };

  setTodo = (new_todos) => {
    this.setState({ todos: new_todos });
  };

  add = (text) => {
    if (text) {
      this.setState(prevState => ({
        todos: [...prevState.todos, {
          id: Math.floor(Math.random() * 100),
          text,
        }]
      }))
    }
  };

  remove = (id) => {
    const updatedList = this.state.todos.filter((todo) => todo.id !== id);
    this.setTodo(updatedList);
  };

  update = (id, updatedTodo) => {
    
    let new_todos = this.state.todos.map((item) => {
      if (item.id === id) {
        item.text = updatedTodo;
      }
      return item;
    });
    this.setTodo(new_todos);
  };

  render() {
    return (
      <div className="app">
        <h1 className="title">Todo App</h1>
        <AddTodo add={this.add} />
        <TodoList
          todos={this.state.todos}
          remove={this.remove}
          update={this.update}
        />
      </div>
    );
  }
}

export default App;
