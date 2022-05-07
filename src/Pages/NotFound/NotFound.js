import React from 'react';
import { EmojiSadIcon, } from '@heroicons/react/solid';


const NotFound = () => {
    return (
        <div style={{ color: "#56B94E" }}>
            <div className=' d-flex  justify-content-center align-items-center' style={{ marginTop: "200px" }}>
                <div style={{ width: "150px" }}>
                    <EmojiSadIcon></EmojiSadIcon>
                </div>
            </div>


            <h1 className='fw-bold text-center'>Error 404</h1>
            <p className=' text-center'>Woops. Looks like this page doesn't exist</p>
        </div>
    );
};

export default NotFound;