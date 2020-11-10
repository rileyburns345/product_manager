import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
 
const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/product')
        .then(res=>{
            setProducts(res.data)
            setLoaded(true)
        })

    }, [products])

    return (
        <div>
            <h1>Main</h1>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList products={products}/>}
        </div>
    )
}

export default Main