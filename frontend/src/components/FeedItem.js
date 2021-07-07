import React from 'react'
import './FeedItem.css'

export default function FeedItem() {
    return (
        <div className='feed-item'>
            <div className='feed-header'>
                <img
                    src='https://hook.finance/sites/default/files/user.png'
                    width='40'
                    className='avatar-feed'
                    alt='avatar'
                />
                <span className='name-feed'>Duy Anh</span>
                <span className='time-feed'>1 hour ago</span>
                <i class='fas fa-ellipsis-v icon-edit-feed'></i>
            </div>
            <div className='feed-body'>
                <p className='content-feed text-start'>
                    Đen Vâu của ngày đó cũng giống trên TV thôi!!
                </p>
                <img
                    src='https://vcdn-giaitri.vnecdn.net/2019/11/07/rapper-Den-5510-1573122371.jpg'
                    className='img-content-feed'
                    alt='avatar'
                />
            </div>
            <div className='feed-footer'>
                <i class='fas fa-heart-circle icon-favorite'></i>
                <i class='fas fa-thumbs-up icon-like'></i>
                <span className='count-like-span'>11k people like it</span>
                <span className='count-comment-span'>2 comments</span>
            </div>
        </div>
    );
}
