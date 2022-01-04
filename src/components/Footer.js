import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 12vh;
  background-color: rgb(21, 27, 35);
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
`;

const FooterContent = styled.div`
  color: #faf9f9;
  font-size: 2rem;
`;

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterContent>Footer Content goes here...</FooterContent>
      </FooterContainer>
    </div>
  );
};

export default Footer;
