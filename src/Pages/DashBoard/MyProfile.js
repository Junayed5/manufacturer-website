import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <div class="avatar">
                    <div class="w-24 mask mask-squircle mx-auto">
                        <img src={user.photoURL ? user.photoURL : 'https://api.lorem.space/image/face?hash=3174'} alt=''/>
                    </div>
                </div>
                <p>Name:{user.displayName}</p>
                <p>Email:{user.email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;