import React from 'react';
import { TodoItem } from '../../state';
import styles from './ListItem.module.css'

export const ListItem = (props: TodoItem) => (
    <li className={styles.listItem}>
      <input type="checkbox" name="" id="" checked={props.status}/>
      <p>{props.todo}</p>
    </li>
  );