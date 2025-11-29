import { Suspense, use } from "react";
// import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import axios from "axios";

const fetchProducts = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    alert("Error fetching products!");
    console.log(error);
  }
};
const productsPromise = fetchProducts();

export default function Products(params) {
  const products = use(productsPromise);

  return (
    <section className="grow p-4">
      <Suspense fallback={<div>Loading products ...</div>}>
        <ProductGrid products={products} />
      </Suspense>
    </section>
  );
}
