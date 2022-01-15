import React, { useState, useEffect } from "react";
import BodySection from "./BodySection";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Styles.css";
import { useParams, useLocation } from "react-router";
import {
  TitleXL,
  TitleL,
  TitleM,
  TitleSS,
  TitleXS,
  TextMain,
  TextSecondary,
} from "../components/Styles";
import { IconContext } from "react-icons";
import { GiFlour, GiMeat, GiSquareBottle } from "react-icons/gi";

const Country = ({
  recipes,
  query,
  isSearch,
  isSetSearch,
  country,
  setCountry,
}) => {
  const location = useLocation(); // "/australia"
  const [isIngredient, setIsIngredient] = useState(false);

  const updatedLocationName = location.pathname.slice(1); // "australia"
  let locationUpperCase = // "Australia"
    updatedLocationName.charAt(0).toUpperCase() + updatedLocationName.slice(1);
  if (updatedLocationName === "southafrica") {
    locationUpperCase = "South Africa";
  }
  console.log(recipes);

  return (
    <>
      <BodySection>
        <CountryTitleW>
          <TitleL>{locationUpperCase}</TitleL>
        </CountryTitleW>
        {!isSearch ? (
          <RecipesW>
            {recipes.map((filteredCountry) => (
              <RecipeCard key={filteredCountry.fields.id}>
                <Link to={`/${country}/${filteredCountry.fields.title}`}>
                  <RecipeImg
                    style={{
                      backgroundImage: `url("${filteredCountry.fields.url}")`,
                    }}
                  />
                  <RecipeInfo>
                    <TitleSS dark style={{ textAlign: "center" }}>
                      {filteredCountry.fields.title}
                    </TitleSS>

                    <ExtraInfo>
                      <IconContext.Provider
                        value={{
                          size: "2.5rem",
                          color: "rgba(23, 23, 23, 0.8)",
                          className: "react-icons",
                        }}
                      >
                        <IconsContainer>
                          {filteredCountry.fields.nutrition
                            .slice(0, 3)
                            .map((nutri, index) => (
                              <ListItem key={index}>
                                {nutri.label === "Fat" ? (
                                  <GiSquareBottle />
                                ) : (
                                  ""
                                )}
                                {nutri.label === "Carbs" ? <GiFlour /> : ""}
                                {nutri.label === "Protein" ? <GiMeat /> : ""}

                                {Math.round(
                                  nutri.total / filteredCountry.fields.serves
                                )}
                                {nutri.unit}
                                {"  "}
                                {nutri.label}
                              </ListItem>
                            ))}
                        </IconsContainer>
                      </IconContext.Provider>
                    </ExtraInfo>
                    <Description>
                      {filteredCountry.fields.description}
                    </Description>
                  </RecipeInfo>
                </Link>
              </RecipeCard>
            ))}
          </RecipesW>
        ) : (
          <RecipesW>
            {recipes.map((filteredCountry) => (
              <RecipeCard key={filteredCountry.fields.id}>
                <Link to={`/${country}/${filteredCountry.fields.title}`}>
                  <RecipeImg
                    style={{
                      backgroundImage: `url("${filteredCountry.fields.url}")`,
                    }}
                  />
                  <RecipeInfo>
                    <TitleSS dark style={{ textAlign: "center" }}>
                      {filteredCountry.fields.title}
                    </TitleSS>

                    <ExtraInfo>
                      <IconContext.Provider
                        value={{
                          size: "2.5rem",
                          color: "rgba(23, 23, 23, 0.8)",
                          className: "react-icons",
                        }}
                      >
                        <IconsContainer>
                          {filteredCountry.fields.nutrition
                            .slice(0, 3)
                            .map((nutri, index) => (
                              <ListItem key={index}>
                                {nutri.label === "Fat" ? (
                                  <GiSquareBottle />
                                ) : (
                                  ""
                                )}
                                {nutri.label === "Carbs" ? <GiFlour /> : ""}
                                {nutri.label === "Protein" ? <GiMeat /> : ""}

                                {Math.round(
                                  nutri.total / filteredCountry.fields.serves
                                )}
                                {nutri.unit}
                                {"  "}
                                {nutri.label}
                              </ListItem>
                            ))}
                        </IconsContainer>
                      </IconContext.Provider>
                    </ExtraInfo>
                    <Description>
                      {filteredCountry.fields.description}
                    </Description>
                  </RecipeInfo>
                </Link>
              </RecipeCard>
            ))}
          </RecipesW>
        )}
      </BodySection>
    </>
  );
};

export default Country;

const IconsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding-inline-start: 0px !important;
  /* padding: 10px; */
`;

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
  border-radius: 15px !important;
`;

const RecipeImg = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px !important;
`;

const Description = styled.div`
  display: none;
  text-align: center;
  padding-top: 2rem;
  color: rgba(23, 23, 23, 0.8);
`;

const RecipeInfo = styled.div`
  width: 100%;
  height: 40%;
  bottom: 40% !important;
  position: relative;
  background-color: rgba(238, 238, 238, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  padding: 2rem 3rem;
  border-radius: 15px !important;

  &:hover {
    height: 60%;
    bottom: 60% !important;
  }
  &:hover ${IconsContainer} {
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(23, 23, 23, 0.8);
  padding: 0 1rem;
`;
