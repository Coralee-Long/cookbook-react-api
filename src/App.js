import { useState, useEffect } from "react";
import { client } from "./Client";

import AppRouter from "./AppRouter";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const fetchContentful = () => {
    client.getEntries().then((response) => setRecipes(response.items));
  };

  useEffect(() => {
    fetchContentful();
  }, [query]);

  return (
    <div className="App">
      <AppRouter
        recipes={recipes}
        query={query}
        setQuery={setQuery}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />
    </div>
  );
};

export default App;
