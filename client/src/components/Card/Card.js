import React from 'react'
import "./Card.css"

function Card({ _id,name, productImage,description,price,brand,remove}) {
  const more=(id)=>{
    window.open(`/detail/${id}`,'_blank')
 }
 const update =(id)=>{
  
    window.open(`/updateproduct/${id}`,'_blank')
  }
  
 

   
 
  
  return (
    <div className='main-container'>
     <h2>{name}</h2>
    
     <p>{description}</p>
     <h3>Price:{price}</h3>
     <h2>Brand:{brand}</h2>
     <img src={productImage} className='img-pro'></img>
     

     <button type='button' className='upate-btn' onClick={()=>{update(_id)}} >update</button>         
     <button type='button' className='upate-btn' onClick={()=>{more(_id)}} >know more</button>
     <button type='button' className='delete-btn' onClick={()=>{remove(_id)}}>delete</button>
     
    </div>
  )
}

export default Card
