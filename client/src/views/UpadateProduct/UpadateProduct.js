import React, { useEffect, useState } from 'react'
import './UpadateProduct.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function UpadateProduct() {

    const [name, setName] = useState('')

    const [price, setPrice] = useState('')
    const { _id } = useParams()
    // console.log(_id);
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [productImage, setUrl] = useState('')


    const updateDetails = async () => {
        const response = await axios.get(`/product/${_id}`)
        const { name, description, brand, productImage, price } = (response?.data?.data)
        setName(name)
        setDescription(description)
        setBrand(brand)
        setUrl(productImage)
        setPrice(price)
    }
    useEffect(() => {
        updateDetails()
    }, [])

    const update = async () => {
        const updateDetails = {
            name,
            description,
            brand,
            productImage,
            price

        }
        const response = await axios.put(`/product/${_id}`, updateDetails)
        alert(response?.data?.message);
        window.location.href="/";
    }


    return (
        <div>
            <form className='form-contanier'>
                <input
                    type="text"
                    placeholder='product name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='input-box'
                />
                <input
                    type="text"
                    placeholder='Description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className='input-box'
                />
                <input
                    type="text"
                    placeholder='Brand'
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                    className='input-box'
                />
                <input
                    type="text"
                    placeholder='Image-URL'
                    value={productImage}
                    onChange={e => setUrl(e.target.value)}
                    className='input-box'
                />
                <input
                    type="text"
                    placeholder='Enter Price'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className='input-box'
                />

                <button className='btn' type='button' onClick={update}>Update product</button>
            </form>
        </div>
    )
}

export default UpadateProduct
