import React from 'react';
import useInventories from '../hooks/useInventories';
import MyInventories from '../MyInventories/MyInventories';

const ManageInventory = () => {
    const [inventories] = useInventories();
    return (

        <div className='container' >
            <h1 className='mt-5 text-center text-white'>Manage Inventory</h1>
            <div className='row justify-content-center' >
                {
                    inventories.map(item => <MyInventories key={item._id}
                        service={item}></MyInventories>)
                }

            </div>
        </div>
    );
};

export default ManageInventory;