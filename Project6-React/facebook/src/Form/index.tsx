import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Form.module.scss'
import { actions } from '../Feed/feed.state';

export const Form = () => {

    const [newPost, setNewPost] = useState("");

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => 
        setNewPost(e.target.value)
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNewPost("");
    }

    const handlePostChange = () => {
        actions.addPost(newPost);
        setNewPost("");
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} >
            <label htmlFor="">Create your new post</label>
            <textarea
                value={newPost}
                onChange={handleTextChange}
                className={styles.textarea}
                placeholder="What's on your mind?">
                
                </textarea>
            <button onClick={handlePostChange} className={styles.myButton}>Post</button>
        </form>
    )
} 