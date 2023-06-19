import { useContext, useEffect, useState } from 'react';
import { Form } from '../Form';
import { List } from '../List';
import { Counter } from '../Counter';
import { Select } from '../Select';
import { Clock } from '../Clock'
import { TodosEnter } from '../TodosEnter';
import { ThemeContext } from '../ThemeContainer';
import styles from './App.module.scss';

export type Item = {
  id: number;
  title: string;
  status: boolean;
};

export type State = Item[];

export const state: State = [];

export const App = () => {
  //MODEL
  const [todos, setTodos] = useState(state);
  const [listName, setListName] = useState('todos');
  const Theme = useContext(ThemeContext);

  const [filter, setFilter] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const todos = localStorage.getItem(listName);
        const parsedTodos = todos ? JSON.parse(todos) : [];
        setTodos(parsedTodos);
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
    setFilter(true)
  };

  const filterActiveTodo = (): void => {
    setFilter(false)
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
    setFilter(undefined)
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
    <div className={`${styles.App} ${styles[Theme]}`}>
      <div className={`${styles.wrapper} ${styles[Theme]}`}>
        <Clock />
        <TodosEnter onSetListName={setListName}/>
        <Form
          onAddTodo={addTodo}
          todos={todos}
        />
        <Select 
          onShowAll={showAll}
          onFilterActive={filterActiveTodo}
          onFilterCompleted={filterCompletedTodo}
        />
        <List
          todos={
            filter !== undefined ? todos.filter(el=>el.status === filter) : todos
          }
          onFilterCompleted={filterCompletedTodo}
          onDeleteTodo={deleteTodo}
          onMarkTodo={markTodo}
          onEditTodo={editTodo}
        />
        <Counter todos={todos} onListName={listName} onSetListName={setListName}/>
      </div>
    </div>
  );
};
