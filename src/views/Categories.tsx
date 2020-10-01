import React from 'react'
import Header from '../components/Header'
import SearchField from '../components/SearchField'
import Heading from '../components/Heading'
import Category from '../components/Category'
import Products from '../components/Products'


 function Categories(props) {
    let { computedMatch } = props
    let { params } = computedMatch
    let { id } = params
     
   
    return (
        <div className="pt-3 px-3 pb-4">
            <Header inner={true}  />
            <div className="my-4">
                <SearchField/>
            </div>
            <Heading title="Categories" />
            <Category id={id}/>
            <Products id={id}/>
        </div>
    )
}



export default Categories