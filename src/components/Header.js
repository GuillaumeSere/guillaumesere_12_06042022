import React from "react";
import {Head, Nav}  from "../styles/headerStyle";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";


export default function Header() {
    
  return (
    <Head>
      <img src={logo} alt="sportSee" aria-label="logo sportSee" />
      <Nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglages</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </Nav>
    </Head>
  );
};

