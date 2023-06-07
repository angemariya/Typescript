import { useState } from 'react';
import { TodoItem } from '../../state';
import { Button } from '../Button';
import styles from './styles.module.scss';

export const ListItem = (props: TodoItem) => {
  const [checked, setChecked] = useState(false)
  
  return (
    <li className={styles.listItem}>
      <label>
        <input type="checkbox" onChange={
        () => setChecked(!checked)
      } checked={checked} className={styles.checkBox}/>
        {props.todo}
      </label>

      <div className={styles.buttonWrapper}>
        <Button type="primary" buttonText="Edit" />
        <Button type="delete" buttonText="Delete" />
      </div>
    </li>
  );
}