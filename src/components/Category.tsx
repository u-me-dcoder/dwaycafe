import React, { useEffect } from 'react'
import CategoryItem from './CategoryItem'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import { getCategory } from '../store/actions/category'





function Category(props) {
    console.log(props)
    let { getCategory, category,id } = props
    let { items, loading } = category
    useEffect(() => {
        getCategory()
    }, [getCategory])
    if (!loading) {
        const list = items.map((item) => <CategoryItem key={item._id} name={item.name} avatar={item.avatar} id={item._id} urlMatch={id} />)
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            arrows: false,


        };
        return (

            <div className="my-4">
                <Slider {...settings} >
                    {list}
                </Slider>
            </div>

        )
    }
    else{
        return <h1>Loading</h1>
    }


}

const mapStateToProps = state => ({
    category: state.category
})

export default connect(mapStateToProps, { getCategory })(Category)