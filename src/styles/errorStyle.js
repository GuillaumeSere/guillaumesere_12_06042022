import styled from "styled-components";

const Main = styled.main`
  margin: 10rem 20rem 20rem;
  @media (max-width: 1025px) {
    margin: 1.5rem;
  }
  a{
      margin-top: 4rem;
      display:flex;
      flex-direction:column;
      text-align: center;
      font-weight: bold;
      font-size: 1.5rem;
      @media (max-width: 1025px) {
        font-size: 1rem;
      }
  }
  p{
      font-size: 2.5rem;
      text-align: center;
      @media (max-width: 1025px) {
        font-size: 1.5rem;
      }
  }
`
const Title = styled.h1`
color: red;
font-size: 10rem;
text-align: center;
margin-bottom: 5rem;
@media (max-width: 1025px) {
    font-size: 5rem;
  }
`
export {Main, Title}