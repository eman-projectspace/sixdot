import { useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";

const womenShoes = [
  { id: 1, name: "Women's Classic Heel", price: "2130", image: "/heels.jpg" },
  { id: 2, name: "Women's Urban Sneaker", price: "4105", image: "/women-shoe.jpg" },
];

export default function Women() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products by search term
  const filteredProducts = womenShoes.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 pt-28 pb-16">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Women’s Collection
        </motion.h1>

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Category Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a href="/menshoe" className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Men
          </a>
          <a href="/womenshoe" className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Women
          </a>
          <a href="/babyshoe" className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Kids
          </a>
        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6">
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
