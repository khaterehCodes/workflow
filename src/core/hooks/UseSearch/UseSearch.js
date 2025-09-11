import { useState, useMemo } from "react";

function useSearch(items, keyExtractor) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (!query) return items;
    return items.filter((item) => {
      const value = keyExtractor(item);
      return value.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query, keyExtractor]);

  return { query, setQuery, filteredItems };
}

export default useSearch;
