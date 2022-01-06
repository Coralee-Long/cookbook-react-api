import React, { useState } from "react";
import BodySection from "./BodySection";
import styled from "styled-components";
import {
  TitleXL,
  TitleL,
  TitleM,
  TitleS,
  TitleXS,
  TextMain,
  TextSecondary,
} from "../components/Styles";

const CountryTitleW = styled.div`
  height: 12%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecipesW = styled.div`
  height: 88%;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 0 2rem 0;
  row-gap: 5px;
  column-gap: 10px;
`;

const RecipeCard = styled.div`
  width: 30%;
  height: 45%;
  box-shadow: 10px 10px 15px rgba(23, 23, 23, 0.9);
`;

const RecipeImg = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Nutrients = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 10px;
`;

const Description = styled.p`
  display: none;
  padding-top: 2rem;
`;

const RecipeInfo = styled.div`
  width: 100%;
  height: 30%;
  bottom: 30% !important;
  /* height: 60%;
  bottom: 60% !important; */
  position: relative;
  background-color: rgba(238, 238, 238, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  padding: 2rem;

  &:hover {
    height: 60%;
    bottom: 60% !important;
  }
  &:hover ${Nutrients} {
    display: none;
  }

  &:hover ${Description} {
    display: inline;
  }
`;

const ExtraInfo = styled.div`
  height: auto;
  width: 100%;
  align-items: center;
  transition-duration: 0.5s;
`;

const ListItem = styled.li`
  color: rgba(23, 23, 23, 0.8);
  padding: 0 1rem;
  text-align: left;
`;

const Country = ({ recipes, setRecipe }) => {
  //const [country, setCountry] = useState('')
  return (
    <>
      <BodySection>
        <CountryTitleW>
          <TitleL>Australia</TitleL>
        </CountryTitleW>
        <RecipesW>
          {recipes
            .filter((recipe) => recipe.fields.country === "Australia")
            .map((filteredCountry) => (
              <RecipeCard>
                <RecipeImg />
                <RecipeInfo>
                  <TitleS dark>{filteredCountry.fields.title}</TitleS>
                  <ExtraInfo>
                    <Nutrients>
                      <ListItem>Protein</ListItem>
                      <ListItem>Fat</ListItem>
                      <ListItem>Carbs</ListItem>
                      <ListItem>Fiber</ListItem>
                    </Nutrients>
                  </ExtraInfo>
                  <Description>
                    Recipe Description... Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Expedita, fugiat aspernatur asperiores,
                    quod repellat officiis maxime quidem obcaecati sit in
                    assumenda nesciunt omnis a ad ducimus doloremque debitis
                    quasi voluptate?
                  </Description>
                </RecipeInfo>
              </RecipeCard>
            ))}
        </RecipesW>
      </BodySection>
    </>
  );
};

export default Country;
