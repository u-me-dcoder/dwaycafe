import React from 'react';
import { Link } from 'react-router-dom'
import {GrCart} from 'react-icons/gr'
const ProductItem = (props) => {
    let { name, price, pid, avatar, cart } = props
    return (

        <Link to={`/product/${pid}`} className="product-card">
            <div className="product-img">
                <img src={`http://192.168.1.11:5000/static/avatars/${avatar}`} alt={name} />
            </div>
            <div className="textbox">
                <h6 className="product-itemname">{name}</h6>
                <p className="product-itemprice">Rs. {price}</p>
            </div>

            {cart && 
            <div className="product-cart">
                <GrCart/>
            </div>
            }
        </Link>

    )
}
export default ProductItem