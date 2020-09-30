import React from 'react';
import {Link} from 'react-router-dom'
import classNames from 'classnames'
const CategoryItem = (props) => {
    let { name, id,avatar,urlMatch } = props
    return (

        <Link to={`/category/${id}`} className={classNames("category-item",{active:id===urlMatch})}>
            <div className="category-img">
                <img src={`http://192.168.1.11:5000/static/avatars/${avatar}`} alt=""/>
            </div>
            <h6 className="category-name">{name}</h6>
           
        </Link>

    )
}
export default CategoryItem