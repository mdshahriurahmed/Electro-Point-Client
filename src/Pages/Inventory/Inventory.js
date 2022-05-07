import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './inventory.css'

const Inventory = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `https://arcane-beach-19880.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])

    let new1 = parseInt(inventory.quantity);
    const total = 1;
    const [stockOut, setStockOut] = useState(false);
    useEffect(() => {
        if (total === 0) {
            setStockOut(true);
        }
        else if (total > 0) {
            setStockOut(false);
        }

    }, [])

    return (
        <div className='container text-white'>
            <h1 className='text-center mb-5'>Inventory</h1>
            <div>
                <div className='flex-container '>
                    <div className='width-control '>
                        <div className="  px-0 mx-0" >
                            <h4 style={{ color: "#56B94E" }}>Product ID: {inventory._id}</h4>
                            <hr />
                            <h5>Name: {inventory.name}</h5>

                            <hr />
                            <h5>Price: {inventory.price} Tk</h5>
                            <hr />

                            <h5>Supplier Name: {inventory.supplier}</h5>
                            <hr />
                            <h5>Quantity: {inventory.quantity} </h5>
                            <hr />
                            <h5>Sold: {inventory.sold}</h5>
                            <hr />
                            <p>Description: {inventory.details}</p>
                            <hr />
                        </div>
                        <div>
                            {
                                stockOut ?
                                    <h1>Stockout</h1>
                                    :
                                    <div>
                                        <button className='btn-design'>Delivered</button>
                                    </div>
                            }

                        </div>
                    </div>
                    <div className='width-control   '>
                        <div className=" img-align px-0 mx-0" >
                            <img src={inventory.img} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;