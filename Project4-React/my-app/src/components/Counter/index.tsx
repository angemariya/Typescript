import styles from './styles.module.scss';
import { type State } from '../App';

export const Counter = (props: {todos: State}) => (
    <div className= {styles.wrapper} >
        <p>Total todos: {props.todos.length}</p>
        <p>Completed todos: {(props.todos.filter(el=>el.status===true)).length}</p>
    </div>
);