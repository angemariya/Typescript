import { Feed, FeedContainer } from "../Feed"
import { AdsContainer } from "../Ads"
import styles from './Main.module.scss'
 
export const Main = () => {
    return (
        <main className={styles.main}>
            <AdsContainer/>
            <FeedContainer />
        </main>
    )
}

