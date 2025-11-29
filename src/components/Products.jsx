// import { Suspense, use } from "react";
// import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Filter from "./Filter";
import { useState } from "react";

const fetchProducts = async ({ queryKey }) => {
  console.log(queryKey);
  const [key, filters] = queryKey;

  let url = "https://fakestoreapi.com/products";
  if (filters.category) {
    url += `/category/${filters.category}`;
  }

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default function Products(params) {
  const [filters, setFilters] = useState({
    category: "",
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ["products", filters],
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
      <Filter onFilter={setFilters} />
      <ProductGrid products={products} />
    </main>
  );
}
