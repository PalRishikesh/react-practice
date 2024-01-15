import React, { useState } from "react";
import Button from "./Button";

function ProductDetails(props) {
    let [productCount, setProductCount ] = useState(0); 
    let inCrementProductCount=()=>{
        // setProductCount(productCount++);
        // If we do post increment or decremen will work as first we are assing old 
        // value and than updating so we have to click twice to get the value
        setProductCount(++productCount);
    }
    let deCrementProductCount=()=>{
        setProductCount(--productCount);
    }
    return (
        <>
            <div className="col-sm-2">
                <Button btnEventHandler = {deCrementProductCount} children="Minus">-</Button>
                <span>{productCount}</span>
                <Button btnEventHandler = {inCrementProductCount} children="Plus"></Button>
            </div>
        </>
    );
   
}
export default ProductDetails;