import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (

    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt="" />
          <option value=""></option>
          <option value="">
           
          </option>
          
        </div>
        

      </div>
      <div className="shopcategory-product">
        {
          all_product.map((item) => {
            if (props.category === item.category) {
      
              return (<Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)
            }

            else {
              return null;
            }


          })
        }
      </div>
      <div className="explore-more">
        Explore More
      </div>
    </div>
  )
}
