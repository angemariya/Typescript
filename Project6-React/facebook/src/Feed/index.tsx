import styles from './Feed.module.scss'
import { connect } from "../connect";
import { FeedStateItem, actions, feedInitialState } from "./feed.state";
import { initialState } from '../store';
import { useState } from 'react';
import { Heart } from './Heart';
import { FeedItem } from './FeedItem';

const Feed = (props: typeof feedInitialState) => {


    return (
        <section className={styles.feed}>
            <div>
                { props.FeedArray.map(el => <FeedItem {...el}/>) }
                <button
                    className={styles.myButton}
                    onClick={() => actions.addFeed()}>Show more ...</button>
            </div>
        </section>
    )
}

export const FeedContainer = connect((state: typeof initialState) => state.Feed, Feed);

//как исправить одновременное редактирование у всех постов? 
