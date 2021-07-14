import * as actionTypes from "../constants/postConstant";
import axios from "axios";
import { toast } from "react-toastify";

export const getPostById = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: actionTypes.GET_POST_REQUIRED,
        });
        const { data } = await axios.get(`/posts/${id}`);

        dispatch({
            type: actionTypes.GET_POST_SUCCESS,
            payload: {
                posts: [...data],
            },
        });
    } catch (err) {
        dispatch({
            type: actionTypes.GET_POST_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
    }
};

export const getAllPost = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: actionTypes.GET_POST_REQUIRED,
        });
        const { data } = await axios.get(`/posts/`);

        dispatch({
            type: actionTypes.GET_POST_SUCCESS,
            payload: {
                posts: [...data],
            },
        });
    } catch (err) {
        dispatch({
            type: actionTypes.GET_POST_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
    }
};

export const createPost =
    (user_id, text_content, image_link = "") =>
    async (dispatch, getState) => {
        try {
            const body = {
                user_id: user_id,
                text_content: text_content,
                image_link: image_link,
            };

            const { data } = await axios.post("/posts/create", body);

            dispatch({
                type: actionTypes.CREATE_POST_SUCCESS,
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: actionTypes.CREATE_POST_FAIL,
                payload:
                    err.response && err.response.data.message
                        ? err.response.data.message
                        : err.message,
            });

            toast.error(err.message);
        }
    };

export const removePost = (id) => async (dispatch, getState) => {
    try{
        const {data} = await axios.get(`/posts/delete/${id}`);
        console.log(data)
        dispatch({
            type: actionTypes.REMOVE_POST_SUCCESS,
            payload: data
        })
    }catch(err) {
        dispatch({
            type: actionTypes.REMOVE_POST_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });

        toast.error(err.message);
    }
}