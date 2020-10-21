import React,{useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'
import { connect } from 'react-redux'
import { GrSubtract, GrAdd } from 'react-icons/gr'
import { addToCart, getCartList } from '../store/actions/cart'
function Checkout(props) {
    let { cart,addToCart,getCartList } = props

    let {loading,products} = cart

    useEffect(()=>{
        getCartList()
    },[])

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

    if(!loading){
        if (cart.products.length === 0) return <Redirect to="/" />
        let list = products.map(item => {
            let { _id, avatar, name, price, quantity } = item
            return (
                <li className="product-card" key={_id}>
                    <div className="product-img">
                        <img src={`http://192.168.1.11:5000/static/avatars/${avatar}`} alt={name} />
    
                    </div>
                    <div className="textbox">
                        <h6 className="product-itemname">{name}</h6>
                        <p className="product-itemprice">{price}</p>
                    </div>
    
    
                    <div className="product-cart">
                       
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
    else{
        return <h1>Loading</h1>
    }

  

    
   

    

   
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, {addToCart,getCartList})(Checkout)