import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    return (
        <div className="form-control">
            <button onClick={handleGoogleSignIn} className="btn bg-gray-300 text-black border-0 hover:text-white">Continue with Google</button>
        </div>
    );
};

export default SocialLogin;