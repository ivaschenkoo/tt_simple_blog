import React from "react";
import {Field, Formik} from "formik";
import styles from './FormikEditForm.module.css'
import {validation} from "../validation";


const FormikEditForm = (props) => {
    return (
        <Formik
            initialValues={{
                title: props.postTitle,
                body: props.postBody,
            }}
            validateOnBlur
            validationSchema={validation}
            onSubmit={(values) => {
                props.editPost(props.postId, {
                    'title': values.title,
                    'body': values.body,
                }).then(() => {
                    props.setEditMode(false)
                })

            }}
        >
            {(formikProps) => (
                <>
                    <input type="text"
                           name='title'
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
                        UpdatePost
                    </button>
                </>
            )}
        </Formik>
    )
}

export default FormikEditForm