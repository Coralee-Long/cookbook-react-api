import React from "react";
import styled from "styled-components";

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

const ToolbarRight = styled.div`
  color: #faf9f9;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <div>
      <Toolbar>
        <ToolbarLeft>Logo</ToolbarLeft>
        <ToolbarRight>Search Field</ToolbarRight>
      </Toolbar>
    </div>
  );
};

export default Header;
