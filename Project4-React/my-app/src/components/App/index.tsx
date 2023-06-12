import { Form } from '../Form';
import { List } from '../List';
import { Counter } from '../Counter';
import './App.scss';
import { useEffect, useState } from 'react';

export type Item = {
  id: number;
  title: string;
  status: boolean;
};

export type State = Item[];

export const state: State = [
  { id: 1, title: 'New todo', status: false },
  { id: 2, title: 'New todo', status: false },
];

export const App = () => {
  //MODEL
  const [todos, setTodos] = useState(state);
  const [isFilteredCompleted, setIsFilteredCompleted] = useState(false);
  const [isFilteredActive, setIsFilteredActive] = useState(false);

  const [listName, setListName] = useState('todos');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const idInterval = setInterval(() => {
      setCounter((prev) => prev + 1);
      console.log(counter);
    }, 1000);
    return () => {
      clearInterval(idInterval);
    };
  }, []);

  useEffect(() => {
    const todos = localStorage.getItem(listName);
    const parsedTodos = todos ? JSON.parse(todos) : [];
    setTodos(parsedTodos);
    console.log('Это use effect');
  }, [listName]);

  //CONTROLLER

  const addTodo = (newTodo: Item): void => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem(listName, JSON.stringify(newTodos));
  };

  const deleteTodo = (id: number): void => {
    const newTodos = todos.filter((el) => el.id !== id);
    setTodos(newTodos);
    localStorage.setItem(listName, JSON.stringify(newTodos));
  };

  const filterCompletedTodo = (): void => {
    setIsFilteredCompleted(true);
  };

  const filterActiveTodo = (): void => {
    setIsFilteredActive(true);
  };

  const markTodo = (id: number): void => {
    const targetElement = todos.find((el) => el.id === id);
    if (targetElement) {
      targetElement.status = !targetElement.status;
      const newTodos = [...todos];
      setTodos(newTodos);
      localStorage.setItem(listName, JSON.stringify(newTodos));
    }
  };

  const showAll = (): void => {
    setIsFilteredCompleted(false);
    setIsFilteredActive(false);
  };

  const editTodo = (id: number, title: string): void => {
    const targetElement = todos.find((el) => el.id === id);
    if (targetElement) {
      targetElement.title = title;
      const newTodos = [...todos];
      setTodos(newTodos);
      localStorage.setItem(listName, JSON.stringify(newTodos));
    }
  };

  //VIEW
  return (
    <div className='App'>
      <div className='wrapper'>
        <Form
          onShowAll={showAll}
          onFilterActive={filterActiveTodo}
          onFilterCompleted={filterCompletedTodo}
          onAddTodo={addTodo}
          todos={todos}
        />
        <input
          type='text'
          onChange={(e) => setListName(e.target.value)}
          value={listName}
        />
        <p>{counter}</p>
        <List
          todos={
            isFilteredCompleted
              ? todos.filter((el) => el.status === true)
              : isFilteredActive
              ? todos.filter((el) => el.status === false)
              : todos
          }
          onFilterCompleted={filterCompletedTodo}
          onDeleteTodo={deleteTodo}
          onMarkTodo={markTodo}
          onEditTodo={editTodo}
        />
        <Counter todos={todos} />
      </div>
    </div>
  );
};
