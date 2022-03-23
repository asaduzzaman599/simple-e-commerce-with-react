// use local storage to manage cart data
const addTolocalStorage = (id) =>{
    let cart = localStorage.getItem('cart-shopping');
    if(cart){
        cart = JSON.parse(cart);
    }else{
        cart = {}
    }

    if(cart[id]){
        cart[id] = cart[id]+1;
    }else{
        cart[id]=1;
    }
    localStorage.setItem('cart-shopping',JSON.stringify(cart))
}

const getCartFromLocalStorage = () =>{
    let cart = localStorage.getItem('cart-shopping');
    if(cart){
        cart = JSON.parse(cart);
    }else{
        cart = {}
    }
    return cart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addTolocalStorage, 
    getCartFromLocalStorage,
    removeFromDb,
    deleteShoppingCart
}