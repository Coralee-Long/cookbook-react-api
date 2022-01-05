import { Description } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { TitleXL } from "../Styles";
import BodySection from "../BodySection";
import { Link } from "react-router-dom";

const BigTitleContainer = styled.div`
  height: 50%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextTitle = styled.p`
  color: rgba(238, 238, 238, 0.9);
  font-size: 1rem;
`;

const CountriesContainer = styled.div`
  background-color: rgba(23, 23, 23, 0.5);
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const CountryCard = styled.div`
  height: 100%;
  width: 33.3%;
  overflow: hidden;
  box-shadow: none;
`;

const CardImage = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: auto;

  ${({ aus }) =>
    aus &&
    `
background-image: url("https://images.unsplash.com/photo-1514513255262-76c2200e709e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80");
`}

  ${({ pak }) =>
    pak &&
    `
background-image: url("https://images.unsplash.com/photo-1636260795041-440083f905cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80");
`}

 ${({ sa }) =>
    sa &&
    `
background-image: url("https://images.unsplash.com/photo-1575303093127-18b3c4ef8c41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2914&q=80");
`}
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
  background-color: rgba(23, 23, 23, 0.3);
  transition-duration: 0.5s;

  &:hover {
    background-color: rgba(23, 23, 23, 0.8);
  }
`;

export const CountryTitle = styled.h2`
  /* border: 1px solid #faf9f9; */
  width: 80%;
  margin: auto 10%;
  color: rgba(238, 238, 238, 0.9);
  font-size: 3rem;
  font-weight: 900;
  transition-duration: 0.5s;
  text-transform: uppercase;
  text-shadow: black 2px 0 10px;

  &:hover {
    color: #e07a5f;
  }
`;

const HomePage = () => {
  return (
    <>
      <BodySection>
        <BigTitleContainer>
          <TitleXL>Title Placeholder</TitleXL>
          <TextTitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            consectetur rerum qui quaerat, corporis voluptatem eveniet nihil, ex
            cumque laboriosam facere! Dolore nulla magni ducimus ab in,
            asperiores sit dicta!
          </TextTitle>
        </BigTitleContainer>

        <CountriesContainer>
          <CountryCard>
            <Link to="/australia">
              <CardImage aus>
                <TitleWrapper>
                  <CountryTitle>Australia</CountryTitle>
                </TitleWrapper>
              </CardImage>
            </Link>
          </CountryCard>

          <CountryCard>
            <Link to="/pakistan">
              <CardImage pak>
                <TitleWrapper>
                  <CountryTitle>Pakistan</CountryTitle>
                </TitleWrapper>
              </CardImage>
            </Link>
          </CountryCard>

          <CountryCard>
            <Link to="/southafrica">
              <CardImage sa>
                <TitleWrapper>
                  <CountryTitle>South Africa</CountryTitle>
                </TitleWrapper>
              </CardImage>
            </Link>
          </CountryCard>
        </CountriesContainer>
      </BodySection>
    </>
  );
};

export default HomePage;
