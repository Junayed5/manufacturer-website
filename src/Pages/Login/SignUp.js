import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import { toast } from 'react-toastify';
import UseToken from '../../hooks/UseToken';
import Loading from '../Shared/Loading';


const SignUp = () => {

    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const navigate = useNavigate();
    let errorMsg;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, UError] = useUpdateProfile(auth);

    const token = UseToken(user)

    if (user) {
        navigate('/')
    }

    if (error || UError) {
        errorMsg = <p className='text-red-600'>{error.message || UError.message}</p>
    }

    if (loading || updating) {
        return <Loading/>
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name});
        
        reset();
        toast('Successfully Registration Done')
    };

    return (
        <div className='flex justify-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h2 className='text-3xl font-bold text-primary text-center'>Please Register</h2>
                <div className="card-body">
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: <p>Password is required</p>
                                    },

                                })}
                            />
                            {errors.password?.type === 'required' && <span className='text-red-600'>{errors?.password?.message}</span>}
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>
                        {errorMsg}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Sign Up</button>
                        </div>
                        <div className="divider">OR</div>

                    </form>
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default SignUp;