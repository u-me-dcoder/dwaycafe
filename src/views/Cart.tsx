import React from 'react'
import { Link ,Redirect} from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'
import {connect} from 'react-redux'
import { GrSubtract, GrAdd } from 'react-icons/gr'
function Cart(props) {
    let {cart} =props
    if(cart.products.length===0) return <Redirect to="/"/>

    let list = cart.products.map(item=>{
        let {_id,avatar,name,price,quantity}= item
        return(
            <li className="product-card" key={_id}>
                    <div className="product-img">
                        <img src={`http://192.168.1.11:5000/static/avatars/${avatar}`} alt={name} />
                        
                    </div>
                    <div className="textbox">
                        <h6 className="product-itemname">{name}</h6>
                        <p className="product-itemprice">{price}</p>
                    </div>

                  
                        <div className="product-cart">
                        <div className="product-selector">
                        <button className="btn btn-circle" >
                            <GrSubtract />
                        </button>
    
                        <div className="quantity">
                            {quantity}
                        </div>
    
                        <button className="btn btn-circle" >
                            <GrAdd/>
                        </button>
    
                    </div>
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
            <ul className="list">
               {list}
            </ul>
        </div>
    )
}

const mapStateToProps = state=>({
    cart:state.cart
})

export default  connect(mapStateToProps,null)(Cart)