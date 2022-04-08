import styled from 'styled-components';

const Container = styled.div`
position: relative;
width: 258px;
height: 263px;
background: #FBFBFB;
border-radius: 5px;
`;

const Title = styled.h2`
position: absolute;
left: 20%;
top: 15%;
transform: translate(-50%, -50%);
font-weight: 500;
font-size: 15px;
line-height: 24px;
color: #20253a;
font-weight: 700;
`;

const Text = styled.p`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
font-size: 12px;
line-height: 20px;
font-weight: 700;
text-align: center;
color: #74798c;
background: #FBFBFB;
border-radius: 50%;
padding: 2.3rem 2.7rem;
`;

const Score = styled.span`
color: rgba(0, 0, 0, 0.8);
font-weight: 700;
font-size: 26px;
`;

export {Container, Title, Text, Score}