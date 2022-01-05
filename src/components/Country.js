import React from "react";
import BodySection from "./BodySection";
import styled from "styled-components";
import { TitleXL, TitleL, TitleM, TitleS, TitleXS } from "../components/Styles";

const CountryTitleW = styled.div`
  border: 1px solid red;
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecipesW = styled.div`
  height: 85%;
  width: 90%;
  border: 1px solid red;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  row-gap: 10px;
  column-gap: 10px;
`;

const RecipeCard = styled.div`
  border: 1px solid red;
  width: 30%;
  height: 45%;
`;

const RecipeImg = styled.div`
  height: 70%;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const RecipeInfo = styled.div`
  height: 30%;
  width: 100%;
  background-color: rgba(238, 238, 238, 1);
`;

const Country = () => {
  return (
    <>
      <BodySection>
        <CountryTitleW>
          <TitleL>Country Title</TitleL>
        </CountryTitleW>
        <RecipesW>
          <RecipeCard>
            <RecipeImg />
            <RecipeInfo />
          </RecipeCard>

          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </RecipesW>
      </BodySection>
    </>
  );
};

export default Country;
