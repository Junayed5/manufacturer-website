import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-[600px] bg-base-200" style={{ "backgroundImage": "url(https://c0.wallpaperflare.com/preview/856/202/494/black-laptop.jpg)" }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://static.gigabyte.com/StaticFile/Image/Global/c2baaea63e88a66bc759edc1784954e4/PromotionBanner/72/png" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='w-3/6'>
                    <h1 className="text-5xl font-bold text-yellow-50    ">Build Your Own Computer</h1>
                    <p className="py-6 text-slate-300">Our computer parts house. you can get all computer parts in our manufacturer house.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;