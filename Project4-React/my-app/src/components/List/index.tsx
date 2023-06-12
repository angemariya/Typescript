import { type State } from '../App';
import { ListItem } from '../ListItem';
import './List.scss';

export const List = 
  (props: {
    todos: State, 
    onFilterCompleted:() => void,
    onDeleteTodo: (id: number)=>void,
    onMarkTodo: (id: number) => void,
    onEditTodo: (id: number, title: string) => void
  }
  ) => (
  <ul className="wrapper">
    {props.todos.map(el=><ListItem {...el}
      key={el.id}
      onDelete={props.onDeleteTodo} 
      onFilterCompleted={props.onFilterCompleted}
      onMarkTodo={props.onMarkTodo}
      onEditTodo={props.onEditTodo}
      />)}
  </ul>
);

