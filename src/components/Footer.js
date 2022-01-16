import React from "react";
import styled from "styled-components";
import { TitleS, TextSecondary } from "../components/Styles";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaVimeoSquare,
  FaInstagramSquare,
  FaRedditSquare,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Styles.css";

const FooterContainer = styled.div`
  height: 12vh;
  background-color: rgb(21, 27, 35);
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  bottom: -5px;
`;

const FooterContent = styled.div`
  color: #faf9f9;
  font-size: 2rem;
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
  width: 40%;
  border-radius: 10px !important;
`;

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterContent>
          <TitleS>Food.Me</TitleS>
          <Icons>
            <IconContext.Provider
              value={{
                size: "2.5rem",
                color: "rgba(238, 238, 238, 0.8)",
                className: "react-icons-footer",
              }}
            >
              <FaFacebookSquare />
              <FaYoutubeSquare />
              <FaVimeoSquare />
              <FaInstagramSquare />
              <FaRedditSquare />
            </IconContext.Provider>
          </Icons>
          <TextSecondary>© Some Developers 2022</TextSecondary>
        </FooterContent>
      </FooterContainer>
    </div>
  );
};

export default Footer;
