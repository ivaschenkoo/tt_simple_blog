import React, {useState} from "react";
import {Field, Formik} from "formik";
import styles from './FormikPostForm.module.css'
import {validation} from "../validation";
import {NavLink} from "react-router-dom";


const FormikPostForm = (props) => {
    const [sending, setSend] = useState(false);
    const [createdPostId, setCreatedPostId] = useState('');

    return (
        <>
            <p className={`${styles.link} ${sending ? styles.linkActive : null}`}>
                The post was created.
                <NavLink to={`/posts/${createdPostId}`}>Go to post</NavLink>
            </p>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                }}
                validateOnBlur
                validationSchema={validation}
                onSubmit={(values, {resetForm}) => {
                    props.createPost({
                        'title': values.title,
                        'body': values.body,
                    }).then(data => {
                        setCreatedPostId(data.id)
                        setSend(true)
                    })
                    resetForm({title: '', body: ''})
                }}
            >
                {(formikProps) => (
                    <>
                        <input type="text"
                               name='title'
                               placeholder='Title'
                               value={formikProps.values.title}
                               onChange={formikProps.handleChange}
                               onBlur={formikProps.handleBlur}
                               className={styles.title}
                        />

                        {formikProps.touched.title && (formikProps.errors.title
                            && <p className={styles.errorMessage}>{formikProps.errors.title}</p>)}

                        <Field name="body" as="textarea" placeholder='Text' className={styles.text}/>

                        {formikProps.touched.body && (formikProps.errors.body
                            && <p className={styles.errorMessage}>{formikProps.errors.body}</p>)}

                        <button type='submit'
                                onClick={formikProps.handleSubmit}
                                disabled={!formikProps.isValid && !formikProps.dirty}
                                className={styles.button}
                        >
                            Create post
                        </button>
                    </>
                )}
            </Formik>
        </>
    )
}

export default FormikPostForm