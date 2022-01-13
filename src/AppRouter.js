import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import Country from "./components/Country";
import Recipe from "./components/pages/Recipe";

const AppRouter = ({ recipes, query, setQuery }) => {
  return (
    <div>
      <Header query={query} setQuery={setQuery} />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/:countryName"
          element={<Country recipes={recipes} query={query} />}
        />
        <Route
          exact
          path="/:countryName/:recipeName"
          element={<Recipe recipes={recipes} />}
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRouter;
