import React, { useEffect, useState } from 'react';
import Products from '../Porducts/Products';

const Product = () => {
    // const prod = [
    //     {name:'Fan', price:433, color:'white'},
    //     {name:'Light', price:430, color:'Red'},
    //     {name:'Table-fan', price:487, color:'Black'},
    //     {name:'Table-Lamp', price:333, color:'Green'},
    //     {name:'Table-clock', price:548, color:'yellow'},
    // ]
    const [products, setProducts] = useState([])
        useEffect(()=>{
           fetch('../product.json')
           .then(res => res.json())
           .then(data => setProducts(data)) 
        },[])
    return (
        <div>
            {
                products.map(product=><Products 
                    key={product.id}
                    product={product}></Products>)
            }
        </div>
    );
};

export default Product;