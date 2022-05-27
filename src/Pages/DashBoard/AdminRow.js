import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({user,index}) => {
    const {email,role} =user;

    const makeAdmin = () => {
        fetch(`https://stark-basin-71367.herokuapp.com/user/admin/${email}`,{
            method:"PUT",
            headers:{
                authorization:`Bearar ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if (res.status === 403) {
                toast.error('Failed to make admin')
            }
            return res.json()
        })
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Successfully made admin')
            }
        })
    }

    return (
        <tr>
            <th>{index +1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button className='btn btn-accent' onClick={makeAdmin}>Admin</button>}</td>
        </tr>
    );
};

export default AdminRow;