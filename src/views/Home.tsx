import React from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import SearchField from '../components/SearchField'
import Popular from '../components/Popular'
import Category from '../components/Category'
import {Link} from 'react-router-dom'


 function Home(props) {

    // let handleClick = e =>{
    //     console.log(e)
    //     e.stopPropagation()
    //     console.log('this page does not redirect')
    // }
    // let handleElementClick = e =>{
    //     alert('test')
    // }
    
    return  (
        <div className="pt-3 px-3 pb-3">
            <Header />
            <div className="mb-3">
                <SearchField/>
            </div>
            <Heading title="Popular Foods" />
            <Popular/>
            <Heading title="Categories" />
            <Category/>
            {/* <div onClick={e=>handleElementClick(e)} className="card">
                <span>Some TExt</span>
                <button onClick={e=>handleClick(e)}>Click me</button>
            </div> */}
        </div>
    )
}



export default Home
