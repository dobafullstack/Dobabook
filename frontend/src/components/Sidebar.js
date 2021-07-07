import React from "react";
import "./Sidebar.css";

export default function Sidebar() {

    return (
        <div className='side-contain'>
            <ul className='side-wrapper'>
                <li className='side-item'>
                    <i class='fas fa-wifi'></i>
                    <span>Feed</span>
                </li>
                <li className='side-item'>
                    <i class='fas fa-comment-alt-lines'></i>
                    <span>Chats</span>
                </li>
                <li className='side-item'>
                    <i class='fas fa-play-circle'></i>
                    <span>Video</span>
                </li>
                <li className='side-item'>
                    <i class='fas fa-user-friends'></i>
                    <span>Group</span>
                </li>
                <li className='side-item'>
                    <i class='fas fa-bookmark'></i>
                    <span>Bookmark</span>
                </li>
                <li className='side-item'>
                    <i class='fal fa-question-circle'></i>
                    <span>Question</span>
                </li>
                <li className='side-item'>
                    <i class='fal fa-briefcase'></i>
                    <span>Job</span>
                </li>
                <li className='side-item'>
                    <i class='fal fa-calendar-alt'></i>
                    <span>Event</span>
                </li>
                <li className='side-item'>
                    <i class='fad fa-graduation-cap'></i>
                    <span>Course</span>
                </li>
            </ul>
        </div>
    );
}
