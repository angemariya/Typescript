import styles from './Feed.module.scss'
import { connect } from "../connect";
import { FeedStateItem, feedInitialState } from "./feed.state";
import { dispatch } from '../connect';
import { initialState } from '../store';

export const Feed = (props: FeedStateItem[]) => {

    const showText = () => {
        
    }

    return (
        <section className={styles.feed}>
            <div>
                {feedInitialState.map((el) => 
                    <div className={styles.user}>
                        {el.username}
                        <button onClick={()=>{dispatch({type: "addAds", payload: "ad block 2"});}}>Show text</button>
                    </div>)}
                
            </div>
        </section> 
    )
}

export const FeedContainer = connect((state: typeof initialState)=>state.Feed, Feed);

