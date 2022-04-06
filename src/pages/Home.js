import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  max-width: 1240px;
  margin-left: 15rem;
  a {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    color: red;
  }
`;

const Title = styled.h2`
  margin: 4rem 0rem;
`;

const Home = () => {
  return (
    <Main>
      <Title>Select USER</Title>
      <NavLink to="user/12">12</NavLink>
      <NavLink to="user/18">18</NavLink>
    </Main>
  );
};

export default Home;