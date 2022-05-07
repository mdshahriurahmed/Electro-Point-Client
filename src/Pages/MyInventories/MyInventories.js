import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/solid'
import './MyInventories.css'
import useInventories from '../hooks/useInventories';
import { toast, ToastContainer } from 'react-toastify';

const MyInventories = (props) => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://arcane-beach-19880.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setInventories(data)
            )
    }, []);
    const { _id, img, name, price, details, supplier, quantity } = props.inventory;
    const navigate = useNavigate();
    const handleUpdate = _id => {
        navigate(`/inventory/${_id}`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {

            const url = `https://arcane-beach-19880.herokuapp.com/manageInventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const rem = inventories.filter(inventory => inventory._id !== id);
                        setInventories(rem);

                    }
                });


        }

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
                        <button onClick={() => handleDelete(_id)} className='    mb-3 deleteBtn'>
                            <TrashIcon style={{ width: "20px" }} />
                        </button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyInventories;