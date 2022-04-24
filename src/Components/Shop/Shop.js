import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hook/useCart';
import { useProduct } from '../../hook/useProduct';
import { addTolocalStorage, deleteShoppingCart, getCartFromLocalStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [items, setItem] = useCart();
    const [pageSize, setPageSize] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const selectItem = (product) => {
        const existProduct = items.find(item => item._id === product._id);

        if (existProduct) {
            const remaining = items.filter(item => item._id !== product._id);

            product.quantity = product.quantity + 1;
            setItem([...remaining, product])
        } else {
            product.quantity = 1;
            setItem([...items, product])
        }

        addTolocalStorage(product._id)
    }

    const clearCart = () => {
        setItem([]);
        deleteShoppingCart()
    }

    useEffect(() => {
        fetch('http://localhost:4000/productcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;

                setPageSize(Math.ceil(count / size))

            })
    }, [])


    useEffect(() => {
        const url = `http://localhost:4000/product?size=${size}&page=${page}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)

            })
    }, [size, page])
    /* useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        const cartItem = getCartFromLocalStorage();
        const storedItem = []
        for(const id in cartItem){
            const availableProduct = products.find(storedProduct => storedProduct._id === id); 
            
           if(availableProduct){
            availableProduct.quantity = cartItem[id];
            storedItem.push(availableProduct)
           }
            

        }
        setItem([...storedItem])
    },[products]) */


    return (
        <div className='shop-container'>
            <div >
                <div className="product-container">
                    {
                        products.map(product => <Product key={product._id}
                            selectItem={selectItem}
                            product={product}></Product>)
                    }

                </div>

                <div className="paginations">
                    {
                        [...Array(pageSize).keys()].map(number => <button key={number} style={page === number ? { backgroundColor: "goldenrod", color: "white" } : {}} onClick={() => setPage(number)}>{number + 1}</button>)
                    }
                    <select name="" id="" onChange={(e) => setSize(e.target.value)} defaultValue="10">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className="cart-container">
                <Cart selectedItem={items} clearCart={clearCart}>
                    <Link to={'/order'}>Order Review</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;