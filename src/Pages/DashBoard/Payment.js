import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1CEICVUvLchhzLCFUx2zvPbWZ5hg0SpirWCxHXWBn90so0r6z1IeJnte7OLc8Awc35MEiooeJPhP994Bo93lUL00ZYJecKzf');
const Payment = () => {
    const { id } = useParams();
    const {data: order, isLoading} = useQuery('order', () => fetch(`https://stark-basin-71367.herokuapp.com/order/${id}`,{
        method:"GET",
        headers:{
            authorization:`Bearar ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-10">
                <div className="card-body">
                <h3 className='text-xl text-secondary font-bold'>Hello {order.name}</h3>
                <p>Please Pay : {order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;