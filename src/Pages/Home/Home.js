import React from 'react';
import AllParts from './AllParts';
import Banner from './Banner';
import Business from './Business';
import Footer from './Footer';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AllParts/>
            <Business/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;