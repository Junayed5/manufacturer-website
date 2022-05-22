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
        <div className='my-10'>
            <h1 className='text-5xl font-bold text-center'>All parts:{parts.length}</h1>
            <div>
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