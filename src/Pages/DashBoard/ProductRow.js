import React from 'react';

const ProductRow = ({ products, setModal }) => {
    return (
        <tr>
            <th>1</th>
            <td>{products.name}</td>
            <td>{products.quantity}</td>
            <td><label onClick={() => setModal(products)} htmlFor="my-modal-3" className="btn modal-button btn-error">Delete</label></td>

        </tr>
    );
};

export default ProductRow;