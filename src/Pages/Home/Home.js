import React from 'react';
import AllParts from './AllParts';
import Banner from './Banner';
import Business from './Business';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AllParts/>
            <Business/>
            <Footer/>
        </div>
    );
};

export default Home;