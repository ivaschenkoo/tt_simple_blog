import React from 'react';
import styles from './Comment.module.css'


const Comment = (props) => {
    return (
        <li className={styles.comment}>{props.text}</li>
    )
}

export default Comment