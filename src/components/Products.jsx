// import { Suspense, use } from "react";
// import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default function Products(params) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const products = data;

  if (isLoading) {
    return <div>Loading products ...</div>;
  }

  if (error) {
    return <div>Error fetching products ...</div>;
  }

  return (
    <section className="grow p-4">
      <ProductGrid products={data} />
    </section>
  );
}
