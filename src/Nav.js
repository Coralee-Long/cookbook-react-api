import HeaderNoSearch from "./components/HeaderNoSearch";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      {/* {location.pathname === "/" || location.pathname == `/recipe/*` ? (
        <HeaderNoSearch />
      ) : ( */}
      <Header />
      {/* )} */}
    </div>
  );
};

export default Nav;
