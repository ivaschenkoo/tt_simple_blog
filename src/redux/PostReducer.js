import {CommentAPI, PostAPI} from "../api/api";


const SET_POSTS = 'SET-POSTS';
const SET_COMMENTS = 'SET-COMMENTS';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [],
    comments: []
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...action.data]
            };
        case SET_COMMENTS:
            return {
                ...state,
                comments: [...action.data]
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.data]
            }
        default:
            return state;
    }
}


export const setPosts = (data) => ({
    type: SET_POSTS,
    data,
})
export const setComments = (data) => ({
    type: SET_COMMENTS,
    data,
})
export const addPost = (data) => ({
    type: ADD_POST,
    data,
})


export const getPosts = () => (dispatch) => {
    PostAPI.getPosts().then(data => {
        dispatch(setPosts(data))
    })
}
export const createPost = (postData) => (dispatch) => {
    PostAPI.createPost(postData).then(data => {
        console.log(data)
        dispatch(addPost(data))
    })
}
export const getComments = () => (dispatch) => {
    CommentAPI.getComments().then(data => {
        dispatch(setComments(data))
    })
}
export const createComment = (commentData) => (dispatch) => {
    CommentAPI.createComment(commentData).then(data => console.log(data))
}