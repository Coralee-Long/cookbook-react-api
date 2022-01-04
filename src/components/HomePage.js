import { Description } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import BodySection from "./BodySection";

const BigTitleContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;
`;

const CountriesContainer = styled.div`
  background-color: rgba(23, 23, 23, 0.5);
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const MainTitle = styled.h1`
  color: rgba(238, 238, 238, 0.8);
  font-size: 5rem;
`;

const TextTitle = styled.p`
  color: rgba(238, 238, 238, 0.9);
  font-size: 1rem;
`;

const CountryCard = styled.div`
  border: 2px solid rgba(238, 238, 238, 0.8);
  border-radius: 3px;
  height: 65%;
  width: 26%;
  margin: auto 1rem;
`;

const CardBottom = styled.div`
  background-color: rgba(238, 238, 238, 0.8);
  height: 25%;
`;

const CardImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1520642197828-b053b701d590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2872&q=80");
  height: 75%;
  width: auto;
  object-fit: fill;
`;

const HomePage = () => {
  return (
    <>
      <BodySection>
        <BigTitleContainer>
          <MainTitle>Title Placeholder</MainTitle>
          <TextTitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            consectetur rerum qui quaerat, corporis voluptatem eveniet nihil, ex
            cumque laboriosam facere! Dolore nulla magni ducimus ab in,
            asperiores sit dicta!
          </TextTitle>
        </BigTitleContainer>
        <CountriesContainer>
          <CountryCard>
            <CardImage />
            <CardBottom />
          </CountryCard>
          <CountryCard></CountryCard>
          <CountryCard></CountryCard>
        </CountriesContainer>
      </BodySection>
    </>
  );
};

export default HomePage;
