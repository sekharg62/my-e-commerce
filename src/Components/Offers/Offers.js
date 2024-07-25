import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export default function Offers() {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>EXCLUSIVE</h1>
                <h1>OFFERS FOR YOU</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Chcek Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}
