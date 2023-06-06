import styles from './styles.module.scss';

export const Counter = () => (
    <div className= {styles.wrapper} >
        <p>Total todos: </p>
        <p>Completed todos: </p>
    </div>
);