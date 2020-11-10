import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const ProductView = (props) => {
    const [product, setProduct] = useState({})
    const [productID, setProductID] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:8000/product/${props.id}`)
        .then(res=>{
            setProduct(res.data)
            setProductID(props.id)
        })
    }, [])

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/product/${productID}`)
        .then(res=>{
            console.log(res)
            navigate('/product')
        })
    }

    return (
        <div>
            <h1>Product View</h1>
            <h2>Title: {product.title}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
            <Link to={`/product/${productID}/edit`}>Edit</Link>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default ProductView