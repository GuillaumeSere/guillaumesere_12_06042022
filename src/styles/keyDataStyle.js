import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    padding:2em;
    width: 258px;
    height: 124px;
    background: #f2f2f2ab;
    border-radius: 5px;
`
    
const Infos = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:24px;
`

const InfosData = styled.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #282D30;
    margin-bottom:2px;
`

const InfosText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #74798C;
`

export {Wrapper, Infos, InfosData, InfosText}