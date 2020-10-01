import React from 'react'
import {FaRegBell} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
export default function Header(props) {
    let {inner} = props
    return (    
        <header className="header-home">
            {!inner ? <h6>LOGO</h6> : <Link to="/" className="icon"><BiArrowBack /></Link>}
            <FaRegBell/>
        </header>
    )
}
