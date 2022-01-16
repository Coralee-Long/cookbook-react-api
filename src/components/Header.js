import React from "react";
import styled from "styled-components";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { TextMain } from "./Styles";
import { MdOutlineFoodBank } from "react-icons/md";

const Toolbar = styled.div`
  height: 8vh;
  background-color: rgb(21, 27, 35);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
`;

const ToolbarLeft = styled.div`
  color: #faf9f9;
  font-size: 3.5rem;
  text-align: center;
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.07);
    color: white;
  }
`;
const ToolbarMiddle = styled.div`
  color: #faf9f9;
  font-size: 1rem;
  width: 80%;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
`;

const ToolbarRight = styled.div`
  color: #faf9f9;
  font-size: 1.5rem;
`;

const Input = styled.input`
  height: 30px;
  width: 200px;
  border-radius: 5px;
  border: none;
  background-color: rgba(238, 238, 238, 0.8);
  font-size: 1.2rem;
  padding-left: 15px;
  &:focus {
    outline: 2px solid rgba(255, 183, 3, 1);
  }
`;

const Header = ({
  query,
  setQuery,
  isSearch,
  setIsSearch,
  country,
  setCountry,
}) => {
  const location = useLocation();
  const { countryName } = useParams();

  const queryChangeHandler = (e) => {
    if (e.target.value === "") {
      setQuery(e.target.value);
      setIsSearch(false);
    } else {
      setQuery(e.target.value);
      setIsSearch(true);
    }
  };

  const ausHandler = () => {
    setCountry("australia");
  };

  const pakHandler = () => {
    setCountry("pakistan");
  };

  const saHandler = () => {
    setCountry("southafrica");
  };

  console.log(country);
  return (
    <div>
      <Toolbar>
        <ToolbarLeft>
          <NavLink
            className="navItem"
            to="/"
            style={({ isActive }) => ({
              color: isActive
                ? "rgba(255, 183, 3, 1)"
                : "rgba(238, 238, 238, 0.9)",
            })}
          >
            <MdOutlineFoodBank value={{ size: "3.5em" }} />
            <TextMain>Food.Me</TextMain>
          </NavLink>
        </ToolbarLeft>
        <ToolbarMiddle>
          <Nav>
            <NavLink
              className="navItem"
              to="/australia"
              onClick={ausHandler}
              style={({ isActive }) => ({
                color: isActive
                  ? "rgba(255, 183, 3, 1)"
                  : "rgba(238, 238, 238, 0.9)",
              })}
            >
              Australia
            </NavLink>
            <NavLink
              className="navItem"
              to="/pakistan"
              onClick={pakHandler}
              style={({ isActive }) => ({
                color: isActive
                  ? "rgba(255, 183, 3, 1)"
                  : "rgba(238, 238, 238, 0.9)",
              })}
            >
              Pakistan
            </NavLink>
            <NavLink
              className="navItem"
              to="/southafrica"
              onClick={saHandler}
              style={({ isActive }) => ({
                color: isActive
                  ? "rgba(255, 183, 3, 1)"
                  : "rgba(238, 238, 238, 0.9)",
              })}
            >
              South Africa
            </NavLink>
          </Nav>
        </ToolbarMiddle>
        {location.pathname === "/australia" ||
        location.pathname === "/pakistan" ||
        location.pathname === "/southafrica" ? (
          <ToolbarRight>
            <Input
              value={query}
              onChange={queryChangeHandler}
              type="text"
              placeholder="Search..."
            ></Input>
          </ToolbarRight>
        ) : (
          ""
        )}
      </Toolbar>
    </div>
  );
};

export default Header;
