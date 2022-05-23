import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({});
    const {img,name} = product

    useEffect(() => {
        fetch(`http://localhost:4000/part/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;