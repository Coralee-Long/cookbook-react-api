import { Description } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import BodySection from "../BodySection";
import { Link } from "react-router-dom";
import {
  TitleXL,
  TitleL,
  TitleM,
  TitleS,
  TitleXS,
  TextMain,
  TextSecondary,
} from "../Styles";

const BigTitleContainer = styled.div`
  height: 40%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextTitle = styled.p`
  color: rgba(238, 238, 238, 0.9);
  font-size: 1rem;
  text-align: center;
  text-shadow: black 2px 0 10px;
`;

const CountriesContainer = styled.div`
  /* background-color: rgba(23, 23, 23, 0.5); */
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 0 4rem 0;
`;

const CountryCard = styled.div`
  height: 80%;
  width: 30%;
  margin: 5rem 1rem;
  overflow: hidden;
  box-shadow: none;
  box-shadow: 10px 10px 5px rgba(23, 23, 23, 1);
  border-radius: 15px !important;
`;

const CardImage = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: auto;
  border-radius: 15px !important;

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
  background-color: rgba(238, 238, 238, 0.2);
  border-radius: 15px !important;
  transition-duration: 0.5s;

  &:hover {
    background-color: rgba(255, 183, 3, 0.3);
  }
`;

const TitleBox = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: column;
  margin: auto 10%;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
  background-color: rgba(23, 23, 23, 0.9);
  transition-duration: 0.5s;
  border-radius: 10px !important;

  &:hover {
    transform: scale(1.06);
    color: white;
  }
`;

export const CountryTitle = styled.h2`
  /* border: 1px solid #faf9f9; */
  text-align: center;
  color: rgba(238, 238, 238, 0.9);
  font-size: 28px;
  font-weight: 600;
  text-transform: uppercase;
  transition-duration: 0.5s;
  text-shadow: black 2px 0 10px;
  letter-spacing: 5px;
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const CountryP = styled.p`
  color: rgba(238, 238, 238, 1);
  font-size: 1rem;
  letter-spacing: 1px;
  padding-bottom: 12px;
`;

const HomePage = ({ country, setCountry }) => {
  return (
    <>
      <BodySection>
        <BigTitleContainer>
          <TitleXL>Title Placeholder</TitleXL>
          <TextTitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            consectetur rerum qui quaerat, corporis voluptatem eveniet nihil, ex
            cumque laboriosam facere! <br />
            Dolore nulla magni ducimus ab in, asperiores sit dicta! Lorem ipsum
            <br />
            <br />
            dolor sit amet consectetur, adipisicing elit. Deleniti consectetur
            rerum qui quaerat, corporis voluptatem eveniet nihil, ex cumque
            laboriosam facere! Dolore nulla magni ducimus ab in, asperiores sit
            dicta! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Deleniti consectetur rerum qui quaerat, corporis voluptatem eveniet
            nihil, ex cumque laboriosam facere! Dolore nulla magni ducimus ab
            in, asperiores sit dicta!
          </TextTitle>
        </BigTitleContainer>

        <CountriesContainer>
          <CountryCard>
            <Link to="/australia" onClick={() => setCountry("australia")}>
              <CardImage aus>
                <TitleWrapper>
                  <TitleBox>
                    <CountryTitle>Australia</CountryTitle>
                    <CountryP>THERE'S NOTHING LIKE AUSTRALIA</CountryP>
                  </TitleBox>
                </TitleWrapper>
              </CardImage>
            </Link>
          </CountryCard>

          <CountryCard>
            <Link to="/pakistan" onClick={() => setCountry("pakistan")}>
              <CardImage pak>
                <TitleWrapper>
                  <TitleBox>
                    <CountryTitle>Pakistan</CountryTitle>
                    <CountryP>IT'S BEAUTIFUL, IT'S PAKISTAN</CountryP>
                  </TitleBox>
                </TitleWrapper>
              </CardImage>
            </Link>
          </CountryCard>

          <CountryCard>
            <Link to="/southafrica" onClick={() => setCountry("southafrica")}>
              <CardImage sa>
                <TitleWrapper>
                  <TitleBox>
                    <CountryTitle>South Africa</CountryTitle>
                    <CountryP>INSPIRING NEW WAYS</CountryP>
                  </TitleBox>
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
