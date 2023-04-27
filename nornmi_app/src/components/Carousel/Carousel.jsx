import React from 'react';
import './Carousel.css';
import Img from "./Images/Natural Doze - Vitamin Clarity.jpeg"

const Carousel = () => {
    return (
        <div className='Carousel'>
            <div className='Container'>
                <img className='Img-clarity' src={Img} alt="Vitamin-orange" />
                <div>
                    <h2 className='Title-clarity'>Your Daily Doze Of Clarity</h2>
                    <p className='Ttx-clarity'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, velit! Enim non officiis id ducimus itaque adipisci facilis dicta harum impedit nostrum ad quae a, quia magni vel. Asperiores, quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dolor quod atque eum id officiis. Similique consectetur neque, magnam temporibus iure architecto eaque, unde mollitia corrupti deserunt perspiciatis atque odit.</p>
                </div>
            </div>
            <div className='Bkg-clarity'></div>
        </div>
    )
}

export default Carousel;