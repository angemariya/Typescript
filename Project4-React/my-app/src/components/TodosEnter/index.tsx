import { useState } from 'react';
import styles from './styles.module.scss';

export const TodosEnter = (props: {
  onSetListName: (e: string) => void;
}) => {
  const [todoListName, setTodoListName] = useState('todo list 1');

  return (
    <>
      <label className={styles.label}>Taskmaster</label>
      <p className={styles.text}>Enter todo list name: </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSetListName(todoListName);
        }}
      >
        <input
          className={styles.input}
          type='text'
          onChange={(e) => setTodoListName(e.target.value)}
          value={todoListName}
        />
      </form>
    </>
  );
};
