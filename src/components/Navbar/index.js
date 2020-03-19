// Packages:
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'url-search-params-polyfill';


// Imports:
import logo from '../../assets/images/logo.png';

import {
    LANGUAGE_ICON,
    DOWNLOAD_ICON,
    ARROW_ICON
} from '../../constants/icons';


// Redux:
import {
    changeLanguage
} from "../../actions";

const mapStateToProps = state => {
    return {
        global: state.global,
        reduxProps: state.components.Navbar
    };
};

function mapDispatchToProps(dispatch) {
    return {
        changeLanguage: action => dispatch(changeLanguage(action))
    };
};


// Constants:
const ENGLISH_FILE = 'https://firebasestorage.googleapis.com/v0/b/prepare-karona.appspot.com/o/prepkarona.in%20by%20diragb%20%5BENGLISH%5D.pdf?alt=media&token=4dfda425-f4fd-4ce4-a041-c0cb8736963a';
const HINDI_FILE = 'https://firebasestorage.googleapis.com/v0/b/prepare-karona.appspot.com/o/prepkarona.in%20by%20diragb%20%5BHINDI%5D.pdf?alt=media&token=a26d0f0a-53cb-4d2b-b570-da22d868c56a';
const BENGALI_FILE = 'https://firebasestorage.googleapis.com/v0/b/prepare-karona.appspot.com/o/prepkarona.in%20by%20diragb%20%5BBENGALI%5D.pdf?alt=media&token=4dfda425-f4fd-4ce4-a041-c0cb8736963a';
const GUJARATI_FILE = 'https://firebasestorage.googleapis.com/v0/b/prepare-karona.appspot.com/o/prepkarona.in%20by%20diragb%20%5BGUJARATI%5D.pdf?alt=media&token=4dfda425-f4fd-4ce4-a041-c0cb8736963a';
const PUNJABI_FILE = 'https://firebasestorage.googleapis.com/v0/b/prepare-karona.appspot.com/o/prepkarona.in%20by%20diragb%20%5BPUNJABI%5D.pdf?alt=media&token=4dfda425-f4fd-4ce4-a041-c0cb8736963a';
const MARATHI_FILE = 'https://firebasestorage.googleapis.com/v0/b/prepare-karona.appspot.com/o/prepkarona.in%20by%20diragb%20%5BMARATHI%5D.pdf?alt=media&token=4dfda425-f4fd-4ce4-a041-c0cb8736963a';
const NEPALI_FILE = 'https://firebasestorage.googleapis.com/v0/b/prepare-karona.appspot.com/o/prepkarona.in%20by%20diragb%20%5BNEPALI%5D.pdf?alt=media&token=4dfda425-f4fd-4ce4-a041-c0cb8736963a';
const TAMIL_FILE = 'https://firebasestorage.googleapis.com/v0/b/prepare-karona.appspot.com/o/prepkarona.in%20by%20diragb%20%5BTAMIL%5D.pdf?alt=media&token=4dfda425-f4fd-4ce4-a041-c0cb8736963a';
const TELUGU_FILE = 'https://firebasestorage.googleapis.com/v0/b/prepare-karona.appspot.com/o/prepkarona.in%20by%20diragb%20%5BTELUGU%5D.pdf?alt=media&token=4dfda425-f4fd-4ce4-a041-c0cb8736963a';
const URDU_FILE = 'https://firebasestorage.googleapis.com/v0/b/prepare-karona.appspot.com/o/prepkarona.in%20by%20diragb%20%5BURDU%5D.pdf?alt=media&token=4dfda425-f4fd-4ce4-a041-c0cb8736963a';


// Styles:
const Wrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 999;
    height: 3.3em;
    width: 100vw;
    padding-top: 0.2em;
    padding-bottom: 0.3em;
    background: #2d3436;
    box-shadow: 0px 0px 12px 3px #202020;
    font-family: 'Montserrat';
    color: #74b9ff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LanguageWrapper = styled(Wrapper)`
    top: 3.3em;
    z-index: 998;
    height: 2.5em;
    box-shadow: 0px 0px 9px 1px #202020;
    

    @media only screen and (max-width: 768px) {
        justify-content: unset;
        height: 3.5em;
        overflow-x: scroll;
        overflow-y: hidden;
    }
