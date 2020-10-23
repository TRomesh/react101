import React, { Component } from 'react'

export default class AddTodo extends Component {
    state={
        todo:""
    }

    setTodo=(value)=>{
        this.setState({todo:value})
    }

    addEvent = (e) => {
        e.preventDefault();
        this.props.add(this.state.todo);
        this.setTodo("");
      };
    
    render() {
        return (
            <form
            className="form"
            onSubmit={(e) => {
                this.addEvent(e);
            }}
          >
            <input
              className="input"
              type="text"
              name="todo"
              value={this.state.todo}
              placeholder="Enter Todo"
              onChange={(e) => {
                this.setTodo(e.target.value);
              }}
            ></input>
            <button className="btn" type="submit">
              Add
            </button>
          </form>
        )
    }
}
