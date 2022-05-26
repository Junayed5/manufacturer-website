import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const navigation = <>
        <li><Link to='/'>Home</Link></li>
        {user && <Link className='my-auto btn btn-ghost' to='/dashboard'>Dashboard</Link>}
        {user ? <button onClick={handleSignOut} className='btn btn-ghost'>Sign out</button>:<li><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div className="navbar bg-gray-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navigation}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Computer Parts</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navigation}
                </ul>
            </div>
        </div>
    );
};

export default Header;