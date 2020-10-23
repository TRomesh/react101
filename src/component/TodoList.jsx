import React from 'react'
import TodoItem from "./TodoItem";

export default function TodoList({ todos, remove, update }) {
    return (
        <div className="list-container">
        <h2>Todo List</h2>
        <div className="list">
        {todos && todos.map && todos.map((item) => {
          return <TodoItem key={item.id} item={item} remove={remove} update={update}/>;
        })}
        </div>
      </div>
    )
}
