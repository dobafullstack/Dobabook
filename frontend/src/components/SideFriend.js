import React from 'react'
import './SideFriend.css'
import OnlineFriendItem from './OnlineFriendItem'
import {useSelector} from 'react-redux'

export default function SideFriend() {
    const user = useSelector(state => state.auth.user)

    return (
        <div className='sf-wrapper'>
            <div className='sf-header'>
                <i class='fas fa-gift icon-gift'></i>
                <span className='text-start'>
                    <strong>Duy Anh</strong> và <strong>3 người khác</strong> có
                    sinh nhật trong hôm nay
                </span>
            </div>
            <hr />
            <div className='sf-promotion'>
                <img
                    width='400'
                    alt='promotion'
                    className='img-promotion img-responsive'
                    src='https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/assets/d010b985fc1475e559b6db819889703c.png'
                />
            </div>
            <hr />
            <div className='sf-list-online'>
                <strong>Online Friends</strong>
                {user.friends.map((friend, index) => (
                    <OnlineFriendItem key={index} friend={friend.user_id}/>
                ))}
            </div>
        </div>
    );
}
