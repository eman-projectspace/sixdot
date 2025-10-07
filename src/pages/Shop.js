import { useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";

const products = [
  { id: 1, name: "Classic Brown Leather", price: "3500", category: "Men", image: "/men-shoe.jpg" },
  { id: 2, name: "Urban Street Sneaker", price: "2800", category: "Men", image: "/shoe.jpg" },
  { id: 3, name: "Desert Tan Boot", price: "4100", category: "Women", image: "/heels.jpg" },
  { id: 4, name: "Midnight Runner", price: "2310", category: "Baby", image: "/baby show.jpg" },
];


export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 pt-28 pb-16">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Collection
        </motion.h1>


        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="flex justify-center gap-4 mb-8">
          <a href="/menshoe" className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Men Collection
          </a>
          <a href="/womenshoe" className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Women Collection
          </a>
          <a href="/babyshoe" className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Baby Collection
          </a>
        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5 text-center">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 font-medium">PKR {product.price}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
