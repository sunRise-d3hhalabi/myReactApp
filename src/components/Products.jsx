import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import axios from "axios";

export default function Products(params) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log("call from useEffect");
    async function fetchProducts() {
      const response = await axios.get("https://fakestoreapi.com/products");
      //   console.log(response);
      setProducts(response.data);
    }

    fetchProducts();
  }, []);

  return (
    <section className="grow p-4">
      <ProductGrid products={products} />
    </section>
  );
}
