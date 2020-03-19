// Packages:
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


// Imports:
import lungTransformationAnimation from '../../assets/images/lung_transformation_2.gif';
import kidneyDamage from '../../assets/images/kidney_damage.png';

// import {
//     MENU_ICON,
//     HOME_ICON,
//     CLASSES_ICON,
//     COURSES_ICON,
//     ROUTINE_ICON,
//     TEACHERS_ICON,
//     STUDENTS_ICON,
//     LMS_ICON,
//     ATTENDANCE_ICON
// } from '../../../constants/icons';


// Redux:
// import {
//     toggleSidebar,
//     setCurrentlyActiveNavigationElement
// } from "../../../actions";

// import { HIDDEN } from '../../../constants';

const mapStateToProps = state => {
    return {
        global: state.global,
        reduxProps: state.components.HowDoesItKill
    };
};

function mapDispatchToProps(dispatch) {
    return {
        // toggleSidebar: action => dispatch(toggleSidebar(action)),
        // setCurrentlyActiveNavigationElement: action => dispatch(setCurrentlyActiveNavigationElement(action))
    };
};


// Styles:
const Wrapper = styled.div`
    padding: 2.5em 3em;
    padding-left: 4em;
    margin-bottom: 7em;
    font-family: '${ (props) => props.global.font }';
    text-align: left;
    background: #2d3436;

    @media only screen and (max-width: 768px) {
        width: 80vw;
        padding-right: 10vw;
        padding-left: 10vw;
        margin-bottom: 17em;
    }
`;

const Wrapper2 = styled.div`
    display: inline-block;
    width: 62vw;

    @media only screen and (max-width: 768px) {
        width: 85vw;
    }
`;

const Title = styled.div`
    display: block;
    font-size: 4em;
    font-weight: 900;
    color: #74b9ff;

    @media only screen and (max-width: 768px) {
        font-size: 3em;
    }
`;

const Body = styled.div`
    display: block;
    margin-top: 1em;
    margin-right: 6vw;
    font-size: 1em;
    font-weight: 500;
    color: #81ecec;

    @media only screen and (max-width: 768px) {
        font-size: 1.3em;
    }
`;

const Reference = styled.a`
    margin: 0em 0.1em;
    color: #fd79a8;
    text-decoration: none;

    &::selection {
        padding: 1em;
        color: #0984e3;
    }
`;

const Superscript = styled.sup`
    font-size: 0.6em;
`;

const Image = styled.img`
    display: inline-block;
    position: relative;
    float: right;
    width: 20em;
    height: 15em;
    border-radius: 1em;
    box-shadow: 0 30px 80px -20px rgba(0,0,10,0.3), 0 30px 70px -30px rgba(0,0,0,0.3);

    @media only screen and (max-width: 768px) {
        width: 15em;
        height: 11.25em;
    }
`;

const KidneyImage = styled(Image)`
    margin: 1em;
    margin-top: 4em;

    @media only screen and (max-width: 768px) {
        margin: 1em;
        margin-right: 2em;
        margin-top: 4em;
    }
`;

const LungImage = styled(Image)`
    margin: 1em;
    margin-right: -17em;
    margin-top: -7em;

    @media only screen and (max-width: 768px) {
        margin-right: 4em;
        margin-top: -10em;
    }
`;


