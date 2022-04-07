import React from "react";
import { NavLink } from "react-router-dom";
import { Main, Title } from "../styles/homeStyle";
import UserActivity from "../components/BarChart";

const Home = () => {
  return (
    <Main>
      <Title>Select USER</Title>
      <NavLink to="user/12">12</NavLink>
      <NavLink to="user/18">18</NavLink>
      <UserActivity />
    </Main>
  );
};

export default Home;