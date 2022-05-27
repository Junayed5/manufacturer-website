import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../../hooks/UseToken';
import Loading from '../Shared/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    let errorMsg;

    const token = UseToken(user);
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading/>
    }

    if (error) {
        errorMsg = <p className='text-red-600'>{error.message}</p>
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    return (
        <div className="form-control">
            {errorMsg}
            <button onClick={handleGoogleSignIn} className="btn bg-gray-300 text-black border-0 hover:text-white">Continue with Google</button>
        </div>
    );
};

export default SocialLogin;