// Content:
const CONTENT = {
    ENGLISH: {
        title: () => (
            <Title>How does it affect the body?</Title>
        ),
        body: () => (
            <Body>
                Coronavirus attacks the tissues in the lungs, filling them up with fluid, causing pneumonia. This is visible in chest x-rays as white spots.<Reference target="_blank" href="https://www.latimes.com/science/story/2020-02-29/how-this-coronavirus-kills-its-victims"><Superscript>6</Superscript></Reference>
                <br/>
                Research also suggests that the virus attacks the kidneys and the heart as well.<Reference target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.02.12.20022418v1"><Superscript>7</Superscript></Reference>
                <br/>
            </Body>
        )
    },
    HINDI: {
        title: () => (
            <Title>यह शरीर को कैसे प्रभावित करता है?</Title>
        ),
        body: () => (
            <Body>
                कोरोनावायरस फेफड़ों में ऊतकों पर हमला करता है, उन्हें द्रव से भरता है, जिससे निमोनिया होता है। यह छाती के एक्स-रे में सफेद धब्बे के रूप में दिखाई देता है।<Reference target="_blank" href="https://www.latimes.com/science/story/2020-02-29/how-this-coronavirus-kills-its-victims"><Superscript>6</Superscript></Reference>
                <br/>
                शोध यह भी बताते हैं कि वायरस गुर्दे और दिल पर भी हमला करता है।<Reference target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.02.12.20022418v1"><Superscript>7</Superscript></Reference>
                <br/>
            </Body>
        )
    },
    BENGALI: {
        title: () => (
            <Title>কীভাবে এটি শরীরকে প্রভাবিত করে?</Title>
        ),
        body: () => (
            <Body>
                করোনাভাইরাস ফুসফুসের টিস্যুগুলিকে আক্রমণ করে তাদের তরল দিয়ে পূর্ণ করে নিউমোনিয়া সৃষ্টি করে। এটি সাদা দাগ হিসাবে বুকের এক্স-রেতে দৃশ্যমান।<Reference target="_blank" href="https://www.latimes.com/science/story/2020-02-29/how-this-coronavirus-kills-its-victims"><Superscript>6</Superscript></Reference>
                <br/>
                গবেষণা আরও পরামর্শ দেয় যে ভাইরাস কিডনি এবং হার্টকেও আক্রমণ করে।<Reference target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.02.12.20022418v1"><Superscript>7</Superscript></Reference>
                <br/>
            </Body>
        )
    },
    GUJARATI: {
        title: () => (
            <Title>તે શરીર પર કેવી અસર કરે છે?</Title>
        ),
        body: () => (
            <Body>
                કોરોનાવાયરસ ફેફસાંના પેશીઓ પર હુમલો કરે છે, તેમને પ્રવાહીથી ભરે છે, ન્યુમોનિયા થાય છે. આ છાતીના એક્સ-રેમાં સફેદ ફોલ્લીઓ તરીકે દેખાય છે.<Reference target="_blank" href="https://www.latimes.com/science/story/2020-02-29/how-this-coronavirus-kills-its-victims"><Superscript>6</Superscript></Reference>
                <br/>
                સંશોધન પણ સૂચવે છે કે વાયરસ કિડની અને હૃદય પર પણ હુમલો કરે છે.<Reference target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.02.12.20022418v1"><Superscript>7</Superscript></Reference>
                <br/>
            </Body>
        )
    },
    PUNJABI: {
        title: () => (
            <Title>ਇਹ ਸਰੀਰ ਨੂੰ ਕਿਵੇਂ ਪ੍ਰਭਾਵਤ ਕਰਦਾ ਹੈ?</Title>
        ),
        body: () => (
            <Body>
                ਕੋਰੋਨਾਵਾਇਰਸ ਫੇਫੜਿਆਂ ਦੇ ਟਿਸ਼ੂਆਂ ਤੇ ਹਮਲਾ ਕਰਦਾ ਹੈ, ਉਹਨਾਂ ਨੂੰ ਤਰਲ ਨਾਲ ਭਰ ਦਿੰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਨਮੂਨੀਆ ਹੁੰਦਾ ਹੈ. ਇਹ ਛਾਤੀ ਦੇ ਐਕਸਰੇ ਵਿਚ ਚਿੱਟੇ ਚਟਾਕ ਦੇ ਰੂਪ ਵਿਚ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ.<Reference target="_blank" href="https://www.latimes.com/science/story/2020-02-29/how-this-coronavirus-kills-its-victims"><Superscript>6</Superscript></Reference>
                <br/>
                ਖੋਜ ਇਹ ਵੀ ਸੁਝਾਅ ਦਿੰਦੀ ਹੈ ਕਿ ਵਾਇਰਸ ਗੁਰਦੇ ਅਤੇ ਦਿਲ 'ਤੇ ਵੀ ਹਮਲਾ ਕਰਦਾ ਹੈ.<Reference target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.02.12.20022418v1"><Superscript>7</Superscript></Reference>
                <br/>
            </Body>
        )
    },
    MARATHI: {
        title: () => (
            <Title>त्याचा शरीरावर कसा परिणाम होतो?</Title>
        ),
        body: () => (
            <Body>
                कोरोनाव्हायरस फुफ्फुसातील ऊतींवर हल्ला करते आणि त्या द्रवपदार्थाने भरतात ज्यामुळे न्यूमोनिया होतो. हे छातीच्या क्ष-किरणांमध्ये पांढरे डाग म्हणून दृश्यमान आहे.<Reference target="_blank" href="https://www.latimes.com/science/story/2020-02-29/how-this-coronavirus-kills-its-victims"><Superscript>6</Superscript></Reference>
                <br/>
                संशोधनात असेही सुचवले आहे की विषाणू मूत्रपिंड आणि हृदयावर देखील हल्ला करतो.<Reference target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.02.12.20022418v1"><Superscript>7</Superscript></Reference>
                <br/>
            </Body>
        )
    },
    NEPALI: {
        title: () => (
            <Title>यसले शरीरलाई कसरी असर गर्छ?</Title>
        ),
        body: () => (
            <Body>
                कोरोनाभाइरसले फोक्सोको टिश्युहरूमा आक्रमण गर्दछन् र तिनीहरूलाई तरल पदार्थले भर्दछन्, निमोनिया निम्त्याउँछन्। यो छातीको एक्स-रेमा सेतो दागका रूपमा देखिन्छ।<Reference target="_blank" href="https://www.latimes.com/science/story/2020-02-29/how-this-coronavirus-kills-its-victims"><Superscript>6</Superscript></Reference>
                <br/>
                अनुसन्धानले यो पनि संकेत गर्दछ कि भाइरसले मिर्गौला र मुटुमा पनि आक्रमण गर्दछ।<Reference target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.02.12.20022418v1"><Superscript>7</Superscript></Reference>
                <br/>
            </Body>
        )
    },
    TAMIL: {
        title: () => (
            <Title>இது உடலை எவ்வாறு பாதிக்கிறது?</Title>
        ),
        body: () => (
            <Body>
                கொரோனா வைரஸ் நுரையீரலில் உள்ள திசுக்களைத் தாக்கி, அவற்றை திரவத்தால் நிரப்பி, நிமோனியாவை ஏற்படுத்துகிறது. இது மார்பு எக்ஸ்-கதிர்களில் வெள்ளை புள்ளிகளாக தெரியும்.<Reference target="_blank" href="https://www.latimes.com/science/story/2020-02-29/how-this-coronavirus-kills-its-victims"><Superscript>6</Superscript></Reference>
                <br/>
                வைரஸ் சிறுநீரகங்களையும் இதயத்தையும் தாக்குகிறது என்றும் ஆராய்ச்சி கூறுகிறது.<Reference target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.02.12.20022418v1"><Superscript>7</Superscript></Reference>
                <br/>
            </Body>
        )
    },
    TELUGU: {
        title: () => (
            <Title>ఇది శరీరాన్ని ఎలా ప్రభావితం చేస్తుంది?</Title>
        ),
        body: () => (
            <Body>
                కరోనావైరస్ the పిరితిత్తులలోని కణజాలాలపై దాడి చేసి, వాటిని ద్రవంతో నింపి, న్యుమోనియాకు కారణమవుతుంది. ఇది ఛాతీ ఎక్స్-కిరణాలలో తెల్లని మచ్చలుగా కనిపిస్తుంది.<Reference target="_blank" href="https://www.latimes.com/science/story/2020-02-29/how-this-coronavirus-kills-its-victims"><Superscript>6</Superscript></Reference>
                <br/>
                వైరస్ మూత్రపిండాలు మరియు గుండెపై కూడా దాడి చేస్తుందని పరిశోధనలు సూచిస్తున్నాయి.<Reference target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.02.12.20022418v1"><Superscript>7</Superscript></Reference>
                <br/>
            </Body>
        )
    },
    URDU: {
        title: () => (
            <Title>اس کا جسم پر کیا اثر پڑتا ہے؟</Title>
        ),
        body: () => (
            <Body>
                کورونا وائرس پھیپھڑوں کے ٹشووں پر حملہ کرتا ہے ، ان کو سیال سے بھرتا ہے ، جس سے نمونیا ہوتا ہے۔ یہ سینے کے ایکس رے میں سفید دھبوں کی طرح دکھائی دیتا ہے۔<Reference target="_blank" href="https://www.latimes.com/science/story/2020-02-29/how-this-coronavirus-kills-its-victims"><Superscript>6</Superscript></Reference>
                <br/>
                تحقیق یہ بھی بتاتی ہے کہ وائرس گردوں اور دل پر بھی حملہ کرتا ہے۔<Reference target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.02.12.20022418v1"><Superscript>7</Superscript></Reference>
                <br/>
            </Body>
        )
    },
}


