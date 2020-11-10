import React, { useState } from 'react'
import {Link} from '@reach/router'
import axios from 'axios'

const ProductList = (props) => {

    const deleteProduct = (ID) => {
        console.log('delete:', ID)
        axios.delete(`http://localhost:8000/product/${ID}`)
        .then(res=>console.log(res))
    }

    return (
        <div>
            <h1>All Products:</h1>
            {
                props.products.map((product, idx)=>{
                return  <div> 
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                            <button onClick={() => deleteProduct(product._id)}>Delete</button>
                        </div>
                
                })
            }
        </div>
    )
}

export default ProductList