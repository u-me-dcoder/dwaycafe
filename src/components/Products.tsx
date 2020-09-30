import React,{useEffect} from 'react'

import ProductItem from './ProductItem';
import { getCategoryProduct } from '../store/actions/product';
import {connect} from 'react-redux'




function Products(props) {
    let {id,getCategoryProduct,product} = props
    let {loading,items} = product
    useEffect(()=>{
        getCategoryProduct(id)
    },[getCategoryProduct,id])
    if(loading && items===null){
        return <h1>Loading</h1>
    }
    if(!loading && items!==null && items.length===0){
        return <h1>No Product available at the time</h1>
    }
    
    if(!loading && items!==null && items.length > 0){
        const products = items.map((item) => <ProductItem key={item._id} name={item.name} price={item.price} pid={item._id} avatar={item.avatar} />)
    return (
        <div>
            {products}
        </div>)
    }
    
    
}

const mapStateToProps = state =>({
    product:state.product
})

export default connect(mapStateToProps,{getCategoryProduct})(Products)