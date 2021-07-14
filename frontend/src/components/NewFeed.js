import React from "react";
import FeedItem from "./FeedItem";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function NewFeed() {
    const posts = useSelector((state) => state.posts);

    return (
        <div>
            {posts.isLoading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                    }}>
                    <ReactLoading
                        type='spinningBubbles'
                        color='#2d88ff'
                        height={"10%"}
                        width={"10%"}
                    />
                </div>
            ) : posts.posts.length === 0 ? null : (
                posts.posts.map((post) => (
                    <FeedItem post={post} key={post._id} />
                ))
            )}
        </div>
    );
}
