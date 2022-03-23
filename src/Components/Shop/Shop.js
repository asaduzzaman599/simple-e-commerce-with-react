import React, { useEffect, useState } from 'react';
import { addTolocalStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    const [items, setItem] = useState([])

    const selectItem = (product) =>{

        setItem([...items,product])
        addTolocalStorage(product.id)
    }
    useEffect(()=>{
        console.log(items)
    },[items]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])

    
    return (
        <div className='shop-container'>
        <div className="product-container">
            {
                products.map(product=> <Product key={product.id}
                    selectItem={selectItem}
                    product={product}></Product>)
            }
        </div>
        <div className="cart-container">
            <Cart selectedItem={items}></Cart>
        </div>
        </div>
    );
};

export default Shop;