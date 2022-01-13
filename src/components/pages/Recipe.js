import React, { useState, useEffect } from "react";
import BodySection from "../BodySection";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
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

  row-gap: 5px;
  column-gap: 10px;
`;

const RecipeCardLG = styled.div`
  /* border: 1px solid rgba(238, 238, 238, 0.9); */
  width: 100%;
  height: 100%;
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
  padding: 2rem 3.5rem;
`;

const RecipeTitleContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;

const RecipeItemsRow = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(23, 23, 23, 0.2);
`;

const ListItemR = styled.li`
  color: rgba(23, 23, 23, 0.8);
  padding: 0 2rem;
`;

// const NutrientsR = styled.ul`
//   display: flex;
//   flex-direction: row;
//   /* justify-content: space-between; */
//   list-style-type: none;
// `;

const RecipeInfoContainer = styled.div`
  /* border: 1px solid purple; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RecipeIngredients = styled.div`
  /* border: 1px solid green; */
  height: 98%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 3rem;
`;

const RecipeInstructions = styled.div`
  /* border: 1px solid green; */
  height: 98%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 1rem 0 1rem;
`;

const IngrItems = styled.li`
  color: rgba(23, 23, 23, 0.8);
  border-bottom: 1px solid rgba(23, 23, 23, 0.2);
  padding: 1rem 0;
`;

const IngrList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0px !important;
`;

const InstrItems = styled.li`
  color: rgba(23, 23, 23, 0.8);
  border-bottom: 1px solid rgba(23, 23, 23, 0.2);
  padding: 1rem 0;
`;

const InstrList = styled.ul`
  list-style-type: none;
`;

const NutrList = styled.ul`
  width: 80%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline-start: 0px;
`;

const NutrItems = styled.li`
  color: rgba(23, 23, 23, 0.8);
  padding: 0rem 2rem;
  text-align: center;
`;

// const Input = styled.input`
//   padding: 10px;
//   margin: 10px;
// `;

const Recipe = ({ recipes, setRecipe }) => {
  const { countryName, recipeName } = useParams();

  // const recipeName = useLocation();
  // console.log(recipeName); // "/australia/RecipeName"
  // const updatedRecipeName = recipeName.pathname.slice(2);
  // console.log(updatedRecipeName);
  return (
    <>
      <BodySection>
        <RecipeContainer>
          {recipes &&
            recipes
              .filter((recipe) => recipe.fields.title === recipeName)
              .map((filteredRecipe) => (
                <RecipeCardLG>
                  <RecipeMain>
                    <RecipeTitleContainer>
                      <TitleM dark>{filteredRecipe.fields.title}</TitleM>
                      <TextMain dark style={{ textAlign: "center" }}>
                        {filteredRecipe.fields.description}
                      </TextMain>
                      <TextMain dark>
                        <em>Serves {filteredRecipe.fields.serves}</em>
                      </TextMain>
                    </RecipeTitleContainer>
                    <RecipeItemsRow>
                      <NutrList>
                        {filteredRecipe.fields.nutrition
                          .slice(0, 4)
                          .map((nutrient) => {
                            return (
                              <>
                                <NutrItems>
                                  <TextMain dark>{nutrient.label} </TextMain>
                                  {Math.round(
                                    nutrient.total /
                                      filteredRecipe.fields.serves
                                  )}
                                  {nutrient.unit}
                                </NutrItems>
                              </>
                            );
                          })}
                      </NutrList>
                    </RecipeItemsRow>
                    <RecipeInfoContainer>
                      <RecipeIngredients>
                        <TitleXS dark style={{ textAlign: "left" }}>
                          Ingredients
                        </TitleXS>
                        <TextSecondary dark style={{ textAlign: "left" }}>
                          <IngrList>
                            {filteredRecipe.fields.ingredients.map(
                              (ingredient) => {
                                return (
                                  <>
                                    <IngrItems>
                                      <TextSecondary dark>
                                        {ingredient}
                                      </TextSecondary>
                                    </IngrItems>
                                  </>
                                );
                              }
                            )}
                          </IngrList>
                        </TextSecondary>
                      </RecipeIngredients>
                      <RecipeInstructions>
                        <TitleXS dark style={{ textAlign: "left" }}>
                          Instructions
                        </TitleXS>
                        <TextSecondary dark style={{ textAlign: "left" }}>
                          <InstrList>
                            {filteredRecipe.fields.method.map((step) => {
                              return (
                                <>
                                  <InstrItems>
                                    <TextSecondary dark>{step}</TextSecondary>
                                  </InstrItems>
                                </>
                              );
                            })}
                          </InstrList>
                        </TextSecondary>
                      </RecipeInstructions>
                    </RecipeInfoContainer>
                  </RecipeMain>
                  <RecipeImgLG
                    style={{
                      backgroundImage: `url("${filteredRecipe.fields.url}")`,
                    }}
                  ></RecipeImgLG>
                </RecipeCardLG>
              ))}
        </RecipeContainer>
      </BodySection>
    </>
  );
};

export default Recipe;
