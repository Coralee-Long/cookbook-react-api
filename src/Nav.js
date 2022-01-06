import HeaderNoSearch from "./components/HeaderNoSearch";
import Header from "./components/Header";

const Nav = () => {
  return (
    <div>
      {window.location.pathname == "/" ? <HeaderNoSearch /> : <Header />}
    </div>
  );
};

export default Nav;
