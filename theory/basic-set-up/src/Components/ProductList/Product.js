import ProductDetails from "./ProductDetails";
const Product = (props) => { 
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 ">
                        {props.name}
                    </div>
                    <div className="col-sm-2">
                        {props.desciption}
                    </div>
                    <ProductDetails
                    price = {props.price}
                    isAvailable = {props.isAvailable}
                    imageUrl = {props.imageUrl}
                    >
                        {/* We can pass value inside tag that will treated as children properites of props */}
                        <code>Rs.</code>
                    </ProductDetails>
                </div>
            </div>
        </>
    )
}
export default Product
