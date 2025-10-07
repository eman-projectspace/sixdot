import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Classic Brown Leather",
    price: "$120",
    image: "/men-shoe.jpg",
  },
  {
    id: 2,
    name: "Urban Street Sneaker",
    price: "$95",
    image: "/shoe.jpg",
  },
  {
    id: 3,
    name: "Desert Tan Boot",
    price: "$150",
    image: "/heels.jpg",
  },
  {
    id: 4,
    name: "Midnight Runner",
    price: "$110",
    image: "/baby show.jpg",
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f1a17] to-[#3b2f2f] text-white pt-28 pb-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#d2b48c]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Collection
        </motion.h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-[#2b2320] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
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
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-[#d2b48c] font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
