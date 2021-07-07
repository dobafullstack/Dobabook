import React from 'react'
import './SideFriend.css'
import OnlineFriendItem from './OnlineFriendItem'

export default function SideFriend() {
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
                <img width="400" alt="promotion" className="img-promotion img-responsive" src='https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/assets/d010b985fc1475e559b6db819889703c.png' />
            </div>
            <hr />
            <div className='sf-list-online'>
                <strong>Online Friends</strong>
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
                <OnlineFriendItem />
            </div>
        </div>
    );
}
