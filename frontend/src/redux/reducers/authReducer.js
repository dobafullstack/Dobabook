import * as actionTypes from '../constants/authConstant';

const accessToken = localStorage.getItem("accessToken");
const user = JSON.parse(localStorage.getItem("user"))

if (accessToken === undefined){
    accessToken = ''
}

const initialState = {
    accessToken: accessToken || "",
    message: "",
    user: user || {}
};



export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                user: action.payload.user
            }
        case actionTypes.MESSAGES:
            return{
                ...state,
                message: action.payload.message
            }
        case actionTypes.GET_USER:
            return{
                ...state,
                user: action.payload.user
            }
        default:
            return state;
    }
};