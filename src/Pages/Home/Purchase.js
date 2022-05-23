import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = ({ product,setPurchase }) => {

    const [user] = useAuthState(auth);

    const handlePurchase = event => {
       event.preventDefault();   
       const name = event.target.name.value;                                                          
       const email = event.target.email.value;                                                          
       const product = event.target.product.value;                                                          
       const quantity = event.target.quantity.value;                                                          
       const phone = event.target.phone.value;  
       
       const purchase = {name,email,product,quantity,phone};
       console.log(purchase);
       setPurchase(null)
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h2 className='text-2xl text-accent font-bold my-3'>Purchase Your Order</h2>
                    <form onSubmit={handlePurchase}>
                        <input type="text" name='name' value={user?.displayName} class="input input-bordered w-full max-w-xs mb-5" disabled/>
                        <input type="email" name='email' value={user?.email} class="input input-bordered w-full max-w-xs mb-5" disabled/>
                        <input type="text" name='product' value={product?.name} class="input input-bordered w-full max-w-xs mb-5" disabled/>
                        <input type="text" name='quantity' placeholder='Product Quantity' class="input input-bordered w-full max-w-xs mb-5"/>
                        <input type="text" name='address' placeholder='Your address' class="input input-bordered w-full max-w-xs mb-5"/>
                        <input type="text" name='phone' placeholder='Phone number' class="input input-bordered w-full max-w-xs mb-5"/>
                        <input type="submit" class="btn btn-accent w-full max-w-xs text-white" value="Submit" />
                    </form>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;