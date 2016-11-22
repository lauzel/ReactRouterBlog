import { FETCH_POSTS } from '../actions/index';

const postsInitialState = { 
    all: [], 
    post: null 
};

export default function (state = postsInitialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}