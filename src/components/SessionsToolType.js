import React from "react";
import {Container, Text} from "../styles/sessionsToolTypeStyle";
import PropTypes from "prop-types";

export default function SessionsToolType({ active, payload }) {
    
  if (active) {
    return (
      <Container>
        <Text>{payload[0].value}min</Text>
      </Container>
    );
  }
  return null;
}

SessionsToolType.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};