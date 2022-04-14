import React from "react";
import iconMeditation from "../assets/iconMeditation.svg";
import iconBike from "../assets/iconBike.svg";
import iconSwiming from "../assets/iconSwiming.svg";
import iconDumbBell from "../assets/iconDumbBell.svg";
import { NavLink } from "react-router-dom";
import { Container, Nav, Wrapper, NavText } from "../styles/sideBarStyle";

export default function SideBar(){
    
  return (
    <Container>
      <Nav>
        <Wrapper>
          <NavLink to="#">
            <img src={iconMeditation} alt="Meditation" />
          </NavLink>
          <NavLink to="#">
            <img src={iconSwiming} alt="Swiming" />
          </NavLink>
          <NavLink to="#">
            <img src={iconBike} alt="Bike" />
          </NavLink>
          <NavLink to="#">
            <img src={iconDumbBell} alt="Dumb-Bell" />
          </NavLink>
        </Wrapper>
        <NavText>Copyright, SportSee 2020</NavText>
      </Nav>
    </Container>
  );
};

