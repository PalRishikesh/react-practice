import React from 'react'
import Product from './Product';
const ProductList = (props) => {
  return props.newProductList.length === 0 ? 
  <h2>No Product is available as of now.</h2> : 
  (
    <div className="container-fluid">
        {
            props.newProductList.map((product)=>{
                return <Product
                key = {product?.pID}
                id={product?.pID}
                name={product?.pName}
                desciption={product?.desc}
                isAvailable={product?.isAvailable}
                imageUrl={product?.image}
                price={product?.price}
                stock= {product?.stock}
            />
            })  
        }
</div>
  )
}
export default ProductList
