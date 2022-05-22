import React from 'react';
import AllParts from './AllParts';
import Banner from './Banner';
import Business from './Business';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='text-3xl text-center'>
            <Banner/>
            <AllParts/>
            <Business/>
            <Footer/>
        </div>
    );
};

export default Home;