import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {Link} from 'react-router-dom'
export default function PublicLayout(props) {
    return (
        <div className="public">   
            {props.children}

            <div className="cart-footer">
                <div className="align-vertical">
                    <div className="cart-icon">
                        <FiShoppingCart/>
                    </div>
                    <Link to="/cart" className="cart-footer_title">View Cart</Link>
                </div>
                <Link to="/cart" className="btn btn-warning btn-cart">Place Order</Link>
            </div>
        </div>
    )
}
