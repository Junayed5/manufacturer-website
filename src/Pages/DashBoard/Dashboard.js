import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <h1 className='text-3xl font-bold text-primary'>Dashboard</h1>
                <Outlet/>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/myOrder'>My Order</Link></li>
                    <li><Link to='/dashboard/review'>Add Review</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    {/* admin */}
                    <li><Link to='/dashboard/manageOrder'>Manage Order</Link></li>
                    <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                    <li><Link to='/dashboard/admin'>Make Admin</Link></li>
                    <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;