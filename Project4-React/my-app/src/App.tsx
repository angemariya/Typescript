import React from 'react';
import { GlobalState, TodoItem } from './state';
import './App.css';

const Form = () => (
  <form action="">
    <input type="text" name="" id="" />
    <button>Add</button>
  </form>
);

const ListItem = (props: TodoItem) => (
  <li>
    <input type="checkbox" name="" id="" checked={props.status}/>
    <p>{props.todo}</p>
  </li>
);

const List = (props: {todos: TodoItem[]}) => (
  <ul>
    {props.todos.map(el=><ListItem {...el} />)}
  </ul>
);

const App = (props: GlobalState) => (
  <div>
    <Form />
    <List todos={props.todos}/>
  </div>
);

export default App;
