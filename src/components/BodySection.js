import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const BodySection = styled.div`
  height: 80vh;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Body = ({ children, query, setQuery, recipes }) => {
  return (
    <>
      {/* <Header query={query} setQuery={setQuery}> */}
      <BodySection>{children}</BodySection>
      {/* </Header>
      <Footer /> */}
    </>
  );
};

export default Body;
