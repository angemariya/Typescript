import styles from './styles.module.scss';
import { type State } from '../App';

export const Counter = (props: { todos: State; onListName: string}) => {
  return (
    <div className={styles.wrapper}>
      <p>Total todos: {props.todos.length}</p>
      <p>
        Completed todos: {props.todos.filter((el) => el.status === true).length}
      </p>
      <p>Current todo: {props.onListName}</p>

      <button onClick={() => localStorage.clear()}>Remove lists</button>
    </div>
  );
};
