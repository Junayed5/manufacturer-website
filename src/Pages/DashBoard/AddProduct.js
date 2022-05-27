import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://stark-basin-71367.herokuapp.com/parts',{
            method:"POST",
            headers:{
                'Content-type' : 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log({success:data});
            toast.success('Successfully add a new item')
        })
    };
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-sky-600 font-bold text-2xl text-center'>Add New Product</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Product name" className="input input-bordered w-full max-w-xs mb-5"{...register("name", { required: true})} />
                        <input type="text" placeholder="Total Quantity" className="input input-bordered w-full max-w-xs mb-5"{...register("quantity", { required: true})} />
                        <input type="text" placeholder="Minimum order" className="input input-bordered w-full max-w-xs mb-5"{...register("minOrder", { required: true})} />
                        <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs mb-5"{...register("price", { required: true})} />
                        <input type="text" placeholder="Image url" className="input input-bordered w-full max-w-xs mb-5"{...register("img", { required: true})} />
                        <textarea className="textarea textarea-bordered w-full max-w-xs mb-5" placeholder="Description" {...register("description", { required: true})}></textarea>
                                               
                        <input type="submit" value='Add Product' className='btn btn-accent w-full max-w-xs text-white'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;