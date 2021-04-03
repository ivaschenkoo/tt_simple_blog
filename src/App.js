import React, {useEffect} from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import styles from './App.module.css'
import {createPost, getComments, getPosts} from "./redux/PostReducer";
import PostsContainer from "./components/Posts/PostsContainer";
import PostPageContainer from "./components/PostPage/PostPageContainer";
import CreatePost from "./components/CreatePost/CreatePost";



const App = (props) => {

    useEffect(() => {
        props.getPosts()
        props.getComments()
    }, [props])

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerWrapper}>
                <header className={styles.container}>
                    <NavLink to='/' className={styles.logo}>Inquire</NavLink>
                    <NavLink to='/post/new' className={styles.link}>Create post</NavLink>
                </header>
            </div>

            <div className={styles.mainWrapper}>
                <main className={styles.container}>
                    <Switch>
                        <Route exact path='/' render={() => <PostsContainer />} />
                        <Route exact path='/post/new' render={() => <CreatePost createPost={props.createPost} />} />
                        <Route path='/posts/:postId?' render={() => <PostPageContainer />} />
                    </Switch>
                </main>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {getComments, getPosts, createPost})(App)