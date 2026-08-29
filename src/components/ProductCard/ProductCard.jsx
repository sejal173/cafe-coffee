import "./ProductCard.css"

import React from 'react'

function ProductCard({product}) {
  return (
    <div className="product-container">
        <img src={product.image} alt=""  className="card-img"/>
        {/* <h1>{product.id}</h1> */}
        <h1 className="product-heading"> {product.title}</h1>
        <h3 className="product-price">{product.price}</h3>
        <p className="product-desription">{product.description}</p>

    </div>
  )
}

export default ProductCard;