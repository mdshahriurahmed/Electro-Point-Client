import React from 'react';
import useItems from '../hooks/useItems';

import Item from '../Item/Item';

const HomeItems = () => {
    const [items] = useItems();
    const sixItems = items.slice(0, 6);
    return (
        <div >
            <h1 className='text-white text-center'>Items</h1>
            <div className='row justify-content-center' style={{ paddingBottom: "200px" }}>
                {
                    sixItems.map(item => <Item key={item._id}
                        service={item}></Item>)
                }
            </div>
        </div>
    );
};

export default HomeItems;