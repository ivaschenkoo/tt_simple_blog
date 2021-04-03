import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Post.module.css'


const Post = (props) => {
    let body = props.body?.length > 200 ? `${props.body.slice(0, 200)}...` : props.body

    return (
        <li className={styles.postItem}>
            <span className={styles.wrapper}>
                <NavLink to={`/posts/${props.post}`} className={styles.link}>
                    <h2 className={styles.title}>{props.title}</h2>
                </NavLink>
                <p className={styles.description}>{body}</p>
            </span>
            <span className={styles.firstLetter}>{props.title[0]?.toUpperCase()}</span>
        </li>
    )
}

export default Post