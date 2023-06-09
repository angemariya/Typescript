import { Form } from '../Form';
import { List } from '../List';
import { Counter } from '../Counter';
import './App.scss';
import { useState, useRef } from 'react';

export type Item = {
  id: number,
  title: string, 
  status: boolean
}

export type State = Item[];

export const state: State = [
  {id: 1, title: "New todo", status: false},
  {id: 2, title: "New todo", status: false},
];

export const App = () => {
  //MODEL
  const [todos, setTodos] = useState(state);
  const prevTodosRef = useRef();

  //CONTROLLER
  
  const addTodo = (newTodo: Item): void => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter(el=>el.id !== id))
  }

  const filterCompletedTodo = (): void => {
    setTodos(todos.filter(el=>el.status===true))
  }

  const filterActiveTodo = (): void => {
    setTodos(todos.filter(el=>el.status===false))
  }

  const markTodo = (id: number): void => {
    const targetElement = todos.find((el)=>el.id === id)
      if (targetElement) {
        targetElement.status = !targetElement.status;        
        setTodos([...todos])
      }
  }

  const showAll = ():void => {
    
  }

  //VIEW
  return (
    <div className='App'>
      <div className='wrapper'>
        <Form
          onShowAll = {showAll}
          onFilterActive={filterActiveTodo}
          onFilterCompleted={filterCompletedTodo}
          onAddTodo={addTodo}
          todos={todos}
           />
        <List
          todos={todos} 
          onFilterCompleted={filterCompletedTodo}
          onDeleteTodo={deleteTodo}
          onMarkTodo={markTodo}
        />
        <Counter todos={todos}/>
      </div>
    </div>
  )
};

