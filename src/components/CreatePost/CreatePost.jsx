import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./CreatePost.module.css";
import FormikPostForm from "../common/FormikPostForm/FormikPostForm";


const CreatePost = (props) => {
    return (
        <div>
            <NavLink to='/' className={styles.link}>Back</NavLink>
            <h1 className={styles.title}>Create new post</h1>
            <div className={styles.wrapper}>
                <FormikPostForm createPost={props.createPost} />
            </div>
        </div>
    )
}

export default CreatePost