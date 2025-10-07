// src/components/SearchBar.jsx
export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search by name or category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md px-5 py-3 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-700 placeholder-gray-500 transition-all"
      />
    </div>
  );
}
