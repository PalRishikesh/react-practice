import React from 'react'
import ProductForm from './ProductForm'

const CreateProduct = (props) => {
    function onCreateCustomProduct(product){
        console.log("Product in Create Product :",product);
        props.createProductInAppAttibute(product)
    }
  return (
    <div className='row'>
        <div className='col-lg-8 mx-auto' style={{backgroundColor:'white', padding:'10px 15px', marginBottom:'10px'}}>
            <ProductForm createProductAttribute = {onCreateCustomProduct}></ProductForm>
        </div>
    </div>
  )
}

export default CreateProduct
