import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({modal,setModal,refetch}) => {

    const deleteProduct = (name) => {
        fetch(`https://compter-parts-manufacturer.onrender.com/parts/${name}`,{
            method:"DELETE",
            headers:{
                authorization:`Bearar ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                toast(`${modal.name} is successfully deleted`)
                refetch()
                setModal(null)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-red-600 text-center">Are You Sure For Deleting {modal?.name}</h3>
                    <div className='flex justify-center'>
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-primary">Delay</label>
                        <button 
                        className='ml-5 btn btn-error btn-sm'
                        onClick={() => deleteProduct(modal.name)}
                        >Confirm</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default DeleteModal;