import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:4000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    return (
        <div>
            <h1>This is my order:{orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>User</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order,index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{order.productName}</td>
                            <td>{order.email}</td>
                            <td>{order.quantity}pcs</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;