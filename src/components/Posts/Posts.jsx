import React from 'react';
import styles from './Posts.module.css'


const Posts = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Latest posts</h1>
            <ul className={styles.postsList}>
                {props.posts}
            </ul>
        </div>
    )
}

export default Posts