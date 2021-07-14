import React from 'react'

export default function OnlineFriendItem({friend}) {
    return (
        <div className='online-item'>
            <picture>
                <img
                    className='online-avatar'
                    src={friend.avatar}
                    width='40'
                    alt='avatar'
                    style={{
                        borderRadius: '50%'
                    }}
                />
            </picture>
            <strong className='online-name'>{friend.name}</strong>
        </div>
    );
}
