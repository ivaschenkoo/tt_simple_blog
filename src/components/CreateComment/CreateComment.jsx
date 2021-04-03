import React from "react";
import {Field, Formik} from 'formik';
import * as yup from "yup";
import styles from './CreateComment.module.css'


const CreateComment = (props) => {
    const validation = yup.object().shape({
        body: yup.string().required('Body is required')
            .test('len', 'Must be exactly 10 characters', val => val !== undefined && val.length > 10),
    })

    return (
        <div className={styles.wrapper} >
            <Formik
                initialValues={{
                    body: '',
                }}
                validateOnBlur
                validationSchema={validation}
                onSubmit={(values, {resetForm}) => {
                    props.createComment({
                        "postId": props.postId,
                        "body": values.body,
                    })
                    resetForm()
                }}
            >
                {(formikProps) => (
                    <>
                        <Field name="body" as="textarea" className={styles.text} />
                        {formikProps.touched.body && (formikProps.errors.body
                            && <p className={styles.errorMessage}>{formikProps.errors.body}</p>)}
                        <button type='submit'
                                onClick={formikProps.handleSubmit}
                                disabled={!formikProps.isValid && !formikProps.dirty}
                                className={styles.button}
                        >
                            Send comment
                        </button>
                    </>
                )}
            </Formik>
        </div>
    )
}

export default CreateComment