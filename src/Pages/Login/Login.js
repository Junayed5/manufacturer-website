import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../../hooks/UseToken';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorMsg;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const token = UseToken(user);
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorMsg = <p className='text-red-600'>{error.message}</p>
    }

    if (loading) {
        return <Loading/>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='flex justify-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h2 className='text-3xl font-bold text-primary text-center'>Please Login</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                <Link to="/signUp" className="label-text-alt link link-hover">New to Computer parts?</Link>
                            </label>
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {errorMsg}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Login</button>
                        </div>
                        <div className="divider">OR</div>

                    </form>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;