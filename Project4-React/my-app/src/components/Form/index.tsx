/* eslint-disable jsx-a11y/alt-text */
import { Button } from '../Button';
import { State } from '../App';
import { type Item } from '../App';
import styles from './styles.module.scss'
import { useState } from 'react';

export const Form = (props: {
          todos: State, 
          onAddTodo:(newTodo: Item)=>void,
        } ) => {
  
  const [title, setTitle] = useState("");
  
  return (
    <form className={styles.form} onSubmit={
      (e)=>{
        e.preventDefault();
        setTitle("");
        }}>
      <p>Enter your todo: </p>
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
        onClick={()=>{props.onAddTodo({id: Date.now(), title, status: false})}}
        />
    </form>  
  )
};
  