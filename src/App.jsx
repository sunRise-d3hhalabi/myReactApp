import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Gallery from "./Gallery";
import Filter from "./components/Filter";
import Products from "./components/Products";

const products = [
  { id: 1, title: "Smartphone", price: 699, image: "path/to/smartphone.jpg" },
  { id: 2, title: "Laptop", price: 1299, image: "path/to/laptop.jpg" },
  { id: 3, title: "Headphones", price: 199, image: "path/to/headphones.jpg" },
  { id: 4, title: "Camera", price: 499, image: "path/to/camera.jpg" },
];

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (filterType) => {
    if (filterType === "under500") {
      setFilteredProducts(products.filter((product) => product.price < 500));
    } else if (filterType === "allProducts") {
      setFilteredProducts(products);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow flex bg-gray-100">
        <Filter onFilter={handleFilter} />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
