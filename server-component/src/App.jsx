
// import staticImage from "./assets/product/Fjallraven.jpg"

import { getImageUrl } from "./utils/image-util";
import {getProducts} from "./data/product";

function App() {
  const products = getProducts();
  return (
    <>
      {/* <img src={staticImage} alt="static image"/> */}
      <ul>
        {
          products.map((product)=>(
            <li key={product.id}>
              <img src={getImageUrl(product.cover)} alt={product.cover} />
              <p>{product.category}</p>
              <p>{product.title}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
