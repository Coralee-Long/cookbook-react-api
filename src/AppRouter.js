import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import Country from "./components/Country";
import Recipe from "./components/pages/Recipe";

const AppRouter = ({
  query,
  setQuery,
  recipes,
  isSearch,
  setIsSearch,
  country,
  setCountry,
}) => {
  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        country={country}
        setCountry={setCountry}
      />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route
          exact
          path="/:countryName"
          element={
            <Country
              recipes={recipes}
              query={query}
              setQuery={setQuery}
              isSearch={isSearch}
              setIsSearch={setIsSearch}
              country={country}
              setCountry={setCountry}
            />
          }
        />
        <Route
          exact
          path="/:countryName/:recipeName"
          element={
            <Recipe recipes={recipes} query={query} setQuery={setQuery} />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRouter;
