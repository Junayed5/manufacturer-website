import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {

    const { data: allProducts, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:4000/parts').then(res => res.json()));

    const [modal, setModal] = useState(null);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className="text-orange-500 text-3xl font-bold text-center">Manage All products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Total</th>
                            <th>Manage product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts?.map(products => <ProductRow
                                key={products._id}
                                products={products}
                                setModal={setModal}
                            />)
                        }
                    </tbody>
                </table>
                {modal && <DeleteModal
                    modal={modal}
                    refetch={refetch}
                    setModal={setModal}
                />}
            </div>
        </div >
    );
};

export default ManageProduct;