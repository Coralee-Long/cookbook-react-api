import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodySection from "./components/BodySection";
import HomePage from "./components/pages/HomePage";
import { client } from "./Client";
import SearchResults from "./components/SearchResults";
import AppRouter from "./AppRouter";
import Australia from "./components/pages/Australia";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchContentful();
  }, [query]);

  const fetchContentful = () => {
    client.getEntries().then((response) => setRecipes(response.items));
  };
  console.log(recipes);
  console.log(query);
  return (
    <div className="App">
      <AppRouter recipes={recipes} query={query} setQuery={setQuery} />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for an ingredient"
      ></input>
    </div>
  );
};

export default App;
