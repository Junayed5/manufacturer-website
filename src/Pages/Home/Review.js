import React from 'react';

const Review = ({ review }) => {
    const {name,ratings,message} = review
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Name:{name}</h2>
                <p className='text-xl font-bold'>Ratings:{ratings}</p>
                <p>Description:{message}</p>
                
            </div>
        </div>
    );
};

export default Review;