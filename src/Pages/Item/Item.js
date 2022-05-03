import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Item = (props) => {
    const { _id, img, name, price, details, supplier, quantity } = props.service;
    const navigate = useNavigate();
    const handleUpdate = id => {
        navigate(`/inventory/${_id}`);
    }
    return (

        <div className='g-3 col-sm-12 col-md-6 col-lg-4 row justify-content-center'>
            <div className="card px-0 mx-0" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title fw-bold ">{name}</h5>


                    <h5>{price}$</h5>
                    <hr />
                    <h6>Supplier: {supplier}</h6>
                    <h6>Quantity: {quantity}</h6>
                    <hr />
                    <p className="text-start ">{details}</p>
                    <div className='d-flex justify-content-center'>
                        <button onClick={() => handleUpdate(_id)} className='btn btn-dark px-5 fw-bold'>Update</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Item;