import styles from './styles.module.scss';
type ButtonType = "delete" | "primary";

export const Button = (props: {buttonText: string, type?: ButtonType}) => {
    
    const classes: string[] = [
        styles.button, 
        (props.type === "delete" && styles.delete),
        (props.type === "primary" && styles.primary)
    ].filter(Boolean) as string[];

    return (
        <button className={classes.join(" ")}>
            {props.buttonText}
        </button>
    );
}
