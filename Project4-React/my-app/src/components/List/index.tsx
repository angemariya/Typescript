import React from 'react';
import { TodoItem } from '../../state';
import { ListItem } from '../ListItem/ListItem';
//import styles from './List.module.css';

export const List = (props: {todos: TodoItem[]}) => (
  <ul /*className={styles.list}*/>
    {props.todos.map(el=><ListItem {...el} />)}
  </ul>
);