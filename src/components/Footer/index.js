// Packages:
import React from 'react';
import styled from 'styled-components';


// Styles:
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 3em 0em;
    font-family: 'Montserrat';
    font-weight: bold;
    text-align: left;
    background: #dfe6e9;

    @media only screen and (max-width: 768px) {
        width: 100vw;
    }
`;

const Supporters = styled.a`
    display: inline-block;
    text-decoration: none;
    color: unset;
    fontSize: 0.8em;
    padding: 0em 0.5em;
    white-space: nowrap;
`;


// Functions:
function Footer() {
    return (
        <Wrapper>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.5em', marginBottom: '0.5em' }}>
                    CREATED AND MAINTAINED BY
                </div>
                <div style={{ fontSize: '1.5em' }}>
                    <a style={{ textDecoration: 'none', color: 'unset' }} target="_blank" href="https://www.instagram.com/diragb/">@diragb, 2020</a>
                </div>
                <br/>
                <br/>
                <div style={{ fontSize: '0.5em', marginBottom: '0.5em' }}>
                    SUPPORTED BY
                </div>
                <div>
                    <Supporters>Victor A. Sinha</Supporters>
                    <Supporters>Shantanu Chaudhary</Supporters>
                    <Supporters>Shreyas Jaiswal</Supporters>
                    <Supporters>Soumodeep Bannerjee</Supporters>
                    <Supporters>Kanishk Sharma</Supporters>
                    <Supporters>Gaurav Agarwal</Supporters>
                </div>
                <div>
                    <Supporters>Hemant Kulshreshtha</Supporters>
                    <Supporters target="_blank" href="http://instagram.com/mlemyka">Malayka Singh</Supporters>
                    <Supporters>Ledenla Sherpa</Supporters>
                    <Supporters>Anhad Moin Jakhmola</Supporters>
                    <Supporters>Shivendu Mahajan</Supporters>
                    <Supporters>Prachee Majumdar</Supporters>
                </div>
                <div>
                    <Supporters>Nivedita Dutta</Supporters>
                    <Supporters>Sayari Pal</Supporters>
                    <Supporters>Nivedita Basu</Supporters>
                    <Supporters>Sayani Das</Supporters>
                    <Supporters>Namrata Goswami</Supporters>
                    <Supporters target="_blank" href="https://www.instagram.com/anubrotomaitra2016/">Anubroto Maitra</Supporters>
                </div>
                <div>
                    <Supporters>Sasidhar Patri</Supporters>
                    <Supporters>Joydeep Roy</Supporters>
                    <Supporters>Anushmita Dutta</Supporters>
                    <Supporters>Gunjan Nath</Supporters>
                    <Supporters>Pooja Sharma</Supporters>
                    <Supporters>Abhinav Vishwaksen Sharma</Supporters>
                </div>
                <br/>
                <div>
                    And several others.
                </div>
            </div>
        </Wrapper>
    )
}


// Exports:
export default Footer;