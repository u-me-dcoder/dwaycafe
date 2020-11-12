import React,{useEffect,useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'
import { connect } from 'react-redux'
import { GrSubtract, GrAdd } from 'react-icons/gr'
import { addToCart, getCartList } from '../store/actions/cart'
import {BiTrash} from 'react-icons/bi'
import classNames from  'classnames'

function Cart(props) {
    let { cart,addToCart,getCartList } = props
    let [selection,setSelection] = useState([])
    let [action,setAction] = useState(null)
    let {loading,products} = cart

    useEffect(()=>{
        getCartList()
    },[getCartList])

    const incrementProduct = (item) =>{
        
        let cartItem = {...item,quantity:item.quantity + 1}
      
        addToCart(cartItem)
       

    }
    const decrementProduct = (item) =>{
        let quantity = item.quantity
        if(quantity===1){
            quantity=1
        }
        else{
            quantity = quantity - 1
        }
        
        let cartItem = {...item,quantity}

       
         addToCart(cartItem)
      

    }

    const handleChange = id =>{
        
        if(selection.includes(id)){
            let arr =selection.filter(item=>item!==id)
            setSelection(arr)
        }
        else{
            setSelection([...selection,id])
        }
        
    }

    const setActionType = (type) =>{
        if(action===type) {
            setAction(null)
        }
        else{

            setAction(type)
        }
    }

    if(!loading){
        if (cart.products.length === 0) return <Redirect to="/" />
        let list = products.map(item => {
            let { _id, avatar, name, price, quantity } = item
            return (
                <li  key={_id}>
                    <div className="product-card">

                        <div className="product-checkbox">
                            <input type="checkbox" id={_id} onChange={(e)=>handleChange(e.target.id)}/>
                        </div>


                    <div className="product-img">
                        <img src={`${process.env.REACT_APP_API_ENDPOINT}/static/avatars/${avatar}`} alt={name} />
    
                    </div>
                    <div className="textbox">
                        <h6 className="product-itemname">{name}</h6>
                        <p className="product-itemprice">{price}</p>
                    </div>
    
    
                    <div className="product-cart">
                        <div className="product-selector">
                            <button className="btn btn-circle"  onClick={e=>decrementProduct(item)}>
                                <GrSubtract />
                            </button>
    
                            <div className="quantity">
                                {quantity}
                            </div>
    
                            <button className="btn btn-circle" onClick={e=>incrementProduct(item)}>
                                <GrAdd />
                            </button>
    
                        </div>
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
    
                    <div className="cart-action">
                        <div className={classNames('item delete',{active:action==='DEL'})} onClick={()=>setActionType('DEL')}>

                        <BiTrash/>
                        </div>

                        <div className="item">

                        <FaRegBell />
                        </div>
                    </div>
    
    
                </div>
                <ul className="list cart-list">
                    {list}
                </ul>

                <button onClick={()=>console.log(selection)}>test</button>
            </div>
        )
    }
    else{
        return <h1>Loading</h1>
    }

  

    
   

    

   
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, {addToCart,getCartList})(Cart)