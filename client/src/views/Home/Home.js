import React from 'react'
import Card from './../../components/Card/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'
import "./Home.css"


function Home() {
  const [products, setproducts] = useState([])
  const [data, setData] = useState([]);
  const loadProducts = async () => {
    const response = await axios.get("/products")
    setproducts(response?.data?.data)
  }
  useEffect(() => {
    loadProducts();

  }, []);
  const remove = async (_id) => {
    const response = await axios.delete(`/product/${_id}`);
    if (response?.data?.data) 
    {
      
      alert(response?.data?.message)
      setData(response?.data?.data)
    }
  }
 
  return (
    <div className='main-container-1'>
      {
        products?.map((product, i) => {
          const { _id, name, description, price, productImage, brand } = product;
          return (
            <div className='main-container' key={i} >
              <Card _id={_id}
                name={name}
                description={description}
                price={price}
                productImage={productImage}
                brand={brand}
                key={i}
                remove={() => {
                  remove(_id)
                }}

              />

            </div>
          )
        })
      }

    </div>
  )
}

export default Home
