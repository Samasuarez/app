import React from 'react'
import GetProducts from './helpers/getProducts'

const ItemProduct = ({product}) => {
  GetProducts(product)

  return (
    <div>
      <p>{product}</p>
      
      </div>
  )
}

export default ItemProduct
