import React,{Fragment} from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {Link,useRouteMatch} from 'react-router-dom'
import {connect} from 'react-redux'
 function CartLayout(props) {
     let {cart} = props
     let match = useRouteMatch("/cart/");
     
     if(cart.products.length ===0) return <Fragment>{props.children}</Fragment>
    return (
        <div className="cart">   
            {props.children}

            <div className="cart-footer">
                {match===null ? <div className="align-vertical">
                    <div className="cart-icon">
                        <FiShoppingCart/>
                    </div>
                    <Link to="/cart" className="cart-footer_title">View Cart</Link>
                </div> :<div></div>}
                
                <Link to="/checkout" className="btn btn-warning btn-cart">Place Order</Link>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    cart:state.cart
})

export default connect(mapStateToProps,null)(CartLayout)
