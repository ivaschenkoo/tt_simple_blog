import * as yup from "yup";

export const validation = yup.object().shape({
    title: yup.string().required('Title is required')
        .test('len', 'Must be exactly 10 characters', val => val !== undefined && val.length > 10),
    body: yup.string().required('Body is required')
        .test('len', 'Must be exactly 10 characters', val => val !== undefined && val.length > 10),
})