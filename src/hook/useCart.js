import { useEffect, useState } from "react";
import Product from "../Components/Product/Product";
import { getCartFromLocalStorage } from "../utilities/fakedb"

const useCart = () => {
    const [cart, setcart] = useState([]);
    useEffect(() => {
        const storedCart = getCartFromLocalStorage()
        const storedProduct = [];
        console.log('product')
        const keys = Object.keys(storedCart)
        fetch('http://localhost:4000/cartproduct', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(keys)
        }).then(res => res.json())
            .then(products => {
                console.log('product', products)
                for (const id in storedCart) {
                    const exist = products.find(product => product._id === id);
                    if (exist) {
                        exist.quantity = storedCart[id];
                        storedProduct.push(exist)
                    }
                }
                setcart(storedProduct);
            })
        /* for (const id in storedCart) {
            const exist = products.find(product => product._id === id);
            if (exist) {
                exist.quantity = storedCart[id];
                storedProduct.push(exist)
            }
        } 
        setcart(storedProduct);*/
    }, []);
    return [cart, setcart];
}

export { useCart }
