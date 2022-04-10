const { useState, useEffect } = require("react")

const useProduct = () =>{
    console.log('output')
    const [products, setProducts] = useState([]);


    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])

    return [products,setProducts]
}

export{useProduct}