// Functions:
function Content(props) {
    const LANGUAGE = props.global.language;

    const TitleContent = (LANGUAGE) => {
        for (let LANG in CONTENT) {
            if (CONTENT.hasOwnProperty(LANGUAGE)) {
                return CONTENT[LANGUAGE].title();
            }
        }
    
        // Invalid Language.
        return CONTENT["ENGLISH"].title();
    };
    
    const BodyContent = (LANGUAGE) => {
        for (let LANG in CONTENT) {
            if (CONTENT.hasOwnProperty(LANGUAGE)) {
                return CONTENT[LANGUAGE].body();
            }
        }
    
        // Invalid Language.
        return CONTENT["ENGLISH"].body();
    };

    return (
        <Wrapper2>
            { TitleContent(LANGUAGE) }
            { BodyContent(LANGUAGE) }
        </Wrapper2>
    )
} 

function HowDoesItKill(props) {
    return (
        <Wrapper id="howdoesitkill" global={ props.global }>
            <Content global={ props.global }/>
            <KidneyImage src={ kidneyDamage } />
            <LungImage src={ lungTransformationAnimation } />
        </Wrapper>
    )
}


// PropTypes:
HowDoesItKill.propTypes = {
    global: PropTypes.object.isRequired,
    reduxProps: PropTypes.object.isRequired
};


// Exports:
export default connect(mapStateToProps, mapDispatchToProps)(HowDoesItKill);