import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from './PostReducer';
import thunk from "redux-thunk";


let reducers = combineReducers({
    posts: postReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store;
export default store;