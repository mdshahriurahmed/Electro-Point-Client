import React from 'react';
import { Link } from 'react-router-dom';
import useInventories from '../hooks/useInventories';
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import Inventories from '../Inventories/Inventories';
import './HomeInventory.css'

const Homeinventories = () => {
    const [inventories] = useInventories();
    const sixinventories = inventories.slice(0, 6);
    return (
        <div >
            <h1 className='text-white text-center mt-4'>Inventories</h1>
            <div className='row justify-content-center' >
                {
                    sixinventories.map(item => <Inventories key={item._id}
                        service={item}></Inventories>)
                }
            </div>


            <div className=' button-setup'>
                <Link to='/manageInventory' className='buttondesign'>
                    Manage Inventory
                    <ArrowCircleRightIcon style={{ width: "20px" }} className="h-5 w-5 ms-2 text-blue-500" />
                </Link>

            </div>


        </div>
    );
};

export default Homeinventories;