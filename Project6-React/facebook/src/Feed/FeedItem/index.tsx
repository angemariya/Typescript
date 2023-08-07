// сортировка и фильтры для постов
// рефакторинг

import { useState } from "react";
import { Heart } from "../Heart";
import { FeedStateItem, feedSlice } from "../feed.state";
import styles from "./FeedItem.module.scss";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai"
import moment from "moment";

export const FeedItem = (props: FeedStateItem) => {
    const [postText, setPostText] = useState("");
    const [isEdited, setIsEdited] = useState(false);

    return (
        <div className={styles.post} key={props.id}>
            {isEdited ?
                (
                <form onSubmit={e => {
                    e.preventDefault();
                    feedSlice.actions.editPost({...props, text: postText, date: moment().format('MMMM Do YYYY, h:mm:ss a')})
                    setIsEdited(false)
                }}>
                        <textarea
                        className={styles.editTextarea}
                        value= {postText}
                        onChange={e => setPostText(e.target.value)} />
                    <button className={styles.myButton}> Done! </button>
                </form>
                )
                : props.text 
            }
            <div className={styles.date}>{props.date}</div>
            <Heart {...props} />
            <div className={styles.buttonWrapper}>
                <button
                    className={styles.myButton}
                    onClick={() => {
                    setPostText(props.text)
                    setIsEdited(true) 
                }}><AiFillEdit /></button>
                <button
                    className={styles.myButton}
                    onClick={() => feedSlice.actions.deletePost(props.id)
                    }><AiOutlineDelete /></button>
            </div>
        </div>
    )
}