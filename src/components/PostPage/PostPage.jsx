import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import styles from './PostPage.module.css'
import CreateComment from "../CreateComment/CreateComment";
import FormikEditForm from "../common/FormikEditForm/FormikEditForm";


const PostPage = (props) => {
    const [editMode, setEditMode] = useState(false)

    return (
        <div>
            <div className={styles.toolWrapper}>
                <NavLink to='/' className={styles.link}>Back</NavLink>
                <div>
                    {!editMode ?
                        <button type='button'
                                className={styles.button}
                                onClick={() => setEditMode(true)}
                        >
                            Edit post
                        </button>
                        :
                        <button type='button'
                                className={styles.button}
                                onClick={() => setEditMode(false)}
                        >
                            Cancel edit
                        </button>
                    }
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
                {!editMode ?
                    <>
                        <h1>{props.title}</h1>
                        <p>{props.body}</p>
                    </>
                    :
                    <>
                        <FormikEditForm postId={props.postId}
                                        postTitle={props.title}
                                        postBody={props.body}
                                        editPost={props.editPost}
                                        setEditMode={setEditMode}
                        />
                    </>
                }

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