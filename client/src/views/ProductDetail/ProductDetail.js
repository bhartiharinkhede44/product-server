import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import "./ProductDetail.css"
import axios from 'axios'


function ProductDetail() {
const [product,setProduct]=useState({});
const {_id}= useParams();

const loadProduct =async () =>{
 const response= await axios.get(`/product/${_id}`);
 setProduct(response?.data?.data)
}

useEffect(()=>{
 loadProduct();
},[]);
  return (

    <div>
      <h1 className='text'>Product Detail</h1>
      <h2 className='text'>Product id:{_id}</h2>
      <h2>Name:{product?.name}</h2>
      <h3>Brand:{product.brand}</h3>
      <p>description:{product?.description}</p>
     <h4>Price:{product?.price}</h4>
     <img src={product.productImage} />
     
        
    </div>
  )
}

export default ProductDetail
