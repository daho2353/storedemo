import React from "react";
import { Product } from "./types"
// import {useStripe } from '@stripe/react-stripe-js'; // need to install stripe and import useStripe

interface Props {
    product: Product;
    addToCart: () => void;
}

const ProductCard: React.FC<Props> = ({ product ,addToCart })  => (
/*    const stripe = useStripe();

    const handleCheckout = async () => {
      if (!stripe) return;
  
      // Call your backend endpoint to create a checkout session
      const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id }),
      });
  
      const session = await response.json();
      stripe.redirectToCheckout({ sessionId: session.id });
    };  this is how you would add credit card stuff*/ 

    <div className="product-card">
        <img src={product.imageURL} className="product-image" />
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <button onClick={addToCart}> Add to Cart </button>
    </div>
)

export default ProductCard;