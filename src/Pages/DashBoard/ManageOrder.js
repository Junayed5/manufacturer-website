import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://stark-basin-71367.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])
    return (
        <div>
            <h1 className="text-secondary text-3xl text-center font-bold">All Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map((order,index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.address}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;