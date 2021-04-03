import axios from "axios";

const instance = axios.create({
    baseURL: "https://bloggy-api.herokuapp.com/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export const PostAPI = {
    getPosts() {
        return instance.get('/posts').then(response => response.data)
    },
    createPost(data) {
        return instance.post('/posts', data).then(response => response.data)
    },
    deletePost(postId) {
        return instance.delete(`/posts/${postId}`).then(response => response.data)
    }
}

export const CommentAPI = {
    getComments() {
        return instance.get('/comments').then(response => response.data)
    },
    createComment(data) {
        return instance.post('/comments', data).then(response => response.data)
    }
}