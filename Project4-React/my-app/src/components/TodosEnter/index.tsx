import styles from './styles.module.scss';

export const TodosEnter = (props: {
  onListName: string;
  onSetListName: (e: string) => void;
}) => {
  return (
    <>
      <label className={styles.label}>Taskmaster</label>
      <p className={styles.text}>Enter todo list name: </p>
      <input
        className={styles.input}
        type='text'
        onChange={(e) => props.onSetListName(e.target.value)}
        value={props.onListName}
      />
    </>
  );
};
