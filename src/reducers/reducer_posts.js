import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

const postsInitialState = { 
    all: [], 
    post: null 
};

export default function (state = postsInitialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        case FETCH_POST: 
            return { ...state, post: action.payload.data };       
        default:
            return state;
    }
}