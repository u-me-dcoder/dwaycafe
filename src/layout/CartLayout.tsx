import React,{Fragment} from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
 function CartLayout(props) {
     let {cart} = props
     if(cart.products.length ===0) return <Fragment>{props.children}</Fragment>
    return (
        <div className="cart">   
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

const mapStateToProps = state =>({
    cart:state.cart
})

export default connect(mapStateToProps,null)(CartLayout)
