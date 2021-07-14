import * as actionTypes from "../constants/authConstant";
import axios from "axios";
import { toast } from "react-toastify";

export const login = (username, password) => async (dispatch, getState) => {
    const { data } = await axios.post(`/users/login`, { username, password });

    if (!data.message) {
        dispatch({
            type: actionTypes.LOGIN,
            payload: {
                accessToken: data.accessToken,
                user: data.user,
            },
        });
        localStorage.setItem(
            "accessToken",
            JSON.stringify(getState().auth.accessToken)
        );
        localStorage.setItem("user", JSON.stringify(getState().auth.user));
    } else {
        dispatch({
            type: actionTypes.MESSAGES,
            payload: {
                message: data.message,
            },
        });
        toast.error(data.message);
    }
    return JSON.stringify(getState().auth.accessToken);
};

export const getUser = (id) => async (dispatch, getState) => {
    const token = JSON.parse(localStorage.getItem("accessToken"));
    const { data } = await axios.get(`/users/${id}`, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    console.log(data)

    if (!data.message) {
        dispatch({
            type: actionTypes.GET_USER,
            payload: {
                user: data,
            },
        });
        localStorage.setItem("user", JSON.stringify(getState().auth.user));
    } else {
        dispatch({
            type: actionTypes.MESSAGES,
            payload: {
                message: data.message,
            },
        });
        toast.error(data.message);
    }
};
