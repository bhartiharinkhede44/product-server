import React,{useState} from 'react'
import "./ProductPage.css"
import axios from 'axios'
import "./ProductPage.css"
function ProductPage() {
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')
    const [productImage,setProductImage]=useState('')
    const [brand,setBrand]=useState('')

    const addProduct =async ()=>{
     if (!name || !description || !price || !productImage){
        alert('please enter all fields')
        return
     }
     const product={
        name,
        description,
        price,
        productImage,
        brand
     }
     const response=await axios.post('/product',product);
     alert(response.data.message)
     setName('')
     setDescription('')
     setPrice('')
     setProductImage('')
     setBrand('')
    }
  return (
    <div>
      <h1 className='heading'>Add Product</h1>
      <form className='form-container'>
        <input type='text'
        placeholder='Name'
        className='input-box'
        value={name}
        onChange={(e)=>{
            setName(e.target.value)
        }}/>
         <input type='text'
        placeholder='description'
        className='input-box'
        value={description}
        onChange={(e)=>{
            setDescription(e.target.value)
        }}/>
     <input type='text'
        placeholder=' price'
        className='input-box'
        value={ price}
        onChange={(e)=>{
            setPrice(e.target.value)
        }}/>
        <input type='text'
        placeholder='Brand'
        className='input-box'
        value={brand}
        onChange={(e)=>{
            setBrand(e.target.value)
        }}/>
        <input type='text'
        placeholder='ImageURL'
        className='input-box'
        value={productImage}
        onChange={(e)=>{
            setProductImage(e.target.value)
        }}/>
        <button type='button'
        className='btn'
        onClick={addProduct}>Add Product</button>
      </form>
    </div>
  )
}

export default ProductPage
