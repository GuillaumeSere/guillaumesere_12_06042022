import styled from "styled-components";

const Main = styled.main`
  display: grid;
  grid-template-columns: 117px auto;
  margin: auto;
  @media screen and (max-width: 1250px) {
    grid-gap: 1em;
  }
`;
const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  margin-top: 2%;
`;

export {Main, Container}