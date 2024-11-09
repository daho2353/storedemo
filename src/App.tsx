import './App.css';
import ProductCard from "./ProductCard";
import { products } from './data';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState<string>('');

  const SearchProduct = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setSearch(event.target.value.toLowerCase());
  }
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search)
  );

  return(
    <div className='store-page'>
      <p>Search for item: <input onChange={SearchProduct} /></p>
      <p>{search}</p>
      {filteredProducts.map(product => (
        <ProductCard product={product} key={product.name} />
      ))}
    </div>
  );
}

export default App
