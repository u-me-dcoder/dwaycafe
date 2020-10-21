import React,{useEffect} from 'react'

import ProductItem from './ProductItem';
import { getCategoryProduct } from '../store/actions/product';
import {connect} from 'react-redux'




function Products(props) {
    let {id,getCategoryProduct,product,cart} = props
    let {items} = product
   

    

    useEffect(()=>{
        getCategoryProduct(id)
        
    },[getCategoryProduct,id,cart])


    if(items===null){
        return <h1>Loading</h1>
    }
    if( items!==null && items.length===0){
        return <h1>No Product available at the time</h1>
    }
    
    if( items!==null && items.length > 0){
        const products = items.map((item) => {
            if(cart.products.length > 0){
                
                if(cart.products.filter(product =>product._id===item._id).length > 0){
                    return <ProductItem key={item._id} name={item.name} price={item.price} pid={item._id} avatar={item.avatar} cart={true} />
                }
                return <ProductItem key={item._id} name={item.name} price={item.price} pid={item._id} avatar={item.avatar} />
                
            }
            else{

                return <ProductItem key={item._id} name={item.name} price={item.price} pid={item._id} avatar={item.avatar} />
            }
        })
    return (
        <div>
            {products}
        </div>)
    }
    
    
}

const mapStateToProps = state =>({
    product:state.product,
    cart:state.cart
})

export default connect(mapStateToProps,{getCategoryProduct})(Products)