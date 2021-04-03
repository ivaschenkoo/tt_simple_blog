import React from 'react'
import {connect} from "react-redux";
import Posts from "./Posts";
import Post from "./Post/Post";


const PostsContainer = (props) => {
    let posts = props.posts.map(el => <Post key={el.id} post={el.id} title={el.title} body={el.body} />)

    return <Posts posts={posts} />
}

let mapStateToProps = (state) => ({
    posts: state.posts.posts,
})


export default connect(mapStateToProps, {})(PostsContainer)