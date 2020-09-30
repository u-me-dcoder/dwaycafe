import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
const PopularItem = (props) => {
    let { name, price, pid } = props
    return (

        <div className="popular-card">
            <div className="popular-img">
                <div className="favorite" id={pid}>
                    <FaRegHeart />
                </div>
            </div>
            <h6 className="popular-itemname">{name}</h6>
            <p className="popular-itemprice">Rs. {price}</p>
        </div>

    )
}
export default PopularItem