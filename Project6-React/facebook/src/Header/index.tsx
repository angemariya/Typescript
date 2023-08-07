import styles from './Header.module.scss'
import { FbIcon } from './FbIcon'
import img from '../images/user.png'

export const Header = () => {
    return (
        <header className={styles.header}>
            <FbIcon />
            <div className={styles.user}>
                <div className={styles.username}>Vasya Pupkin</div> 
                <img className={styles.userphoto} src={img} alt="userphoto" />
            </div>
        </header>
    )
}