import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'
import { connect } from 'react-redux'
import { GrSubtract, GrAdd } from 'react-icons/gr'
import { addToCart, getCartList } from '../store/actions/cart'
function Checkout(props) {
    let { cart, addToCart, getCartList } = props
    let totalPriceBeforeServiceCharge = 0
    let totalQuantity = 0
    let { loading, products } = cart

    useEffect(() => {
        getCartList()
    }, [])




    if (!loading) {
        if (cart.products.length === 0) return <Redirect to="/" />
        let list = products.map(item => {
            let { _id, avatar, name, price, quantity } = item
            totalPriceBeforeServiceCharge += price * quantity
            totalQuantity += quantity
            return (
                <li className="checkout-item" key={_id}>
                    <div className="product-img">
                        <img src={`${process.env.REACT_APP_API_ENDPOINT}/static/avatars/${avatar}`} alt={name} />

                    </div>
                    <div className="textbox">
                        <h6 className="product-itemname">{name}</h6>
                        <p className="product-itemprice">{price}</p>
                    </div>


                    <div className="product-quantity">
                        X {quantity}
                    </div>

                </li>
            )
        })
        return (
            <div className="cart-container">
                <div className="cart-header">
                    <Link to="/" className="icon back">
                        <BiArrowBack />
                    </Link>

                    <div>
                        <FaRegBell />
                    </div>


                </div>
                <div className="checkout-card">
                    <ul className="list border-bottom border-dark pb-3">
                        {list}
                    </ul>
                    <div className="text-right">
                        {totalQuantity} Items, <span>Total Rs {totalPriceBeforeServiceCharge}</span>
                    </div>

                </div>

            </div>
        )
    }
    else {
        return <h1>Loading</h1>
    }









}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, { addToCart, getCartList })(Checkout)