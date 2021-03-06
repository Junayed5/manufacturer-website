import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    const {_id,img,minOrder,quantity,name,price,description,} = part
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h4 className='text-xl'><span className='font-bold'>Available Stock:</span>{quantity}</h4>
                    <h4 className='text-xl'><span className='font-bold'>Minimum Order:</span>{minOrder}</h4>
                    <h4 className=''><span className='font-bold'>Per Price:</span>${price}</h4>
                    <p><span className='font-bold'>Description:</span>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/part/${_id}`}><button className="btn btn-accent text-white">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;