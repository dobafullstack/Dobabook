import React, { useState, useEffect } from "react";
import "./UpStatus.css";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../redux/actions/postAction";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { storage } from "../firebase/config";

export default function UpStatus(props) {
    const [displayPicker, setDisplayPicker] = useState("none");
    const [textContent, setTextContent] = useState("");
    const [selectedImg, setSelectedImg] = useState(null);
    const [imgLink, setImgLink] = useState("");
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const wrapperRef = React.createRef();
    const inputRef = React.createRef();

    const handleCreatePost = () => {
        if (selectedImg !== null) {
            const uploadTask = storage
                .ref(`images/${selectedImg.name}`)
                .put(selectedImg);
            uploadTask.on(
                "state_changed",
                (snapshot) => {},
                (error) => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(selectedImg.name)
                        .getDownloadURL()
                        .then((url) => {
                            dispatch(
                                createPost(user._id, textContent, url)
                            );
                        });
                }
            );
        }else{
            dispatch(createPost(user._id, textContent));
        }

        setTextContent("");
        setSelectedImg(null);
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });

    const handleClick = (e) => {
        const { target } = e;
        if (!wrapperRef.current) {
            return;
        }

        if (!wrapperRef.current.contains(target)) {
            setDisplayPicker("none");
        }
    };

    const handleOnchangeUploadImg = (e) => {
        setSelectedImg(e.target.files[0]);
    };

    return (
        <div className='status-wrapper' ref={wrapperRef}>
            <div className='status-top'>
                <img alt='avatar' src={user.avatar} width='100'></img>
                <input
                    placeholder={"What's in your mind " + user.name + "?"}
                    value={textContent}
                    onChange={(e) => {
                        setTextContent(e.target.value);
                    }}
                />
            </div>
            <div className='img-wrapper w-100 my-2'>
                {selectedImg === null ? null : (
                    <img
                        src={URL.createObjectURL(selectedImg)}
                        className='img-fluid'
                    />
                )}
            </div>
            <hr />
            <div className='status-bottom'>
                <div
                    className='status-item'
                    onClick={() => inputRef.current.click()}>
                    <i class='fal fa-image text-photo'></i>
                    <span>Photo and videos</span>
                </div>
                <input
                    type='file'
                    ref={inputRef}
                    className='d-none'
                    onChange={(e) => handleOnchangeUploadImg(e)}
                />
                <div className='status-item'>
                    <i class='fas fa-tag text-tag'></i>
                    <span>Tag</span>
                </div>
                <div className='status-item'>
                    <i class='fas fa-map-marker-alt text-location'></i>
                    <span>Location</span>
                </div>
                <div
                    className='status-item'
                    onClick={() => {
                        setDisplayPicker("block");
                    }}
                    style={{ position: "relative" }}>
                    <i class='far fa-grin text-feelings'></i>
                    <span>Feelings</span>
                    <Picker
                        style={{
                            position: "absolute",
                            right: "0",
                            top: "0",
                            display: displayPicker,
                        }}
                        onSelect={(emoji) => {
                            setTextContent(textContent + emoji.native);
                        }}
                    />
                </div>
                <button
                    className='btn btn-success btn-share'
                    onClick={() => handleCreatePost()}>
                    Share
                </button>
            </div>
        </div>
    );
}
