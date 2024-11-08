import './App.css';
import ProductCard from "./ProductCard";
import { products } from './data';


function App() {
  return(
    <div className='store-page'>
          {products.map(product => (
      <ProductCard product={product} />
    ))}
    </div>
  );
}

export default App
