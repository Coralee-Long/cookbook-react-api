import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Toolbar = styled.div`
  height: 6vh;
  background-color: rgb(21, 27, 35);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
`;

const ToolbarLeft = styled.div`
  color: #faf9f9;
  font-size: 2rem;
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
  /* padding-left: 2rem;
  padding-right: 20rem; */
`;

const ToolbarRight = styled.div`
  color: #faf9f9;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <div>
      <Toolbar>
        <ToolbarLeft>
          <Link to="/" style={{ color: "#faf9f9" }}>
            Logo
          </Link>
        </ToolbarLeft>
        <ToolbarMiddle>
          <Nav>
            <Link to="/australia" style={{ color: "#faf9f9" }}>
              Australia
            </Link>
            <Link to="/pakistan" style={{ color: "#faf9f9" }}>
              Pakistan
            </Link>
            <Link to="/southafrica" style={{ color: "#faf9f9" }}>
              South Africa
            </Link>
          </Nav>
        </ToolbarMiddle>
        <ToolbarRight>Search Field</ToolbarRight>
      </Toolbar>
    </div>
  );
};

export default Header;
