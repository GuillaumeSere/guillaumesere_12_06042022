import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 258px;
  height: 263px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ff0000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`;

const Title = styled.h2`
  position: absolute;
  font-weight: 500;
  font-size: 15px;
  padding: 29px 34px 0 34px;
  color: rgba(255, 255, 255, 0.7);
`;

export {Container, Title}