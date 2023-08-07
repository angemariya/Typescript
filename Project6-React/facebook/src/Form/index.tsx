import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Form.module.scss'
import { feedSlice } from '../Feed/feed.state';
import { Filters } from '../Feed/Filters';

export const Form = () => {

    const [newPost, setNewPost] = useState("");

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => 
        setNewPost(e.target.value)
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNewPost("");
    }

    const handlePostChange = () => {
        feedSlice.actions.addPost(newPost);
        setNewPost("");
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} >
            <label>Create your new post</label>
            <textarea
                value={newPost}
                onChange={handleTextChange}
                className={styles.textarea}
                placeholder="What's on your mind?">
                
            </textarea>
            <div className={styles.buttonsWrapper}>
                <Filters />
                <button onClick={handlePostChange} className={styles.myButton}>Post</button> 
            </div>
            
        </form>
    )
} 