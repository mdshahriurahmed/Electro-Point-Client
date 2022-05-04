import React from 'react';
import useInventories from '../hooks/useInventories';

import Inventories from '../Inventories/Inventories';

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
        </div>
    );
};

export default Homeinventories;