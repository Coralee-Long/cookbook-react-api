import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import Australia from "./components/pages/Australia";
import Pakistan from "./components/pages/Pakistan";
import SouthAfrica from "./components/pages/SouthAfrica";

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="" element={<HomePage />} />
        <Route exact path="/pakistan" element={<Pakistan />} />
        <Route exact path="/southafrica" element={<SouthAfrica />} />
        <Route exact path="/australia" element={<Australia />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
