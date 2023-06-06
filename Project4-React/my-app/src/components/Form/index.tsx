/* eslint-disable jsx-a11y/alt-text */
import { Button } from '../Button';
import styles from './styles.module.scss'

export const Form = () => (
    <form className={styles.form} action="">
      <h2 className={styles.title}>Taskmaster</h2>
      <input className={styles.textInput} type="text" placeholder="Add a new todo... " />
      <Button buttonText="Add" />
      <p>Show: </p>
      <Button buttonText="All" />
      <Button buttonText="Completed" />
      <Button buttonText="Active" />
    </form>
  );
  