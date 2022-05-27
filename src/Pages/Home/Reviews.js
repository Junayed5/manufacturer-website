import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://stark-basin-71367.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-14'>
            <h1 className='text-3xl font-bold text-secondary text-center'>Reviews</h1><hr className='w-32 h-1 mx-auto'/>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3'>
                {reviews.map(review => <Review
                    key={review._id}
                    review={review}
                />)}
            </div>
        </div>
    );
};

export default Reviews;