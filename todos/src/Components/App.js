import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';


class TodoItem extends Component {
  render() {
    const { title, completed } = this.props;
    return (
      <li className={completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={completed} />
          {/* change checked to defaultChecked b/c that's not a react thingy */}
          <label>{title}</label>
          <button className="destroy"></button>
        </div>
      </li>
    );
  };
};

class TodoList extends Component {
  state = {
    todos: todoList
  };
  render() {
    const { todos } = this.state;
    return (
      <section className="main">
        <ul className="todo-list">
          {/* when put in comp state; when inside the map function, it will be a single todo */}
          {todos.map(todo => <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />)}
        </ul>
      </section>
    );
  };
};

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus />
          {/* the autoFocus auto sleects that input, so it makes it faster for the user; cAn do for loginbox */}
        </header>
        <TodoList />
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  };
};

export default App;