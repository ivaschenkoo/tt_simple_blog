import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import PostPage from "./PostPage";
import Comment from "../Comment/Comment";
import {createComment} from "../../redux/PostReducer";


const PostPageContainer = (props) => {
    let postId = props.match.params.postId;
    let post = props.posts?.find(el => el.id.toString() === postId)
    let comments = props.comments?.filter(el => el.postId.toString() === postId)
        ?.map(el => <Comment key={el.id} text={el.body}/>)

    if (!post) {
        return <div>404</div>
    }

    return <PostPage postId={postId}
                     title={post.title}
                     body={post.body}
                     comments={comments}
                     createComment={props.createComment}/>
}

let mapStateToProps = (state) => ({
    posts: state.posts.posts,
    comments: state.posts.comments,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {createComment})
)(PostPageContainer)