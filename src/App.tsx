import './App.css';
import ProductCard from "./ProductCard";
import { products } from './data';
import { useState } from 'react';
import { Product } from './types';

function App() {
  const [search, setSearch] = useState<string>('');
  const [cart, setCart] = useState<Product[]>([]);

  const SearchProduct = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setSearch(event.target.value.toLowerCase());
  }
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search)
  );

  const addToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product]); //set state of cart to be all of the current items in the cart + the added product
  };

  return(
    <div className='store-page'>
      <p>Search for item: <input onChange={SearchProduct} /></p>
      <p>{search}</p>
      {filteredProducts.map(product => (
        <ProductCard product={product} key={product.name} addToCart={() => addToCart(product)} />
      ))}
      <div className="cart">
        { cart.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>

    </div>
  );
}

export default App
