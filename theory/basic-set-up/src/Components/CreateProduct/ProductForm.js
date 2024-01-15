import React, { useState } from 'react'

// document.getElementById("name").addEventListener('change',function(event){})

const ProductForm = (props) => {
    let [pName, setPName] = useState('');
    let [pPrice, setPPrice] = useState('');
    let [pDescription, setPDescription] = useState('');
    let [pAvailable, setPAvailable] = useState('');
    let [pImageUrl, setPImageUrl] = useState('');

    // In Single state, we have to pass the object instead of empty string
    // const [userInput, setUserInput ] = useState({
    //     pName:'',
    //     pPrice:'',
    //     pDescription:'',
    //     pAvailable:'',
    //     pImageUrl:''
    // });

    function nameInputHandler(event) {
        setPName(event.target.value)
        // By using single state

        // setUserInput({
        //     ...userInput,
        //     pName: event.target.value
        // })

        // When current state is depend upon previous state we should use below code
        // As react update state based on schedule, so it is good if you want to avoid any old data 
        // setUserInput((prevState)=>{
        //     return {...prevState, pName: event.target.value}
        // })
    }
    function priceInputHandler(event) {
        setPPrice(event.target.value)
    }
    function descInputHandler(event) {
        setPDescription(event.target.value)
    }
    function imageInputHandler(event) {
        setPImageUrl(event.target.value)
    }
    function availablityInputHandler(event) {
        setPAvailable(event.target.checked)

    }


    function callingFormEventHandler(event) {
        event.preventDefault();
        let product = {
            pName: pName,
            desc: pDescription,
            isAvailable: Boolean(pAvailable),
            image: pImageUrl,
            price: Number(pPrice)
        }
        // Setting value empty after form submit btn click
        setPName('')
        setPPrice('')
        setPAvailable('')
        setPDescription('')
        setPImageUrl('')
        props.createProductAttribute(product)

    }

    return (
        <form className="row g-3" onSubmit={callingFormEventHandler}>
            <div className="col-md-6">
                <label for="name">Product Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    placeholder="Product Name"
                    value={pName}
                    onChange={nameInputHandler}
                />
            </div>
            <div className="col-md-6">
                <label for="price">Product Price</label>
                <input type="number"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="price"
                    placeholder="Product Price"
                    value={pPrice}
                    onChange={priceInputHandler}
                />
            </div>

            <div className="form-group">
                <label for="description">Product Description</label>
                <input type="text"
                    className="form-control"
                    id="description"
                    placeholder="Product Description"
                    value={pDescription}
                    onChange={descInputHandler}
                />
            </div>

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="isAvailable"
                    onChange={availablityInputHandler}
                    checked={pAvailable}
                />
                <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label for="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image"
                    onChange={imageInputHandler}
                    value={pImageUrl}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    )
}

export default ProductForm