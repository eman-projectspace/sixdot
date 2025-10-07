import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import WomenShoe from "./category/WomenShoe";
import Babyshoe from "./category/Babyshoe";
import Menshoe from "./category/Menshoe.js";



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/womenshoe" element={<WomenShoe />} />
            <Route path="/babyshoe" element={<Babyshoe />} />
            <Route path="/menshoe" element={<Menshoe />} />
            <Route path="/product/:id" element={<ProductDetails />} />

          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
