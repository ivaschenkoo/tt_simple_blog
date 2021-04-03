import React from 'react';
import {Field, Formik} from "formik";
import * as yup from 'yup';
import {NavLink} from "react-router-dom";
import styles from "./CreatePost.module.css";


const CreatePost = (props) => {
    const validation = yup.object().shape({
        title: yup.string().required('Title is required')
            .test('len', 'Must be exactly 10 characters', val => val !== undefined && val.length > 10),
        body: yup.string().required('Body is required')
            .test('len', 'Must be exactly 10 characters', val => val !== undefined && val.length > 10),
    })

    return (
        <div>
            <NavLink to='/' className={styles.link}>Back</NavLink>
            <h1>Create new post</h1>
            <div className={styles.wrapper}>
                <Formik
                    initialValues={{
                        title: '',
                        body: '',
                    }}
                    validateOnBlur
                    validationSchema={validation}
                    onSubmit={(values) => {
                        props.createPost({
                            'title': values.title,
                            'body': values.body,
                        })
                    }}
                >
                    {(formikProps) => (
                        <>
                            <input type="text"
                                   name='title'
                                   placeholder='Title'
                                   value={formikProps.values.name}
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
            </div>
        </div>
    )
}

export default CreatePost