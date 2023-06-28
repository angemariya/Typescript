import { BaseSyntheticEvent, useState } from 'react';
import styles from './styles.module.scss';

export const TodosEnter = (props: { onSetListName: (e: string) => void }) => {
  const [todoListName, setTodoListName] = useState('todo list 1');

  const handleSelect = (event: BaseSyntheticEvent) => {
    setTodoListName(event.target.value)
  }

  return (
    <>
      <label className={styles.label}>Taskmaster</label>
      <p className={styles.text}>Enter todo list name: </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSetListName(todoListName)
        }}
      >
        <input
          className={styles.input}
          type='text'
          onChange={(e) => setTodoListName(e.target.value)}
          value={todoListName}
        />
        <input type='button' value="Save" onClick={()=>{props.onSetListName(todoListName)}}/>
        <input type='button' value="Delete list" onClick={()=>{}}/>
        <br></br>
        <select onChange={handleSelect}>
          {Object.keys(localStorage).map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};
