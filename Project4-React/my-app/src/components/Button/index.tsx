import styles from './styles.module.scss';
type ButtonType = "delete" | "primary";

export const Button = (
    props: {
        buttonText: string, 
        type?: ButtonType, 
        onClick?: ()=>void
    }) => {
    
    const classes: string[] = [
        styles.button, 
        (props.type === "delete" && styles.delete),
        (props.type === "primary" && styles.primary)
    ].filter(Boolean) as string[];

    return (
        <button className={classes.join(" ")} onClick={props.onClick} >
            {props.buttonText}
        </button>
    );
}
