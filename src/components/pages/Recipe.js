import React, { useState } from "react";
import BodySection from "../BodySection";
import styled from "styled-components";
import {
  TitleXL,
  TitleL,
  TitleM,
  TitleS,
  TitleXS,
  TextMain,
  TextSecondary,
} from "../Styles";

const RecipeContainer = styled.div`
  /* border: 1px solid yellow; */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 0 2rem 0;
  row-gap: 5px;
  column-gap: 10px;
`;

const RecipeCardLG = styled.div`
  /* border: 1px solid rgba(238, 238, 238, 0.9); */
  width: 85%;
  height: 85%;
  box-shadow: 20px 20px 25px rgba(23, 23, 23, 0.9);
  background-color: rgba(238, 238, 238, 0.9);
  display: flex;
  justify-content: space-between;
`;

const RecipeImgLG = styled.div`
  height: 100%;
  width: 30%;
  background-image: url("https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RecipeMain = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  padding: 2rem;
`;

const RecipeTitleContainer = styled.div`
  /* border: 1px solid red; */
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const RecipeItemsRow = styled.div`
  /* border: 1px solid red; */
  width: 80%;
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ListItemR = styled.li`
  color: rgba(23, 23, 23, 0.8);
  padding: 0 2rem;
`;

const NutrientsR = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 10px;
`;

const RecipeInfoContainer = styled.div`
  /* border: 1px solid purple; */
  height: 95%;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const RecipeIngredients = styled.div`
  /* border: 1px solid green; */
  height: 100%;
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

const RecipeInstructions = styled.div`
  /* border: 1px solid green; */
  height: 100%;
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

const Recipe = ({ recipes, setRecipe }) => {
  return (
    <>
      <BodySection>
        <RecipeContainer>
          <RecipeCardLG>
            <RecipeMain>
              <RecipeTitleContainer>
                <TitleM dark>Recipe Name</TitleM>
                <TextMain dark style={{ textAlign: "center" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, officia, aut vero illo esse quidem voluptate dicta
                  earum provident dolorum, similique reiciendis dolore sit quae
                  praesentium porro? Quibusdam, sint nulla.
                </TextMain>
              </RecipeTitleContainer>
              <RecipeItemsRow>
                <NutrientsR>
                  <ListItemR>Protein</ListItemR>
                  <ListItemR>Fat</ListItemR>
                  <ListItemR>Carbs</ListItemR>
                  <ListItemR>Fiber</ListItemR>
                  <ListItemR>etc</ListItemR>
                  <ListItemR>etc</ListItemR>
                </NutrientsR>
              </RecipeItemsRow>
              <RecipeInfoContainer>
                <RecipeIngredients>
                  <TitleXS dark style={{ textAlign: "left" }}>
                    Ingredients
                  </TitleXS>
                  <TextSecondary dark style={{ textAlign: "left" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam suscipit cupiditate facere, nisi asperiores illo ipsa
                    aliquid dolor at amet maxime ipsum doloribus officia nam.
                    Saepe provident earum harum cum!
                  </TextSecondary>
                </RecipeIngredients>
                <RecipeInstructions>
                  <TitleXS dark style={{ textAlign: "left" }}>
                    Instructions
                  </TitleXS>
                  <TextSecondary dark style={{ textAlign: "left" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam suscipit cupiditate facere, nisi asperiores illo ipsa
                    aliquid dolor at amet maxime ipsum doloribus officia nam.
                    Saepe provident earum harum cum!
                  </TextSecondary>
                </RecipeInstructions>
              </RecipeInfoContainer>
            </RecipeMain>
            <RecipeImgLG></RecipeImgLG>
          </RecipeCardLG>
        </RecipeContainer>
      </BodySection>
    </>
  );
};

export default Recipe;
