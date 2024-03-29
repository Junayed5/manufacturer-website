import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Purchase from './Purchase';

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({});
    const [purchase, setPurchase] = useState(null);
    const { img, name, quantity, minOrder, price } = product;

    useEffect(() => {
        fetch(`https://compter-parts-manufacturer.onrender.com/part/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={img} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h4 className='text-xl'><span className='font-bold'>Available stock:</span>{quantity}</h4>
                <h4 className='text-xl'><span className='font-bold'>Minimum Order:</span>{minOrder}</h4>
                <h4 className=''><span className='font-bold'>Per Price:</span>${price}</h4>
                <div className="card-actions">
                    <label onClick={() => setPurchase(product)} htmlFor="my-modal-6" className="btn modal-button btn-accent">Purchase</label>
                </div>
                {purchase && <Purchase
                product={product}
                setPurchase={setPurchase}
                />}
            </div>
        </div >
    );
};

export default Product;