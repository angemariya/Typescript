import styles from './styles.module.scss';

export const Button = (props: {buttonText: string}) => (
    <button className={styles.button}>
        {props.buttonText}
    </button>
)