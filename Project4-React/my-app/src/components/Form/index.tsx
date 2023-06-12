/* eslint-disable jsx-a11y/alt-text */
import { Button } from '../Button';
import { State } from '../App';
import { type Item } from '../App';
import styles from './styles.module.scss'
import { useState } from 'react';

let id = 3;

export const Form = (props: {
          todos: State, 
          onFilterCompleted: ()=>void, 
          onFilterActive: ()=>void,
          onShowAll: ()=>void,
          onAddTodo:(newTodo: Item)=>void,
        } ) => {
  
  const [title, setTitle] = useState("");
  
  return (
    <form className={styles.form} onSubmit={
      (e)=>{
        e.preventDefault();
        setTitle("");
        }}>
      <label className={styles.title}>Taskmaster</label>
      <input 
        className={styles.textInput} 
        type="text" 
        placeholder="Add a new todo... "
        onChange={
          (e)=>{
            setTitle(e.target.value);
          }
        }
        value={title}
        />

      <Button 
        buttonText="Add"
        onClick={()=>{props.onAddTodo({id: id++, title, status: false})}}
        />

      <p>Show: </p>
      <Button buttonText="All" onClick={props.onShowAll}/>
      <Button buttonText="Completed" onClick={props.onFilterCompleted}/>
      <Button buttonText="Active" onClick={props.onFilterActive}/>
    </form>
  )
};
  