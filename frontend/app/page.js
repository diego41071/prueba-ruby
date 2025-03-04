"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const budget = 150; // Presupuesto máximo

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
      setBestProducts(findBestCombination(res.data, budget));
    });

    axios.get("http://localhost:3000/cart").then((res) => {
      setCart(res.data);
    });
  }, []);

  const addToCart = (id) => {
    axios.post("http://localhost:3000/cart", { id }).then((res) => {
      setCart(res.data.cart);
    });
  };

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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Tienda Online 🛒
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product.id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 text-center text-black">
        🛒 Carrito
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        {cart.length > 0 ? (
          <ul>
            {cart.map((product, index) => (
              <li key={index} className="text-gray-700">
                {product.name} - <strong>${product.price}</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">El carrito está vacío</p>
        )}
      </div>

      <h2 className="text-2xl font-semibold mt-8 text-center text-black">
        🏆 Mejor combinación (Presupuesto: ${budget})
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        {bestProducts.length > 0 ? (
          <ul>
            {bestProducts.map((product) => (
              <li key={product.id} className="text-gray-700">
                {product.name} - <strong>${product.price}</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No hay productos dentro del presupuesto
          </p>
        )}
      </div>
    </div>
  );
}
