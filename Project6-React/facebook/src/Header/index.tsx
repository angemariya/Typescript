import styles from './Header.module.scss'
import img from '../images/user.png'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div>Facebook</div>
            <div className={styles.user}>
                <div className={styles.username}>Vasya Pupkin</div> 
                <img className={styles.userphoto} src={img} alt="userphoto" />
            </div>
        </header>
    )
}