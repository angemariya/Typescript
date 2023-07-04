import styles from './Feed.module.scss'
import { connect } from "../connect";
import { FeedStateItem, actions, feedInitialState } from "./feed.state";
import { initialState } from '../store';
import { useState } from 'react';
import { Heart } from './Heart';

const Feed = (props: typeof feedInitialState) => {
    const [postText, setPostText] = useState("")
    const [isEdited, setIsEdited] = useState(false)

    return (
        <section className={styles.feed}>
            <div>
                {props.FeedArray.map(el =>
                    <div className={styles.user} key={el.id}>
                        {isEdited ?
                            (
                            <form onSubmit={e => {
                                e.preventDefault();
                                actions.editPost({...el, text: postText})
                                setIsEdited(false)
                            }}>
                                <textarea
                                    value = {postText} //тут исправить
                                    onChange={e => setPostText(e.target.value)} />
                                <button> Done! </button>
                            </form>
                            )
                            : el.text 
                        }
                        <Heart state={el as FeedStateItem} />
                        <button onClick={() => {
                            setPostText(el.text)
                            setIsEdited(true)
                        }}>Edit post</button>
                        <button onClick={() => actions.deletePost(el.id)}>Delete post</button>
                        <button>Like</button>
                    </div>)}
                <button
                    className={styles.myButton}
                    onClick={() => actions.addFeed()}>Show more ...</button>
            </div>
        </section>
    )
}

export const FeedContainer = connect((state: typeof initialState) => state.Feed, Feed);

//value={postText ? (setPostText(el.text) && postText) : el.text} -- не работает!
//как исправить одновременное редактирование у всех постов? 
