import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useSelector} from "react-redux";
import './carousel.css'

const Carousel = () => {

    const {singleProduct} = useSelector(state => state.windowReducer);

    const items = singleProduct.images?.map((item) => (
        <div className="carouselItem">
            <img src={item} alt={item}/>
        </div>
    ));

    const responsive = {
        0: {
            items: 1
        },
        512: {
            items: 2
        },
        768: {
            items: 3
        },
        1024: {
            items: 1
        }
    };

    return (
        <AliceCarousel
            autoPlay
            responsive={responsive}
            mouseTracking
            items={items}
            infinite
            disableDotsControls
            disableButtonsControls
            autoPlayInterval={800}
        />
    );
};

export default Carousel;