import { Button } from '../Button';
import type { Item } from '../App';
import { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContainer';
import styles from './styles.module.scss';

interface ListItemProps extends Item {
  onDelete: (id: number) => void;
  onFilterCompleted?: () => void;
  onMarkTodo?: (id: number) => void;
  onEditTodo: (id: number, title: string) => void;
}

export const ListItem = (props: ListItemProps) => {
  const [title, setTitle] = useState(props.title)
  const [isEdited, setIsEdited] = useState(false);
  const Theme = useContext(ThemeContext);

  return (
    <li className={`${styles.listItem} ${styles[Theme]}`}>
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