`;

const Left = styled.div`
    display: none;
    position: absolute;
    left: 0em;
    margin: 0em 2em;
    user-select: none;
    // cursor: pointer;
`;

const Logo = styled.a`
    font-size: 1.7em;
    font-weight: 700;
    color: #74b9ff;
    text-decoration: none;
    user-select: none;

    @media only screen and (max-width: 768px) {
        font-size: 1.2em;
    }
`;

const Image = styled.img`
    width: 0.8em;
    margin: -0.07em 0.3em;
`;

const Right = styled.div`
    position: absolute;
    right: 0em;
    margin: 0em 2em;
    user-select: none;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
        margin: 0em 1em;
    }
`;

const LanguageImage = styled(Image)`
    width: 0.9em;
    filter: invert(70%) sepia(36%) saturate(3056%) hue-rotate(186deg) brightness(104%) contrast(108%);
`;

const DownloadImage = styled(Image)`
    filter: invert(70%) sepia(36%) saturate(3056%) hue-rotate(186deg) brightness(104%) contrast(108%);
    
    @media only screen and (max-width: 768px) {
        width: 1em;
    }
`;

const LanguageOption = styled.div`
    display: inline-block;
    margin: 0.5em;
    padding-top: 1em;
    padding-right: 1em;
    padding-left: 1em;
    font-weight: bold;
    color: ${ props => props.global.language === props.lang ? '#fd79a8' : 'inherit' };
    transition: 0.25s color ease;
    user-select: none;
    cursor: pointer;

    &:hover {
        color: #fd79a8;
    }
`;

const LanguageScroll = styled.img`
    width: 0em;
    height: 0em;
    filter: invert(70%) sepia(11%) saturate(4402%) hue-rotate(184deg) brightness(103%) contrast(101%);

    @media only screen and (max-width: 768px) {
        display: inline-block;
        position: fixed;
        top: 1.8em;
        right: 0em;
        width: 1em;
        height: 1em;
    }
