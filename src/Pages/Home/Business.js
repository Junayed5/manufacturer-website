import React from 'react';
import { IoIosPeople } from "react-icons/io";
import { MdMonetizationOn } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaTools } from "react-icons/fa";

const Business = () => {
    return (
        <div className='my-12'>
            <h1 className='text-center text-primary font-bold text-5xl'>Our Success For Business</h1>

            <div className='grid sm:grid-cols-1 lg:grid-cols-4 text-center my-10'>
                <div>
                    <IoIosPeople size={50} className='text-primary mx-auto'/>
                    <h1 className='text-secondary text-3xl font-bold mt-4 '>100+</h1>
                    <p className='text-primary'>Customers</p>
                </div>
                <div>
                    <MdMonetizationOn size={50} className='text-primary mx-auto'/>
                    <h1 className='text-secondary text-3xl font-bold mt-4 '>12M+</h1>
                    <p className='text-primary'>Annual revenue</p>
                </div>
                <div>
                    <AiFillLike size={50} className='text-primary mx-auto'/>
                    <h1 className='text-secondary text-3xl font-bold mt-4 '>33K+</h1>
                    <p className='text-primary'>Reviews</p>
                </div>
                <div>
                    <FaTools size={50} className='text-primary mx-auto'/>
                    <h1 className='text-secondary text-3xl font-bold mt-4 '>50+</h1>
                    <p className='text-primary'>Tools</p>
                </div>
            </div>
        </div>
    );
};

export default Business;