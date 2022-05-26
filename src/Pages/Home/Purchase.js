import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = ({ product, setPurchase }) => {

    const price = product.price;
    const [user] = useAuthState(auth);
    const handlePurchase = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const productName = event.target.product.value;
        const orderQuantity = event.target.quantity.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;

        const purchase = { name, email, productName, quantity: orderQuantity, address, phone,price };
        console.log(purchase);

        fetch('http://localhost:4000/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log({ 'success': data });
                setPurchase(null)
                toast.success('Order Done!')
            });

    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h2 className='text-2xl text-accent font-bold my-3'>Purchase Your Order</h2>
                    <form onSubmit={handlePurchase}>
                        <input type="text" name='name' value={user?.displayName} className="input input-bordered w-full max-w-xs mb-5" disabled />
                        <input type="email" name='email' value={user?.email} className="input input-bordered w-full max-w-xs mb-5" disabled />
                        <input type="text" name='product' value={product?.name} className="input input-bordered w-full max-w-xs mb-5" disabled />
                        <input type="text" name='quantity' placeholder={`Product Quantity minimum ${product.minOrder}`} className="input input-bordered w-full max-w-xs mb-5" required='100+' /><br />
                        <input type="text" name='address' placeholder='Your address' className="input input-bordered w-full max-w-xs mb-5" />
                        <input type="text" name='phone' placeholder='Phone number' className="input input-bordered w-full max-w-xs mb-5" />
                        <input type="submit" className="btn btn-accent w-full max-w-xs text-white" value="Submit" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;