`;


// Functions:
const getParams = (location) => {
    const searchParams = new URLSearchParams(location);
    console.log(location, searchParams);
    return {
        lang: searchParams.get('lang') || '',
    };
};

function Navbar(props) {
    const URLparams = getParams(window.location.search);
    console.log(URLparams, props.global.language, URLparams.lang);
    let PDFfile = ENGLISH_FILE;

    if ('lang' in URLparams && props.global.language !== URLparams.lang) {
        console.log('here');
        switch(URLparams.lang) {
            case "ENGLISH":
                props.changeLanguage("ENGLISH");
                break;
            case "HINDI":
                props.changeLanguage("HINDI");
                break;
            case "BENGALI":
                props.changeLanguage("BENGALI");
                break;
            case "GUJARATI":
                props.changeLanguage("GUJARATI");
                break;
            case "PUNJABI":
                props.changeLanguage("PUNJABI");
                break;
            case "MARATHI":
                props.changeLanguage("MARATHI");
                break;
            case "NEPALI":
                props.changeLanguage("NEPALI");
                break;
            case "TAMIL":
                props.changeLanguage("TAMIL");
                break;
            case "TELUGU":
                props.changeLanguage("TELUGU");
                break;
            case "URDU":
                props.changeLanguage("URDU");
                break;
            default:
                break;
        }
    }


    switch (props.global.language) {
        case "ENGLISH":
            PDFfile = ENGLISH_FILE;
            break;
        case "HINDI":
            PDFfile = HINDI_FILE;
            break;
        case "BENGALI":
            PDFfile = BENGALI_FILE;
            break;
        case "GUJARATI":
            PDFfile = GUJARATI_FILE;
            break;
        case "PUNJABI":
            PDFfile = PUNJABI_FILE;
            break;
        case "MARATHI":
            PDFfile = MARATHI_FILE;
            break;
        case "NEPALI":
            PDFfile = NEPALI_FILE;
            break;
        case "TAMIL":
            PDFfile = TAMIL_FILE;
            break;
        case "TELUGU":
            PDFfile = TELUGU_FILE;
            break;
        case "URDU":
            PDFfile = URDU_FILE;
            break;
        default:
            PDFfile = ENGLISH_FILE;
            break;
    }
    

    return (
        <div>
            <Wrapper global={ props.global }>
                <Left>
                    <LanguageImage src={ LANGUAGE_ICON }/>
                    ENGLISH
                </Left>
                <Logo href="https://prepkarona.in">
                    <Image src={ logo }/>
                    PrepKaroNa.in
                </Logo>
                <Right>
                    <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" href={ PDFfile }>
                        <DownloadImage src={ DOWNLOAD_ICON }/>
                    </a>
                </Right>
            </Wrapper>
            <LanguageWrapper>
                <LanguageOption global={ props.global } lang="ENGLISH" onClick={ () => props.changeLanguage("ENGLISH") }><a style={{ color: 'unset', textDecoration: 'none' }} href="?lang=ENGLISH">ENG</a></LanguageOption>
                <LanguageOption global={ props.global } lang="HINDI" onClick={ () => props.changeLanguage("HINDI") }><a style={{ color: 'unset', textDecoration: 'none' }} href="?lang=HINDI">हिंदी</a></LanguageOption>
                <LanguageOption global={ props.global } lang="BENGALI" onClick={ () => props.changeLanguage("BENGALI") }><a style={{ color: 'unset', textDecoration: 'none' }} href="?lang=BENGALI">বাংলা</a></LanguageOption>
                <LanguageOption global={ props.global } lang="GUJARATI" onClick={ () => props.changeLanguage("GUJARATI") }><a style={{ color: 'unset', textDecoration: 'none' }} href="?lang=GUJARATI">ગુજરાતી</a></LanguageOption>
                <LanguageOption global={ props.global } lang="PUNJABI" onClick={ () => props.changeLanguage("PUNJABI") }><a style={{ color: 'unset', textDecoration: 'none' }} href="?lang=PUNJABI">ਪੰਜਾਬੀ</a></LanguageOption>
                <LanguageOption global={ props.global } lang="MARATHI" onClick={ () => props.changeLanguage("MARATHI") }><a style={{ color: 'unset', textDecoration: 'none' }} href="?lang=MARATHI">मराठी</a></LanguageOption>
                <LanguageOption global={ props.global } lang="NEPALI" onClick={ () => props.changeLanguage("NEPALI") }><a style={{ color: 'unset', textDecoration: 'none' }} href="?lang=NEPALI">नेपाली</a></LanguageOption>
                <LanguageOption global={ props.global } lang="TAMIL" onClick={ () => props.changeLanguage("TAMIL") }><a style={{ color: 'unset', textDecoration: 'none' }} href="?lang=TAMIL">தமிழ்</a></LanguageOption>
                <LanguageOption global={ props.global } lang="TELUGU" onClick={ () => props.changeLanguage("TELUGU") }><a style={{ color: 'unset', textDecoration: 'none' }} href="?lang=TELUGU">తెలుగు</a></LanguageOption>
                <LanguageOption global={ props.global } lang="URDU" onClick={ () => props.changeLanguage("URDU") }><a style={{ color: 'unset', textDecoration: 'none' }} href="?lang=URDU">اردو</a></LanguageOption>
            </LanguageWrapper>
        </div>
        
    )
}


// PropTypes:
Navbar.propTypes = {
    global: PropTypes.object.isRequired,
    reduxProps: PropTypes.object.isRequired,
    changeLanguage: PropTypes.func.isRequired
};


// Exports:
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);