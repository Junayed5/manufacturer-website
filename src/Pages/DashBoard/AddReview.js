import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:4000/review',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log({'success': data});
            navigate('/')
        })
    }
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title font-bold mx-auto">Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                value={user.displayName}
                                placeholder="name"
                                className="input input-bordered"
                                {...register("name")}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                value={user.email}
                                className="input input-bordered"
                                {...register("email")}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input
                                type="number"
                                placeholder="rating"
                                className="input input-bordered"
                                {...register("ratings")}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered" placeholder="Your Message"
                                {...register("message")}
                            ></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Submit Review</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;