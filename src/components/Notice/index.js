 // Packages:
import React from 'react';
import styled from 'styled-components';


// Imports:
import OutOfJuice from '../../assets/images/we_out_of_juice.png';
import nice from '../../assets/images/nice.png';


// Styles:
const Wrapper = styled.div`
    margin-top: 6em;
    padding: 4em 15em;
    padding-left: 4em;
    padding-bottom: 6em;
    font-family: 'Montserrat';
    text-align: left;
    background: #FFF;

    @media only screen and (max-width: 768px) {
        width: 80vw;
        margin-top: 7em;
        padding-top: 5em;
        padding-right: 10vw;
        padding-left: 10vw;
        padding-bottom: 7.5em;
    }
`;

const Title = styled.h1`
    margin: 0.4em 0em;
    font-size: 5em;

    @media only screen and (max-width: 768px) {
        font-size: 3em;
    }
`;

const Subtitle = styled.h3`
    margin: 0.7em 0em;
`;

const SubtitleSpecial = styled(Subtitle)`
    color: #d63031;
`;


// Functions:
function Notice() {
    return (
        <Wrapper>
            <Title>Hi, we need your help.</Title>
            <Subtitle>We set out with a goal of reaching 5000 page views in a month.</Subtitle>
            <SubtitleSpecial>We reached that goal inside 48 hours.</SubtitleSpecial>
            <br/>
            <Subtitle><span style={{ textDecoration: 'line-through' }}>Now, we're burning through our limited <a href={ OutOfJuice } style={{ color: 'unset' }}>bandwidth quota.</a></span></Subtitle>
            <Subtitle><span style={{ textDecoration: 'line-through' }}>Please consider donating, <a href="#whatnext" style={{ color: 'unset' }}>here.</a></span></Subtitle>
            <Subtitle>As of 5th March, 2020, we've raised <a href={ nice } style={{ color: 'unset' }}>INR 1050</a>. We intend to make all finance related stuff public instead of hiding the numbers. (*cough cough* We're look at you, <a href="https://spectator.us/china-hiding-bad-coronavirus/" style={{ color: 'unset' }}>China</a>)</Subtitle>
        </Wrapper>
    )
}


// Exports:
export default Notice;