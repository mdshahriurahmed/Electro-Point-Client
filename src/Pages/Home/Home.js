import React from 'react';
import './Home.css'
import HomeItems from '../HomeItems/HomeItems'
import Banner from '../Banner/Banner';
import SupplierCompanies from '../SupplierCompanies/SupplierCompanies';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';

const Home = () => {
    return (
        <div className='bgImg'>
            <div className='bg' >
                <div className=' container '>
                    <Banner></Banner>
                </div>
            </div>
            <div className='bgLight' >
                <div className=' container py-4'>
                    <SupplierCompanies></SupplierCompanies>
                </div>
            </div>

            <div className='bg' >
                <div className=' container pt-4 '>
                    <HomeItems></HomeItems>
                </div>
            </div>

            <div className='bgLight' >
                <div className=' container py-4'>
                    <SubscriptionForm></SubscriptionForm>
                </div>
            </div>

        </div>
    );
};

export default Home;