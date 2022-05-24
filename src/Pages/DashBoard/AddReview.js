import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
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
                                placeholder="name"
                                className="input input-bordered"
                                {...register("name", { required: true })}
                            />
                            {errors.name?.type === 'required' && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email?.type === 'required' && <span className='text-red-600'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input
                                type="number"
                                placeholder="rating"
                                className="input input-bordered"
                                {...register("email")}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered" placeholder="Your Message"
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