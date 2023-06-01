import styles from "./styles.module.css"

export const Button = (props: { name: string }) => (
    <button
      className={styles["arrow-button"]}>
      {props.name}
    </button>
);