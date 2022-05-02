import React from 'react';
import './Home.css'
import HomeItems from '../HomeItems/HomeItems'
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <div className='bg' >
                <div className=' container '>
                    <Banner></Banner>
                </div>
            </div>

            <div className='bg' >
                <div className=' container '>
                    <HomeItems></HomeItems>
                </div>
            </div>



        </div>
    );
};

export default Home;