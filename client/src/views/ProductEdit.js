import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

const ProductEdit = (props) => {
    console.log('editID:', props.id)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:8000/product/${props.id}`)
        .then(res=>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err=>console.log(err))
    }, [])

    const FormHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/product/${props.id}`, {
            title, price, description
        })
        .then(res=>console.log(res))
        navigate('/product')
    }


    return (
        <div>
            <h1>Product Edit</h1>
            <form onSubmit={FormHandler}>
                <label>Title</label>
                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Price</label>
                <input type='text' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <label>Description</label>
                <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProductEdit