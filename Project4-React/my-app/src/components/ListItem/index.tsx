import { Button } from '../Button';
import type {Item}  from '../App';
import styles from './styles.module.scss';

interface ListItemProps extends Item {
  onDelete: (id: number) => void
  onFilterCompleted?: () => void
  onMarkTodo?: (id: number) => void
}

export const ListItem = (props: ListItemProps) => {
  
  return (
    <li className={styles.listItem}>
      <label>
        <input 
          type="checkbox"
          className={styles.checkBox}
          onChange={() => {
            if (props.onMarkTodo) {
              props.onMarkTodo(props.id);
            }
          }}
          checked={props.status} 
        />
        {props.title}
      </label>

      <div className={styles.buttonWrapper}>
        <Button 
          type="primary" 
          buttonText="Edit"
          />
        <Button 
          type="delete" 
          buttonText="Delete" 
          onClick={()=>props.onDelete(props.id)}
        />
      </div>
    </li>
  );
}