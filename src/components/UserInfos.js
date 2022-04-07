import React from 'react';
import PropTypes from 'prop-types'; 
import {Head, Name} from "../styles/userInfosStyle";

/**Render the userName
* @param {string} name
* @return {JSX}
*/

function UserInfos({name}) {

    return (  
          <Head>
            <h1>Bonjour <Name>{name}</Name></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </Head>
    );
}

export default UserInfos;


UserInfos.propTypes = {
	name: PropTypes.string,
};