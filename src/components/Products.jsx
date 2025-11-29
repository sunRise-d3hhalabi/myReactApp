import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import axios from "axios";

export default function Products(params) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("call from useEffect");
    async function fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        //   console.log(response);
        setProducts(response.data);
      } catch (error) {
        alert("Error fetching products!");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    <div>Loading products ...</div>;
  }

  return (
    <section className="grow p-4">
      <ProductGrid products={products} />
    </section>
  );
}
