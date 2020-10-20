import React, { Fragment, useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { getProductDetail } from '../store/actions/product'
import {addToCart} from '../store/actions/cart'

import { connect } from 'react-redux'


import {GrAdd,GrSubtract} from 'react-icons/gr'
function Product(props) {
    console.log(props)

    let initialQuantity = 1

    let { computedMatch, getProductDetail, product,addToCart,cart,history} = props
    let { params } = computedMatch
    let { id } = params
    let { item } = product
    let {products} = cart
    products.map(item=>{
        if(item._id===id){
            initialQuantity = item.quantity
            return item
        }
        return item
    })
    let [quantity,setQuantity] = useState(initialQuantity)
    
    

    useEffect(() => {
        getProductDetail(id)
        
    }, [getProductDetail, id])

    const incrementQuantity = ()=>{
        setQuantity(quantity + 1 )
    }
    const decrementQuantity = ()=>{
        if(quantity===1){
            setQuantity(1)
        }
        else{
            setQuantity(quantity - 1)
        }
    }

    const addProduct = e =>{
        e.preventDefault()
        let cartItem = {...item,quantity}
        addToCart(cartItem)
        history.goBack()

    }

    

    if (item === null) {
        return <h1>Loading</h1>
    }
    
    if(item!==null){
        let {name,description,avatar,price} = item
        return (
            <Fragment>
                <div className="product-header">
                    <Link to="/" className="icon">
                        <BiArrowBack />
                    </Link>
                    <div className="image">
                        <img src={`http://192.168.1.11:5000/static/avatars/${avatar}`} alt={name}/>
                    </div>
                </div>
                <div className="product-body">
    
                    <div className="text-center p-4"><h6 className="product-itemname">{name}</h6>
                        <p className="product-itemprice">Rs. {price}</p>
                      {description &&  <p className="product-description mt-2">{description}</p>}  
                    </div>
                    <h6 className="heading-secondary">Choose Quantity</h6>
                    
                    <div className="product-selector mt-4">
                        <button className="btn btn-circle" onClick={()=>decrementQuantity()}>
                            <GrSubtract />
                        </button>
    
                        <div className="quantity">
                            {quantity}
                        </div>
    
                        <button className="btn btn-circle" onClick={()=>incrementQuantity()}>
                            <GrAdd/>
                        </button>
    
                    </div>
    
    
                    <footer className="product-footer">
        <h5 className="text-warning ml-3">Rs. {quantity * price}</h5>
                        <button className="btn btn-warning btn-cart" onClick={e=>addProduct(e)}>Add to Cart</button>
                    </footer>
    
    
    
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    product: state.product,
    cart:state.cart
})

export default connect(mapStateToProps, { getProductDetail,addToCart})(Product)