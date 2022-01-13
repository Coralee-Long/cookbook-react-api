import { useState, useEffect } from "react";

const Search = ({ recipes }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for an ingredient"
      ></input>
    </div>
  );
};

export default Search;
