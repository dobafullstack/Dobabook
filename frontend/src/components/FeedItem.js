import React from "react";
import "./FeedItem.css";
import { Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { removePost, getAllPost, getPostById } from "../redux/actions/postAction";

export default function FeedItem({ post }) {
    const countReaction = post.like_count + post.favorite_count;
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const handleRemovePost = (id) => {
        if (window.location.pathname === '/home'){
            dispatch(removePost(id));
            dispatch(getAllPost());
        }else{
            dispatch(removePost(id));
            dispatch(getPostById(user._id));
        }
    };
    return (
        <div className='feed-item'>
            <div className='feed-header'>
                <img
                    src={post.user_id.avatar}
                    width='40'
                    className='avatar-feed'
                    alt='avatar'
                />
                <span className='name-feed'>{post.user_id.name}</span>
                <span className='time-feed'>1 hour ago</span>
                <i class='fas fa-ellipsis-v icon-edit-feed'>
                    <div className='edit-menu'>
                        {user._id !== post.user_id._id ? null : (
                            <Col xl={12} lg={12} md={12} xm={12}>
                                <i class='fal fa-edit mx-2'></i>
                                <span>Sửa bài viết</span>
                            </Col>
                        )}
                        <Col xl={12} lg={12} md={12} xm={12}>
                            <i class='fas fa-eye-slash mx-2'></i>
                            <span>Ẩn bài viết</span>
                        </Col>
                        {user._id !== post.user_id._id ? null : (
                            <Col
                                xl={12}
                                lg={12}
                                md={12}
                                xm={12}
                                onClick={() => handleRemovePost(post._id)}>
                                <i class='fal fa-trash mx-2'></i>
                                <span>Xóa bài viết</span>
                            </Col>
                        )}
                    </div>
                </i>
            </div>
            <div className='feed-body'>
                <p className='content-feed text-start'>{post.text_content}</p>
                {post.image_link === "" ? null : (
                    <img
                        src={post.image_link}
                        className='img-content-feed'
                        alt='avatar'
                    />
                )}
            </div>
            <div className='feed-footer'>
                <i class='fas fa-heart-circle icon-favorite'></i>
                <i class='fas fa-thumbs-up icon-like'></i>
                <span className='count-like-span'>
                    {countReaction} people like it
                </span>
                <span className='count-comment-span'>
                    {post.comment.length} comments
                </span>
            </div>
        </div>
    );
}
