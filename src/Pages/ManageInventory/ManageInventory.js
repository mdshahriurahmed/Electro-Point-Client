import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../hooks/useInventories';
import './ManageInventory.css'

const ManageInventory = () => {
    const navigate = useNavigate();
    const handleUpdate = _id => {
        navigate(`/inventory/${_id}`);
    }
    const [inventories, setInventories] = useInventories();
    const handleDelete = id => {
        const proceed = window.confirm('are you sure');
        if (proceed) {
            const url = `https://arcane-beach-19880.herokuapp.com/manageInventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = inventories.filter(user => user._id !== id);
                        setInventories(remaining);
                    }
                })
        }
    }


    return (

        <div className='container' >
            <h1 className='mt-5 text-center text-white'>Manage Inventory</h1>
            <div className='row justify-content-center' >

                {
                    inventories.map(inventory =>
                        <div key={inventory._id} className='g-3 col-sm-12 col-md-6 col-lg-4 row justify-content-center'>
                            <div className="card  px-0 mx-0" style={{ width: "18rem", backgroundColor: "#041b33", boxShadow: '5px 5px 20px black' }}>
                                <img src={inventory.img} className="card-img-top" alt="..." />
                                <div className="card-body text-white">
                                    <h5 style={{ color: "#56B94E" }} className="card-title fw-bold  ">{inventory.name}</h5>


                                    <h5>{inventory.price} Tk</h5>
                                    <hr />
                                    <h6>Supplier: {inventory.supplier}</h6>
                                    <h6>Quantity: {inventory.quantity}</h6>
                                    <hr />
                                    <p className="text-start ">{inventory.details}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <button onClick={() => handleUpdate(inventory._id)} style={{ backgroundColor: "#041b33", color: "#56B94E", border: "1px solid #56B94E", boxShadow: "5px 5px 10px black", textShadow: "5px 5px 10px black" }} className='btn  px-4  mb-3'>Update</button>
                                        <button onClick={() => handleDelete(inventory._id)} className='  mb-3 deleteBtn'>
                                            <TrashIcon style={{ width: "20px" }} />
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }



            </div>
        </div>
    );
};

export default ManageInventory;