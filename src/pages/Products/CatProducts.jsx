/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CatProducts() {
  const { id } = useParams();
  const [products, setProducts] = useState([{}]);
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/category/${id}`
      );
      console.log(data);
      console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h2>hello</h2>
      {products.map((prod) => {
        return (
          <div className="products" key={prod.id}>
            <h2>{prod.name}</h2>
            <p>{prod.description}</p>
          </div>
        );
      })}
    </>
  );
}
