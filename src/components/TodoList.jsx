import List from "@material-ui/core/List";
import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  state = {
    todos: [
      { id: 1, text: "Do the dishes", completed: false },
      { id: 2, text: "Get laundry done", completed: false },
    ],
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <List>
          {todos.map(todo => (
            <Todo key={todo.id} text={todo.text} completed={todo.completed} />
          ))}
        </List>
      </div>
    );
  }
}
