import React from 'react';
import {Field, Formik} from "formik";
import * as yup from 'yup';
import {Redirect} from "react-router-dom";


const CreatePost = (props) => {
    const validation = yup.object().shape({
        title: yup.string().required('Title is required')
            .test('len', 'Must be exactly 10 characters', val => val !== undefined && val.length > 10),
        body: yup.string().required('Body is required')
            .test('len', 'Must be exactly 10 characters', val => val !== undefined && val.length > 10),
    })

    return (
        <div>
            <h1>Create new post</h1>
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
                    <div>
                        <input type="text"
                               name='title'
                               value={formikProps.values.name}
                               onChange={formikProps.handleChange}
                               onBlur={formikProps.handleBlur}/>
                        {formikProps.touched.title && formikProps.errors.title && <p>{formikProps.errors.title}</p>}
                        <Field name="body" as="textarea"/>
                        {formikProps.touched.body && formikProps.errors.body && <p>{formikProps.errors.body}</p>}
                        <button type='submit'
                                onClick={formikProps.handleSubmit}
                                disabled={!formikProps.isValid && !formikProps.dirty}>
                            Create post
                        </button>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default CreatePost