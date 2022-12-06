import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`https://compter-parts-manufacturer.onrender.com/orders?email=${user.email}`,{
            method:"GET",
            headers:{
                authorization:`Bearar ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    return (
        <div>
            <h1 className='text-orange-500 text-4xl text-center font-bold'>All Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>User</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order,index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{order.productName}</td>
                            <td>{order.email}</td>
                            <td>{order.quantity}pcs</td>
                            <td>${order.price}</td>
                            <td>{(order.price && !order.paid) && <button className='btn btn-accent '><Link to={`/dashboard/payment/${order._id}`}>Pay</Link></button>}
                            {(order.paid) && <p className='text-primary font-bold'>Paid</p>}
                            </td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;