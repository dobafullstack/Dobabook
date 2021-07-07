import React from 'react'
import './UpStatus.css'


export default function UpStatus() {
    return (
        <div className='status-wrapper'>
            <div className='status-top'>
                <img
                    alt="avatar"
                    src='https://hook.finance/sites/default/files/user.png'
                    width='100'></img>
                <input placeholder="What's in your mind Doba?" />
            </div>
            <hr />
            <div className='status-bottom'>
                <div className='status-item'>
                    <i class='fal fa-image text-photo'></i>
                    <span>Photo and videos</span>
                </div>
                <div className='status-item'>
                    <i class='fas fa-tag text-tag'></i>
                    <span>Tag</span>
                </div>
                <div className='status-item'>
                    <i class='fas fa-map-marker-alt text-location'></i>
                    <span>Location</span>
                </div>
                <div className='status-item'>
                    <i class='far fa-grin text-feelings'></i>
                    <span>Feelings</span>
                </div>
                <button className='btn btn-success'>Share</button>
            </div>
        </div>
    );
}
