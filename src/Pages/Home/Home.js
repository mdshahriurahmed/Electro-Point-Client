import React from 'react';
import HomeItems from '../HomeItems/HomeItems'
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className=' container '>
            <Slider></Slider>
            <HomeItems></HomeItems>

        </div>
    );
};

export default Home;