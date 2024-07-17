import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
const Products = () => {
    const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get("api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error); // Set error state for rendering
      } finally {
        setIsLoading(false); // Set loading state to false after fetching (success or failure)
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-evenly w-[90%] h-full gap-4">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/product/${product._id}`}
            className="md:w-1/3 w-[95%]"
          >
            <div className="w-full py-4">
              <p>{product.name}</p>
              <p className="font-light">₹{product.price}.00</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
