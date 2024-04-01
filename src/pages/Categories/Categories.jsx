/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function Categories() {
  const [products, setProducts] = useState(getCategories);

  const getCategories = async () => {
    const res = await fetch(
      `https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`
    );
    const data = await res.json();
    console.log(data);
    setProducts(data.categories);
  };

  useEffect(() => {
    console.log(`hello from category`);
  }, []);
  return (
    <>
      {products.map((prod) => {
        <h2>{prod.name}</h2>;
      })}
    </>
  );
}
