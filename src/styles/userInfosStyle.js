import styled from "styled-components";

const Head = styled.header`
  margin-bottom: 40px;
  @media (max-width: 1203px) {
			margin-left: 2em;
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