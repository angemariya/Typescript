import styles from './Feed.module.scss'
import { connect } from "../connect";
import { feedSlice, GeneralState } from "./feed.state";
import { initialState } from '../store';
import { FeedItem } from './FeedItem';

const Feed = (props: GeneralState) => {


    return (
        <section className={styles.feed}>
            <div>
                { props.FeedArray.map(el => <FeedItem {...el}/>) }
                <button
                    className={styles.myButton}
                    onClick={() => feedSlice.actions.addFeed()}>Show more ...</button>
            </div>
        </section>
    )
}

export const FeedContainer = connect((state: typeof initialState) => state.Feed, Feed);

