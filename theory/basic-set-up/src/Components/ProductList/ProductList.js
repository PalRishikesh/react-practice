import React from 'react'
import Product from './Product';
const ProductList = (props) => {
    // console.log("newProductAttibute: ",props.newProductAttibute);
  return (
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
            />
            })  
        }
</div>
  )
}
export default ProductList
