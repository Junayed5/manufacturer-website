import React, { useEffect, useState } from 'react';
import Part from './Part';

const AllParts = () => {

    const [parts, setParts] = useState([]);
    useEffect( () => {
        fetch('parts.json')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])

    return (
        <div className='my-14'>
            <h1 className='text-4xl font-bold text-center text-primary'>All parts</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5'>
                {
                    parts.map(part => <Part 
                    key={part._id}
                    part={part}
                    />)
                }
            </div>

        </div>
    );
};

export default AllParts;