import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { getProductDetail } from '../store/actions/product'
import {connect} from 'react-redux'

//import {AiOutlinePlus,AiOutlineMinus, } from 'react-icons/ai'
 function Product(props) {
    let { computedMatch,getProductDetail } = props
    let { params } = computedMatch
    let { id } = params

    useEffect(()=>{
        getProductDetail(id)
    },[getProductDetail,id])

    console.log(id)
    return (
        <Fragment>
            <div className="product-header">
                <Link to="/" className="icon">
                    <BiArrowBack />
                </Link>
                <div className="image"></div>
            </div>
            <div className="product-body">

                <div className="text-center p-4"><h6 className="product-itemname">Buff Ghol Momo</h6>
                    <p className="product-itemprice">Rs 490</p>
                    <p className="product-description mt-2">It is one of the most popular foods of Nepal. It is made of Meat and Wheat.  It is very delicious</p>
                </div>
                <h6 className="heading-secondary">Choose Quantity</h6>
                {/* 
                <div className="product-selector mt-4">
                    <button className="btn btn-circle" onClick={e=>alert('minus')}>
                        <AiOutlineMinus />
                    </button>

                    <div className="quantity">
                        4
                    </div>

                    <button className="btn btn-circle" onClick={e=>alert('increase')}>
                        <AiOutlinePlus/>
                    </button>

                </div> */}


                <footer className="product-footer">
                    <h5 className="text-warning ml-3">Rs. 490</h5>
                    <button className="btn btn-warning btn-cart">Add to Cart</button>
                </footer>



            </div>
        </Fragment>
    )
}


export default connect(null,{getProductDetail})(Product)