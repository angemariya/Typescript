import styles from './Feed.module.scss'
import { connect } from "../connect";
import { feedInitialState } from "./feed.state";
import { dispatch } from '../connect';
import { initialState } from '../store';

const Feed = (props: typeof feedInitialState) => {

    return (
        <section className={styles.feed}>
            <div>
                {props.FeedArray.map((el) =>
                    <div className={styles.user} key={el.id}>
                        {el.text}
                    </div>)}
                <button
                    className={styles.myButton}
                    onClick={() => dispatch(
                            {
                                type: "addFeed",
                                payload:
                                {
                                    id: Date.now(),
                                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum repellendus excepturi ab officia voluptatibus reiciendis saepe reprehenderit quos est quia. Inventore necessitatibus error est facere explicabo iusto nisi quia ut?"
                                }
                            }
                        )}>Show more ... </button>
            </div>
        </section>
    )
}

export const FeedContainer = connect((state: typeof initialState) => state.Feed, Feed);

