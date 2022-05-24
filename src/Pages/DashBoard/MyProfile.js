import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Profile</h1>
            <h3>{user.displayName}</h3>
        </div>
    );
};

export default MyProfile;