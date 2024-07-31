import React, { useEffect, useState } from 'react'
import "./Products.scss"
import vector from "../../../assets/Vector.svg"
import axios from '../../../api'

const Products = () => {
    const [data,setData] = useState(null)
    const [limit ,setLimit] = useState(1)
    useEffect(()=>{
        axios
          .get(`/products?limit=${5 * limit}`)
          .then(res => setData(res.data.products))
          .catch(err => console.log(err))
    }, [limit])
    console.log(data);
    const product = data?.map((product)=>(
        <tr key={product.id}>
            <td>
                <img className='product__img' src={product.images[0]} alt={product.title} />
                <h3>{product.title + " " + product.brand}</h3>
            </td>
            <td>
                <p>1/15/12</p>
            </td>
            <td>
                <p className='product__text'>{product.price}</p>
            </td>
            <td>
                <p className='product__text'>{product.price + 200}</p>
            </td>
            <td>
                <p>{product.rating}</p>
            </td>
        </tr>
    ))
  return (
    <>
    <div className='product'>
        <div className='container'>
            <div className='product__info'>
                <h1 className='product__title'>Products</h1>
                <div className='product__btns'>
                    <button><img src={vector} alt="" /></button>
                    <button>Add</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>End date</th>
                        <th>Profits</th>
                        <th>Losses</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {product}
                </tbody>
            </table>
            <button className='product__btn' onClick={()=> setLimit(prev => prev +1)}>See more</button>
        </div>
    </div>
    </>
  )
}

export default Products