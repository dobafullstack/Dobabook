import * as actionTypes from "../constants/postConstant";

const initialState = { posts: [] };

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POST_REQUIRED:
            return {
                ...state,
                posts: [],
                isLoading: true,
            };
        case actionTypes.GET_POST_SUCCESS:
            return {
                ...state,
                posts: [...action.payload.posts],
                isLoading: false,
            };
        case actionTypes.GET_POST_FAIL:
            return {
                ...state,
                posts: [...action.payload],
                isLoading: true,
            };
        case actionTypes.CREATE_POST_SUCCESS:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
            };
        case actionTypes.CREATE_POST_FAIL:
            return {
                ...state,
                message: action.payload
            };
        case actionTypes.REMOVE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.filter(
                    (posts) => posts._id !== action.payload._id
                ),
            };
        case actionTypes.REMOVE_POST_FAIL:
            return {
                ...state,
                message: action.payload
            };
        default:
            return state;
    }
};
