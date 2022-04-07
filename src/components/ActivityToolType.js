import React from 'react';
import {Container, Text} from "../styles/activityToolTypeStyle";
import PropTypes from 'prop-types';


/** create a custom tooltype for the user activity barChart
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX}
 */

function CustomToolType({active, payload}) {
    if (active){
    return (
        <Container>
            <Text>{payload[0].value}kg</Text>
            <Text>{payload[1].value}Kcal</Text>
        </Container>
    
     );
    }
    return null
}

export default CustomToolType;

CustomToolType.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};