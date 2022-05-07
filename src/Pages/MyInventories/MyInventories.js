import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/solid'
import './MyInventories.css'

const MyInventories = (props) => {
    const { _id, img, name, price, details, supplier, quantity } = props.service;
    const navigate = useNavigate();
    const handleUpdate = id => {
        navigate(`/inventory/${_id}`);
    }
    return (

        <div className='g-3 col-sm-12 col-md-6 col-lg-4 row justify-content-center'>
            <div className="card  px-0 mx-0" style={{ width: "18rem", backgroundColor: "#041b33", boxShadow: '5px 5px 20px black' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-white">
                    <h5 style={{ color: "#56B94E" }} className="card-title fw-bold  ">{name}</h5>


                    <h5>{price} Tk</h5>
                    <hr />
                    <h6>Supplier: {supplier}</h6>
                    <h6>Quantity: {quantity}</h6>
                    <hr />
                    <p className="text-start ">{details}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <button onClick={() => handleUpdate(_id)} style={{ backgroundColor: "#041b33", color: "#56B94E", border: "1px solid #56B94E", boxShadow: "5px 5px 10px black", textShadow: "5px 5px 10px black" }} className='btn  px-4  mb-3'>Update</button>
                        <button className='    mb-3 deleteBtn'>
                            <TrashIcon style={{ width: "20px" }} />
                        </button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyInventories;