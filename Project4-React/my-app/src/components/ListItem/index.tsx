import { Button } from '../Button';
import type { Item } from '../App';
import styles from './styles.module.scss';
import { useState } from 'react';

interface ListItemProps extends Item {
  onDelete: (id: number) => void;
  onFilterCompleted?: () => void;
  onMarkTodo?: (id: number) => void;
  onEditTodo: (id: number, title: string) => void;
}

export const ListItem = (props: ListItemProps) => {
  const [title, setTitle] = useState(props.title)
  const [isEdited, setIsEdited] = useState(false);

  return (
    <li className={styles.listItem}>
      <label>
        <input
          type='checkbox'
          className={styles.checkBox}
          onChange={() => {
            if (props.onMarkTodo) {
              props.onMarkTodo(props.id);
            }
          }}
          checked={props.status}
        />
        {!isEdited ? (
          props.title
        ) : (
          <form onSubmit={
            (e) => { 
              e.preventDefault();
              props.onEditTodo(props.id, props.title);
              setIsEdited(false);
            }
            }>
            <input value={title} type='text' onChange={(event)=>setTitle(event.currentTarget.value)}/>
          </form>
        )}
      </label>

      <div className={styles.buttonWrapper}>
        <Button
          type='primary'
          buttonText='Edit'
          onClick={() => setIsEdited(true)}
        />
        <Button
          type='delete'
          buttonText='Delete'
          onClick={() => props.onDelete(props.id)}
        />
      </div>
    </li>
  );
};
