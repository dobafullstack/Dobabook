import React from 'react'

export default function OnlineFriendItem() {
    return (
        <div className='online-item'>
            <picture>
                <img
                    className='online-avatar'
                    src='https://hook.finance/sites/default/files/user.png'
                    width='40'
                    alt='avatar'
                />
            </picture>
            <strong className='online-name'>Duy Anh</strong>
        </div>
    );
}
