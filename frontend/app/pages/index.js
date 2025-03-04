import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const budget = 150; // Presupuesto máximo

  useEffect(() => {
    // Obtener productos de la API
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
      setBestProducts(findBestCombination(res.data, budget));
    });

    // Obtener carrito de la API
    axios.get("http://localhost:3000/cart").then((res) => {
      setCart(res.data);
    });
  }, []);

  const addToCart = (id) => {
    axios.post("http://localhost:3000/cart", { id }).then((res) => {
      setCart(res.data.cart);
    });
  };

  // Algoritmo de optimización (Mochila 0/1)
  const findBestCombination = (products, budget) => {
    let bestCombination = [];
    let bestValue = 0;

    const search = (
      index,
      currentCombination,
      currentValue,
      remainingBudget
    ) => {
      if (currentValue > bestValue) {
        bestValue = currentValue;
        bestCombination = [...currentCombination];
      }

      for (let i = index; i < products.length; i++) {
        if (products[i].price <= remainingBudget) {
          search(
            i + 1,
            [...currentCombination, products[i]],
            currentValue + products[i].price,
            remainingBudget - products[i].price
          );
        }
      }
    };

    search(0, [], 0, budget);
    return bestCombination;
  };

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product.id)}>Agregar</button>
          </li>
        ))}
      </ul>

      <h2>Carrito</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      <h2>Mejor combinación de productos (Presupuesto: ${budget})</h2>
      <ul>
        {bestProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
