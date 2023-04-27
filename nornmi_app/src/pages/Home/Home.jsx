import React from 'react';

//COMPONENTES
import HomeCard from '../../components/HomeCard/HomeCard';
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {


    return (
        <div>
            <HomeCard title="Enhancing your experience of life through nature and science." subtitle="We are here to deliver you the best available nature-based therapeutics the world's leading experts have to offer."/>
            <Carousel />
            <HomeCard title="For those who expect the best of what is possible, without compromise." subtitle="Developed by leading independent experts, our products are designed for integrative healthcare practitioners who need therapeutics they can rely on to enhance their patients’ health."/> 
        </div>
    )
}

export default Home;
