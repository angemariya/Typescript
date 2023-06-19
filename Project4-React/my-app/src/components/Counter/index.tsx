import styles from './styles.module.scss';
import { type State } from '../App';
import { useState } from 'react';

export const Counter = (props: { todos: State; onListName: string, onSetListName: (e: string) => void }) => {
    const [currentTodoListName, setCurrentTodoListName] = useState("There is nothing");

    
    props.onSetListName(currentTodoListName)
    return (
    <div className={styles.wrapper}>
      <p>Total todos: {props.todos.length}</p>
      <p>
        Completed todos: {props.todos.filter((el) => el.status === true).length}
      </p>
      <p>Current todo: {props.onListName}</p>
      <select value={currentTodoListName} onChange={()=>{}}>
        <option value={currentTodoListName}>{currentTodoListName}</option>
        {Object.keys(localStorage).map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
      <button onClick={() => localStorage.clear()}>Clear lists</button>
    </div>
  );
};
