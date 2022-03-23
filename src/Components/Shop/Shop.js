import React, { useEffect, useState } from 'react';
import { addTolocalStorage, getCartFromLocalStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    const [items, setItem] = useState([])

    const selectItem = (product) =>{
        const existProduct = items.find(item => item.id === product.id);

        if(existProduct){
            const remaining = items.filter(item => item.id !== product.id);

            product.quantity = product.quantity+1;
            setItem([...remaining,product])
        }else{
            product.quantity = 1;
            setItem([...items,product])
        }

        addTolocalStorage(product.id)
    }

    
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        const cartItem = getCartFromLocalStorage();
        const storedItem = []
        for(const id in cartItem){
            const availableProduct = products.find(storedProduct => storedProduct.id === id); 
            
           if(availableProduct){
            availableProduct.quantity = cartItem[id];
            storedItem.push(availableProduct)
           }
            

        }
        setItem([...storedItem])
    },[products])

    
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