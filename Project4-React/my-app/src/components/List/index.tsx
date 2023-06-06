import { TodoItem } from '../../state';
import { ListItem } from '../ListItem';
import './List.scss';

export const List = (props: {todos: TodoItem[]}) => (
  <ul className="wrapper">
    {props.todos.map(el=><ListItem {...el} />)}
  </ul>
);