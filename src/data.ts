import { Product } from "./types";
import Pepper from "./img/pepper.png";
import Pesto from "./img/pesto.png";
import Salsa from "./img/salsa.png";

export const products: Product[] = [
    {
        name: 'Carolina reapers',
        description: 'This is a sample product for our demo store. featuring Carolina reapers',
        price: 5.99,
        imageURL: Pepper,
        visible: false,
      },
      {
        name: 'Fatali Salsa',
        description: 'This is a sample product for our demo store. featuring Fatali Salsa',
        price: 9.99,
        imageURL: Salsa,
        visible: false,
      },
      {
        name: 'Pesto',
        description: 'This is a sample product for our demo store. featuring Pesto',
        price: 7.99,
        imageURL: Pesto,
        visible: false,
      }
];
