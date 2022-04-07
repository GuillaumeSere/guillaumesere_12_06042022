import styled from "styled-components";

const Head = styled.header`
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 18px;
  @media (max-width: 1280px) {
			margin-left: 2rem;
		}
  h1 {
    font-weight: 600;
    font-size:48px;
    margin-bottom:40px;
  }
`;

const Name = styled.span`
  color: #ff0000;
`;

export {Head, Name}