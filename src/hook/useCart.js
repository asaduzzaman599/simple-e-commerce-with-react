import { useEffect, useState } from "react";
import { getCartFromLocalStorage } from "../utilities/fakedb"

const useCart = (products) => {
    const [cart, setcart] = useState([]);
    useEffect(() => {
        const storedCart = getCartFromLocalStorage()
        const storedProduct = [];

        for (const id in storedCart) {
            const exist = products.find(product => product._id === id);
            if (exist) {
                exist.quantity = storedCart[id];
                storedProduct.push(exist)
            }
        }
        setcart(storedProduct);
    }, [products]);
    return [cart, setcart];
}

export { useCart }
