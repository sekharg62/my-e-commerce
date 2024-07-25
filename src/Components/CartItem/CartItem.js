import React, { useContext } from 'react'
import './CartItem.css'
//import CartItem from '../Components/CartItem/CartItem'

import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext';
export default function CartItem() {
  const { all_product, cartItem, removeFromCart,getTotalCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Qualtity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="cartitem-format cartitem-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitem-quantity">{cartItem[e.id]}</button>
                <p>{e.new_price * cartItem[e.id]}</p>
                <img  className='carticon-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          )
        }
         return null;
      })}
 <div className="cartitems-down">
  <div className="cartitems-total">
    <h1>Cart Total</h1>
    <div>
      <div className="cartitems-total-item">
        <p>Subtotal</p>
        <p>${getTotalCart()}</p>
      </div>
      <hr />
      <div className="cartitems-total-item">
        <p>Shipping fee</p>
        <p>Free</p>
      </div>
      <div className="cartitems-total-item">
        <h3>Total</h3>
        <h3>${getTotalCart()}</h3>
      </div>
    </div>
    <button>Procced to check out</button>
  </div>
  <div className="cartitems-promocode">
    <p>If you have any promocode enter here.</p>
    <div className="cartitem-promobox">
      <input type="text "placeholder='Promocode' className='placehodler' />
      <button>Submit</button>
    </div>
  </div>
 </div>
    </div>
  )
}
