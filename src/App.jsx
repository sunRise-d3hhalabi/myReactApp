import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Gallery from "./Gallery";
import Filter from "./components/Filter";
import Products from "./components/Products";

function App() {
  const handleFilter = (filterType) => {
    // if (filterType === "under500") {
    //   setFilteredProducts(products.filter((product) => product.price < 500));
    // } else if (filterType === "allProducts") {
    //   setFilteredProducts(products);
    // }
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
