import React from "react";
import { NavLink } from "react-router-dom";
import { Main, Title } from "../styles/homeStyle";

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