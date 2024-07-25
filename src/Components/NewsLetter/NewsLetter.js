import React from 'react'
import './NewsLetter.css'
export default function NewsLetter() {
    return (
        <div className='news-letter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our news letter and stay updated!</p>
            <div>
                <input type="email" placeholder='Enter your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
