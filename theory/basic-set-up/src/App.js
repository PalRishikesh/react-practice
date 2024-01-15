import { useState } from "react";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import ProductList from "./Components/ProductList/ProductList";
import "./app.css"
import FilterProduct from "./Components/FilterProduct/FilterProduct";
const products = [
    {
        pID: 1,
        pName: 'Fresh Milk',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: 'images/fresh-milk.png',
        price: 12
    },
    {
        pID: 2,
        pName: 'Cottage Cheese',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/cottage-cheese.png",
        price: 10
    }
];

function App() {
    // const [newProduct, setNewProduct] = useState('');
    const [newProductList, setNewProductList] = useState(products);
    function getCreateProductDetail(product) {
        // setNewProduct(product);
        product.pID = newProductList.length + 1;
        setNewProductList([product, ...newProductList])
    }
    let [filterTextValue, setFilterTextValue] = useState('all');
    let newProductListFilter = newProductList.filter((product)=>{
        if(filterTextValue === 'available'){
            return product.isAvailable === true;
        }
        else if(filterTextValue === 'unavailable'){
            return product.isAvailable === false;
        }
        else{
            return product;
        }
    });
    function onSelectedValueChangeFn(filterValue){
        setFilterTextValue(filterValue);
    }

    return (
        <div>
            {/* Taking value from child and passing to getCreateProductDetail function (Child to parent flow) */}
            <CreateProduct createProductInAppAttibute={getCreateProductDetail} />
            {/* Passing the value to child with attribute (Parent to child) */}
            {/* <ProductList newProductAttibute = {newProduct}/> */}
            <FilterProduct selectAttributeContent = {onSelectedValueChangeFn}/>
            <ProductList newProductList={newProductListFilter} />
        </div>
    );
}
export default App;