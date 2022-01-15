import { useState, useEffect } from "react";
import { client } from "./Client";

import AppRouter from "./AppRouter";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [country, setCountry] = useState("");

  const queryURL = `https://cdn.contentful.com//spaces/9vpi9vn3xsf3/environments/master/entries?access_token=iJLJdTNrTyH-jqu43sCdZoqvlaA1WnUkdtBnp45eIGA&content_type=recipes&query=salt`;

  const fetchContentful = async () => {
    try {
      const data = await client
        .getEntries({
          content_type: "recipes",
          select: "fields",
          "fields.country": `${country}`,
          query: `${query}`,
        })
        .then((response) => setRecipes(response.items));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(recipes);
  // client.getEntries().then((response) => setRecipes(response.items));

  useEffect(() => {
    fetchContentful();
  }, [country, query]);

  return (
    <div className="App">
      <AppRouter
        recipes={recipes}
        query={query}
        setQuery={setQuery}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        country={country}
        setCountry={setCountry}
      />
    </div>
  );
};

export default App;
