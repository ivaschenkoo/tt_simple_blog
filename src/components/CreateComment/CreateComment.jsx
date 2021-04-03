import React from "react";
import {Field, Formik} from 'formik';
import * as yup from "yup";


const CreateComment = (props) => {
    const validation = yup.object().shape({
        body: yup.string().required('Body is required')
            .test('len', 'Must be exactly 10 characters', val => val !== undefined && val.length > 10),
    })

    return (
        <div>
            <Formik
                initialValues={{
                    body: '',
                }}
                validateOnBlur
                validationSchema={validation}
                onSubmit={(values) => {
                    props.createComment({
                        "postId": props.postId,
                        "body": values.body,
                    })
                }}
            >
                {(formikProps) => (
                    <div>
                        <Field name="body" as="textarea"/>
                        {formikProps.touched.body && formikProps.errors.body && <p>{formikProps.errors.body}</p>}
                        <button type='submit'
                                onClick={formikProps.handleSubmit}
                                disabled={!formikProps.isValid && !formikProps.dirty}>
                            Send comment
                        </button>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default CreateComment