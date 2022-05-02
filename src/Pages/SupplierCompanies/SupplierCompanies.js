import React from 'react';
import './SupplierCompanies.css'
import im1 from '../../image/Asus-Logo-1995-present.png'
import im2 from '../../image/Dell_Logo.png'
import im3 from '../../image/Hewlett-Packard-Logo-1981-2008.png'
import im4 from '../../image/Lenovo_Logo_2015.png'
import im5 from '../../image/Acer-Logo_2011.png'


const SupplierCompanies = () => {
    return (
        <div>
            <h1 className='text-white text-center'>Our Supplier Companies</h1>

            <div className='row justify-content-center logos'>
                <div className='g-3  col-sm-12 col-md-4 col-lg-2 row justify-content-center'>
                    <div className="card px-0 mx-0" style={{ width: "10rem" }}>
                        <img src={im1} className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className='g-3  col-sm-12 col-md-4 col-lg-2  row justify-content-center'>
                    <div className="card px-0 mx-0" style={{ width: "10rem" }}>
                        <img src={im2} className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className='g-3  col-sm-12 col-md-4 col-lg-2 row justify-content-center'>
                    <div className="card px-0 mx-0" style={{ width: "10rem" }}>
                        <img src={im3} className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className='g-3  col-sm-12 col-md-4 col-lg-2 row justify-content-center'>
                    <div className="card px-0 mx-0" style={{ width: "10rem" }}>
                        <img src={im4} className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className=' gy-3 gx-2 col-sm-12 col-md-4 col-lg-2 row justify-content-center'>
                    <div className="card px-0 mx-0" style={{ width: "10rem" }}>
                        <img src={im5} className="card-img-top" alt="..." />

                    </div>
                </div>
            </div>


        </div>
    );
};

export default SupplierCompanies;