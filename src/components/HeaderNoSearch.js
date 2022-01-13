import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { TextMain } from "./Styles";
import { MdOutlineFoodBank } from "react-icons/md";

const Toolbar = styled.div`
  height: 6vh;
  background-color: rgb(21, 27, 35);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
`;

const ToolbarLeft = styled.div`
  color: #faf9f9;
  font-size: 3.5rem;
  text-align: center;
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

const HeaderNoSearch = () => {
  const location = useLocation();
  return (
    <div>
      <Toolbar>
        <ToolbarLeft>
          <NavLink
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
              to="/australia"
              style={({ isActive }) => ({
                color: isActive
                  ? "rgba(255, 183, 3, 1)"
                  : "rgba(238, 238, 238, 0.9)",
              })}
            >
              Australia
            </NavLink>
            <NavLink
              to="/pakistan"
              style={({ isActive }) => ({
                color: isActive
                  ? "rgba(255, 183, 3, 1)"
                  : "rgba(238, 238, 238, 0.9)",
              })}
            >
              Pakistan
            </NavLink>
            <NavLink
              to="/southafrica"
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
        <ToolbarRight></ToolbarRight>
      </Toolbar>
    </div>
  );
};

export default HeaderNoSearch;
