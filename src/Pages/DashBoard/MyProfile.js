import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:4000/profile/${user.email}`,{
            method:'PUT',
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log({'success': data});
        })
    }

    const [profile,setProfile] = useState({});
    useEffect( () => {
        fetch(`http://localhost:4000/profile/${user.email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    },[profile,user.email])
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-24 mask mask-squircle mx-auto">
                        <img src={user.photoURL ? user.photoURL : 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='} alt='' />
                    </div>
                </div>
                <p><span className='font-bold'>Name:</span> {user.displayName}</p>
                <p><span className='font-bold'>Email:</span> {user.email}</p>
                {
                    profile && <p><span className='font-bold'>Education:</span> {profile.education}</p>
                }
                {
                    profile && <p><span className='font-bold'>Location:</span> {profile.location}</p>
                }
                {
                    profile && <p><span className='font-bold'>Phone:</span> {profile.phone}</p>
                }
                {
                    profile && <p className='link-hover'><span className='font-bold'>Social Link:</span>{profile.link}</p>
                }

                <label htmlFor="my-modal-3" className="btn modal-button btn-accent">Update Profile</label>

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Add your education"
                                    className="input input-bordered"
                                    {...register("education")}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Add your location"
                                    className="input input-bordered"
                                    {...register("location")}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Add your phone number"
                                    className="input input-bordered"
                                    {...register("phone")}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Social link</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Add your social link"
                                    className="input input-bordered"
                                    {...register("link")}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyProfile;