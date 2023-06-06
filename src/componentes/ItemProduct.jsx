import React from 'react'
import GetProducts from './helpers/GetProducts'

const ItemProduct = ({product}) => {
  GetProducts(product)

  return (
    <div>
      <p>{product}</p>
      
      </div>
  )
}

export default ItemProduct
