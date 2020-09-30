import React from 'react'
import PopularItem from './PopularItem'
import Slider from 'react-slick'

const data = [
    {
        id: 1,
        name: 'Chicken Crispy Bucket',
        price: 490
    },
    {
        id: 2,
        name: 'Spicy Chicken Egg Roll',
        price: 190
    },
    {
        id: 3,
        name: 'Momo',
        price: 100,

    }
];



function Popular() {
    const items = data.map((item) => <PopularItem key={item.id} name={item.name} price={item.price} pid={item.id} />)
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        arrows: false

    };
    return (

        <div className="my-4">
            <Slider {...settings} >
                {items}
            </Slider>
        </div>

    )
}

export default Popular