import React, { Component } from 'react'

export default class TodoItem extends Component {
    state={
        edit:false,
        update:""
    }

    setEdit=(value)=>{
        this.setState({edit:value})
    }
    onChange=(value)=>{
        this.setState({update:value})
    }
    render() {
        return (
            <li className="li">
            <button className="btn btn-remmove" onClick={e=>{this.props.remove(this.props.item.id)}}>
              <b>X</b>
            </button>
            {this.state.edit ? (
              <>
                <input
                  className="input-update"
                  placeholder="Update todo"
                  value={this.state.update}
                  onChange={(e) => {
                    this.onChange(e.target.value);
                  }}
                ></input>
                <button
                  className="btn"
                  onClick={(e) => {
                    this.setEdit(false);
                    this.props.update(this.props.item.id, this.state.update);
                    
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <span
                className="todo-text"
                onClick={(e) => {
                    this.setEdit(true);
                }}
              >
                {this.props.item.text}
              </span>
            )}
          </li>
        )
    }
}
