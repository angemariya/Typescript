import { ChangeEvent, FormEvent, useState } from 'react'
import { dispatch } from '../connect'
import styles from './Form.module.scss'

export const Form = () => {

    const [newPost, setNewPost] = useState("");

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => 
        setNewPost(e.target.value)
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNewPost("");
    }

    const handlePostChange = () => {
        dispatch({ type: "addPost", payload: { id: Date.now(), text: newPost } })
        setNewPost("");
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} >
            <label htmlFor="">Create your new post</label>
            <textarea
                value={newPost}
                onChange={handleTextChange}
                className={styles.textarea}
                placeholder="What's on your mind?"></textarea>
            <button onClick={handlePostChange} className={styles.myButton}>Post</button>
        </form>
    )
} 