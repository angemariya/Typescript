import { AiOutlineDown } from "react-icons/ai"
import { actions } from "../feed.state"
import styles from "./Filters.module.scss"

export const Filters = () => {

    return (
        <div>
            <button onClick={actions.sortByDate} className={styles.myButton}>Sort by date <AiOutlineDown /></button>
            <button onClick={actions.filterByLike} className={styles.myButton}>Show liked posts</button>
        </div>
    )
}