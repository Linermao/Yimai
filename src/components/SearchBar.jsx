import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
      <input
        type="text"
        placeholder="搜索..."
        className="outline-none px-2 text-gray-700"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="text-gray-500 hover:text-blue-500 transition">
        🔍
      </button>
    </div>
  );
}

export default SearchBar;
