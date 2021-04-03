import {CommentAPI, PostAPI} from "../api/api";


const SET_POSTS = 'SET-POSTS';
const SET_COMMENTS = 'SET-COMMENTS';
const ADD_POST = 'ADD-POST';
const ADD_COMMENT = 'ADD-COMMENT';
const REMOVE_POST = 'REMOVE-POST';
const CHANGE_POST = 'CHANGE-POST';

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
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.data]
            }
        case CHANGE_POST:
            // eslint-disable-next-line array-callback-return
            let editPosts = [...state.posts].map(el => {
                if (el.id.toString() === action.postId) {
                    return {...el, ...action.data}
                }
                return el;
            })
            return {
                ...state,
                posts: [...editPosts]
            }
        case REMOVE_POST:
            return {
                ...state,
                posts: [...state.posts].filter(el => el.id.toString() !== action.postId),
            }
        case SET_COMMENTS:
            return {
                ...state,
                comments: [...action.data]
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.data]
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
export const changePost = (postId, data) => ({
    type: CHANGE_POST,
    postId,
    data,
})
export const addComment = (data) => ({
    type: ADD_COMMENT,
    data,
})
export const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
})


export const getPosts = () => (dispatch) => {
    PostAPI.getPosts().then(data => {
        dispatch(setPosts(data))
    })
}
export const createPost = (postData) => (dispatch) => {
    return PostAPI.createPost(postData).then(data => {
        dispatch(addPost(data))
        return data;
    })
}
export const editPost = (postId, postData) => (dispatch) => {
    return PostAPI.changePost(postId, postData).then(data => {
        dispatch(changePost(postId, postData))
    })
}
export const deletePost = (postId) => (dispatch) => {
    PostAPI.deletePost(postId).then(data => {
        dispatch(removePost(postId))
    })
}
export const getComments = () => (dispatch) => {
    CommentAPI.getComments().then(data => {
        dispatch(setComments(data))
    })
}
export const createComment = (commentData) => (dispatch) => {
    CommentAPI.createComment(commentData).then(data => {
        dispatch(addComment(data))
    })
}