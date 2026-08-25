import "./ProductCard.css"


import React from 'react'

function ProductCard({product}) {
  return ( 
                        <div className="coffee-card-container">
                            <img src={product.image} alt=""  className="coffe-imges"/>
                            
                            <h1 className="product-title">{product.title}</h1>
                            <h4 className="product-price">{product.price}</h4>
                            <p>{product.description}</p>
                        </div>
                    
  
  )
}

export default ProductCard