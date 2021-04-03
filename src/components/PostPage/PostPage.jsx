import React from "react";
import {NavLink} from "react-router-dom";
import styles from './PostPage.module.css'
import CreateComment from "../CreateComment/CreateComment";


const PostPage = (props) => {
    return (
        <div>
            <div className={styles.toolWrapper}>
                <NavLink to='/' className={styles.link}>Back</NavLink>
                <div>
                    <button type='button'
                            className={styles.button}
                            onClick={() => {
                                console.log('test')
                            }}
                    >
                        Update post
                    </button>
                    <button type='button'
                            className={styles.button}
                            onClick={() => {
                                props.deletePost(props.postId)
                            }}
                    >
                        Delete post
                    </button>
                </div>

            </div>
            <div className={styles.wrapper}>
                <h1>{props.title}</h1>
                <p>{props.body}</p>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.commentTitle}>Comments</p>
                <CreateComment postId={props.postId} createComment={props.createComment}/>
                <ul className={styles.commentsList}>
                    {props.comments}
                </ul>
            </div>
        </div>
    )
}

export default PostPage