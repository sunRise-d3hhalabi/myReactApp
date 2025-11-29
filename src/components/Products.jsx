// import { Suspense, use } from "react";
// import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Filter from "./Filter";

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
    <main className="grow flex bg-gray-100">
      <Filter onFilter={() => {}} />
      <ProductGrid products={data} />
    </main>
  );
}
