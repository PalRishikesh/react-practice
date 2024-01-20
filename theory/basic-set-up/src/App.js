import { useEffect, useState } from "react";
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
        price: 12,
        stock:5
    },
    {
        pID: 2,
        pName: 'Cottage Cheese',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/cottage-cheese.png",
        price: 10,
        stock:9
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

    useEffect(()=>{
        let timeOutValue = setTimeout(()=>{
            console.log("Validateing from input");
            // Basically setting form is valid or not in the setFormInvalid state
            setFormInvalid(
                enteredEmail.include('@') && enteredPassword.trim() > 6
            )
        },500);
        // Above function is execute after user stop for 500 milisecond
        // This will not run for first time in useEffect run every time to clean setTimout 
        // function so that use have only one setTimeout at given time
        return ()=>{
            console.log("Clean up function executed");
            clearTimeout(timeOutValue);
        }
    },[enteredEmail,enteredPassword])

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