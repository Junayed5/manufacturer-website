import React, { useEffect, useState } from 'react';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://stark-basin-71367.herokuapp.com/users',{
            method:"GET",
            headers:{
                authorization:`Bearar ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users]);


    return (
        <div>
            <h1>All users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user,index) => <AdminRow key={user._id}
                            user={user}
                            index={index}
                            />)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;