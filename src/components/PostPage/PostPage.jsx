import React from "react";
import {NavLink} from "react-router-dom";
import styles from './PostPage.module.css'
import CreateComment from "../CreateComment/CreateComment";


const PostPage = (props) => {
    return (
        <div>
            <NavLink to='/' className={styles.link}>Back</NavLink>
            <div className={styles.wrapper}>
                <h1>{props.title}</h1>
                <p>{props.body}</p>
            </div>
            <p className={styles.commentTitle}>Comments</p>
            <CreateComment postId={props.postId} createComment={props.createComment} />
            <ul className={styles.commentsList}>
                {props.comments}
            </ul>
        </div>
    )
}

export default PostPage