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
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow flex items-center justify-center bg-gray-100">
        {/* <h1 className="text-3xl font-bold text-center text-blue-600">
          Welcome to TrendyMart!
        </h1> */}
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
