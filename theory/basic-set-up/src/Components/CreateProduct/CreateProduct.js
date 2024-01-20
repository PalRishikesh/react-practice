import React, { useState } from 'react'
import ProductForm from './ProductForm'

const CreateProduct = (props) => {
    function onCreateCustomProduct(product) {
        props.createProductInAppAttibute(product)
    }

    const [showForm, setShowForm] = useState(false);
    function showFormDisplay() {
        setShowForm(true);
    }
    function hideFormDisplay(){
        setShowForm(false);
    }
    return (
        <div className='row'>
            <div className='col-lg-8 mx-auto' style={{ backgroundColor: 'white', padding: '10px 15px', marginBottom: '10px' }}>
                {/* When two thurtly value is there with && operator will retrn second operand, second thurtly value will be return ie. button in this case */}
                {!showForm && <button onClick={showFormDisplay}>Create Product</button>}
                {showForm && <ProductForm hideFormAttribute={hideFormDisplay} createProductAttribute={onCreateCustomProduct}></ProductForm>}
            </div>
        </div>
    )
}

export default CreateProduct
