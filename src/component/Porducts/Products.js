import React from 'react';
import { addToDb, removeDb } from '../../utilities/fakedb';

const Products = (props) => {
    // console.log(props.product)
    const {name, price, color,id, gender} = props.product

    const handlePurches = id =>{
        // console.log(id)
        addToDb(price)
    }
    const removePurches = () =>{
        removeDb(price)
    }
    return (
        <div>
            {/* <h1>This is Product</h1> */}
            <h1>Product Name: {name}</h1>
            <p> Product Color: {color}</p>
            <p>ID: {id}</p>
            <p>Price: {price}</p>
            <p>Gender:{gender}</p>
            <button onClick={()=>handlePurches(id)}>Purches</button>
            <button onClick={()=>removePurches(id)} >Remove</button>
        </div>
    );
};

export default Products;