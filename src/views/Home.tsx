import React from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import SearchField from '../components/SearchField'
import Popular from '../components/Popular'
import Category from '../components/Category'


 function Home(props) {
    
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
        </div>
    )
}



export default Home
