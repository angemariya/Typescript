import styles from './Feed.module.scss'
import { connect } from "../connect";
import { FeedStateItem, feedState } from "./feed.state";
import { dispatch } from '../connect';

export const Feed = (props: FeedStateItem[]) => {

    const showText = () => {
        
    }

    return (
        <section className={styles.feed}>
            <div>
                {feedState.map((el) => 
                    <div className={styles.user}>
                        {el.username}
                        <button onClick={()=>{dispatch({type: "addAds", payload: "ad block 2"});}}>Show text</button>
                    </div>)}
                
            </div>
        </section> 
    )
}

export const FeedContainer = connect(feedState, Feed);

