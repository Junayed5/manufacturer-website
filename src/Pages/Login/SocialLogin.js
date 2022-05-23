import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
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