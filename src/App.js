import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodySection from "./components/BodySection";
import HomePage from "./components/HomePage";
import { client } from "./Client";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchContentful();
  }, []);

  const fetchContentful = () => {
    client.getEntries().then((response) => setRecipes(response.items));
  };

  console.log(recipes);

  return (
    <div className="App">
      <Header />
      {/* <SearchResults recipes={recipes} setRecipes={setRecipes} /> */}

      <BodySection>
        <HomePage />
      </BodySection>
      <Footer />
    </div>
  );
};

export default App;
