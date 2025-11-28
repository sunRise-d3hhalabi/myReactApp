import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Gallery from "./Gallery";

const products = [
  { id: 1, title: "Smartphone", price: 699, image: "path/to/smartphone.jpg" },
  { id: 2, title: "Laptop", price: 1299, image: "path/to/laptop.jpg" },
  { id: 3, title: "Headphones", price: 199, image: "path/to/headphones.jpg" },
  { id: 4, title: "Camera", price: 499, image: "path/to/camera.jpg" },
];

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const showFilteredProducts = () => {
    setFilteredProducts(products.filter((product) => product.price < 500));
  };

  const showAllProducts = () => {
    setFilteredProducts(products);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow flex bg-gray-100">
        <aside className="w-1/4 bg-white p-4 pb-4">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <button
            className="block w-full px-4 py-2 my-2 text-white rounded-sm bg-blue-500"
            onClick={showFilteredProducts}
          >
            Under $500
          </button>
          <button
            className="block w-full px-4 py-2 my-2 text-white rounded-sm bg-gray-500"
            onClick={showAllProducts}
          >
            Show all products
          </button>
        </aside>
        <section className="grow p-4">
          <ProductGrid products={filteredProducts} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
