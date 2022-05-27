import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState("");
    const {_id,price, name, email} = order;

    useEffect(() => {
        fetch("https://stark-basin-71367.herokuapp.com/create-payment-intent", {
          method: "POST",
          headers: { 
              "Content-Type": "application/json",
              authorization:`Bearar ${localStorage.getItem('accessToken')}`
         },
          body: JSON.stringify({price}),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
          });
      }, [price]);


    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const {error} =  await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if (error) {
            setCardError(error.message);
        }
        else{
            setCardError('')
        }
        setSuccess('')
        setProcessing(true)

        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email:email
                },
              },
            },
          );
          if (intentError) {
              setCardError(intentError?.message)
              setProcessing(false)
          }
          else{
              setCardError('')
              setTransactionId(paymentIntent.id);
              setSuccess('Your payment is successful');
              fetch(`https://stark-basin-71367.herokuapp.com/order/${_id}`,{
                  method:"PATCH",
                  headers:{
                    "Content-Type": "application/json",
                    authorization:`Bearar ${localStorage.getItem('accessToken')}`
                  }
              })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  setProcessing(false)
              })
          }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {cardError && <span className='text-red-700'>{cardError}</span>}<br/>
            {success && <div className='text-green-700'>
                <p>{success}</p>
                <p>Transaction id is:{transactionId}</p>
                </div>}<br/>
            <button className='btn btn-sm btn-accent my-4' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;