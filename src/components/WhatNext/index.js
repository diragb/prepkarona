// Packages:
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


// Imports:
import WhatsAppLogo from '../../assets/images/whatsapp.png';
import QRCode from '../../assets/images/QR.png'

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
        reduxProps: state.components.WhatNext
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
    padding: 2.5em 22em;
    padding-left: 4em;
    padding-bottom: 5em;
    font-family: '${ (props) => props.global.font }';
    text-align: left;
    background: #2d3436;

    @media only screen and (max-width: 768px) {
        width: 80vw;
        padding-right: 10vw;
        padding-left: 10vw;
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
    font-size: 1em;
    font-weight: 500;
    color: #81ecec;

    @media only screen and (max-width: 768px) {
        font-size: 1.3em;
    }
`;

const WhatsAppShare = styled.a`
    text-decoration: underline;
    font-weight: bold;
    color: unset;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WhatsApp = styled.img`
    width: 2em;
    margin-right: 0.7em;
`;

const QRWrapper = styled.div`
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const QRImage = styled.img`
    width: 10em;
    height: 10em;
    padding: 0.5em;
    background: #FFF;
    border-radius: 1em;
    box-shadow: 0 30px 80px -20px rgba(0,0,10,0.3), 0 30px 70px -30px rgba(0,0,0,0.3);

    @media only screen and (max-width: 768px) {
        margin-top: 2em;
        width: 15em;
        height: 15em;
        padding: 0.25em;
    }
`;


// Content:
const CONTENT = {
    ENGLISH: {
        title: () => (
            <Title>What next?</Title>
        ),
        body: () => (
            <Body>
                Share this information and spread awareness among your friends and family. Click below to open WhatsApp.
                <br/>
                <br/>
                <div style={{ display: 'inline-block' }}>
                    <WhatsAppShare href="https://wa.me/?text=How+can+you+prepare+for+coronavirus%3F+Read+here%3A+https%3A%2F%2Fprepkarona.in%0D%0A%0D%0AShare+it+with+your+friends.+Stay+safe%21">
                        <WhatsApp src={ WhatsAppLogo } />
                        Share on WhatsApp
                    </WhatsAppShare>
                </div>
                <br/>
                <br/>
                Hosting this website, writing the content, and updating details cost precious money and time, and I'm just a student. Please consider donating via PayTm or other UPI methods below.
                <br/>
                <br/>
                <QRWrapper>
                    <QRImage src={ QRCode } />
                </QRWrapper>
                <br/>
                Or
                <br/>
                <br/>
                <div><b>Name:</b> Victor A. Sinha</div>
                <div><b>UPI Virtual ID:</b> 917384999678@federal</div>
                <div><b>Account Number:</b> 99980100150890</div>
                <div><b>IFSC Code:</b> FDRL0001438</div>
            </Body>
        )
    },
    HINDI: {
        title: () => (
            <Title>आगे क्या?</Title>
        ),
        body: () => (
            <Body>
                इस जानकारी को साझा करें और अपने दोस्तों और परिवार के बीच जागरूकता फैलाएं। व्हाट्सएप खोलने के लिए नीचे क्लिक करें
                <br/>
                <br/>
                <div style={{ display: 'inline-block' }}>
                    <WhatsAppShare href="https://wa.me/?text=%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A5%8B%E0%A4%A8%E0%A5%8B%E0%A4%B5%E0%A4%BE%E0%A4%AF%E0%A4%B0%E0%A4%B8+%E0%A4%95%E0%A5%87+%E0%A4%B2%E0%A4%BF%E0%A4%8F+%E0%A4%86%E0%A4%AA+%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87+%E0%A4%A4%E0%A5%88%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A5%80+%E0%A4%95%E0%A4%B0+%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A5%87+%E0%A4%B9%E0%A5%88%E0%A4%82%3F+%E0%A4%AF%E0%A4%B9%E0%A4%BE%E0%A4%82+%E0%A4%AA%E0%A4%A2%E0%A4%BC%E0%A5%87%E0%A4%82%3A+https%3A%2F%2Fprepkarona.in?lang=HINDI%0D%0A%0D%0A%E0%A4%87%E0%A4%B8%E0%A5%87+%E0%A4%85%E0%A4%AA%E0%A4%A8%E0%A5%87+%E0%A4%A6%E0%A5%8B%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%82+%E0%A4%95%E0%A5%87+%E0%A4%B8%E0%A4%BE%E0%A4%A5+%E0%A4%B8%E0%A4%BE%E0%A4%9D%E0%A4%BE+%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A5%A4+%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4+%E0%A4%B0%E0%A4%B9%E0%A5%87%E0%A4%82%21">
                        <WhatsApp src={ WhatsAppLogo } />
                        व्हाट्सएप पर शेयर करें
                    </WhatsAppShare>
                </div>
                <br/>
                <br/>
                इस वेबसाइट को होस्ट करना, सामग्री लिखना और विवरण अपडेट करना कीमती पैसा और समय खर्च करता है, और मैं सिर्फ एक छात्र हूं। कृपया नीचे पेटीएम या अन्य UPI विधियों के माध्यम से दान करने पर विचार करें।
                <br/>
                <br/>
                <QRWrapper>
                    <QRImage src={ QRCode } />
                </QRWrapper>
                <br/>
                Or
                <br/>
                <br/>
                <div><b>Name:</b> Victor A. Sinha</div>
                <div><b>UPI Virtual ID:</b> 917384999678@federal</div>
                <div><b>Account Number:</b> 99980100150890</div>
                <div><b>IFSC Code:</b> FDRL0001438</div>
            </Body>
        )
    },
    BENGALI: {
        title: () => (
            <Title>এরপর কী?</Title>
        ),
        body: () => (
            <Body>
                এই তথ্যটি ভাগ করুন এবং আপনার বন্ধুদের এবং পরিবারের মধ্যে সচেতনতা ছড়িয়ে দিন। হোয়াটসঅ্যাপ খোলার জন্য নীচে ক্লিক করুন।
                <br/>
                <br/>
                <div style={{ display: 'inline-block' }}>
                    <WhatsAppShare href="https://wa.me/?text=%E0%A6%86%E0%A6%AA%E0%A6%A8%E0%A6%BF+%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%AD%E0%A6%BE%E0%A6%87%E0%A6%B0%E0%A6%BE%E0%A6%B8+%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF+%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A7%81%E0%A6%A4+%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87+%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%A8%3F+%E0%A6%8F%E0%A6%96%E0%A6%BE%E0%A6%A8%E0%A7%87+%E0%A6%AA%E0%A6%A1%E0%A6%BC%E0%A7%81%E0%A6%A8%3A+https%3A%2F%2Fprepkarona.in?lang=BENGALI%0D%0A%0D%0A%E0%A6%86%E0%A6%AA%E0%A6%A8%E0%A6%BE%E0%A6%B0+%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A7%81%E0%A6%A6%E0%A7%87%E0%A6%B0+%E0%A6%B8%E0%A6%BE%E0%A6%A5%E0%A7%87+%E0%A6%B6%E0%A7%87%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B0+%E0%A6%95%E0%A6%B0%E0%A7%81%E0%A6%A8.+%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A6%BE%E0%A6%AA%E0%A6%A6+%E0%A6%A5%E0%A6%BE%E0%A6%95%E0%A7%8B%21">
                        <WhatsApp src={ WhatsAppLogo } />
                        হোয়াটসঅ্যাপে শেয়ার করুন
                    </WhatsAppShare>
                </div>
                <br/>
                <br/>
                এই ওয়েবসাইটটি হোস্টিং করা, বিষয়বস্তু লেখা এবং বিশদ আপডেট করার জন্য মূল্যবান অর্থ ও সময় ব্যয় হয় এবং আমি কেবল একজন ছাত্র। নীচে পেটিএম বা অন্যান্য ইউপিআই পদ্ধতিগুলির মাধ্যমে অনুদানের বিষয়টি বিবেচনা করুন।
                <br/>
                <br/>
                <QRWrapper>
                    <QRImage src={ QRCode } />
                </QRWrapper>
                <br/>
                Or
                <br/>
                <br/>
                <div><b>Name:</b> Victor A. Sinha</div>
                <div><b>UPI Virtual ID:</b> 917384999678@federal</div>
                <div><b>Account Number:</b> 99980100150890</div>
                <div><b>IFSC Code:</b> FDRL0001438</div>
            </Body>
        )
    },
    GUJARATI: {
        title: () => (
            <Title>હવે પછી શું?</Title>
        ),
        body: () => (
            <Body>
                આ માહિતી શેર કરો અને તમારા મિત્રો અને પરિવારમાં જાગૃતિ ફેલાવો. વોટ્સએપ ખોલવા માટે નીચે ક્લિક કરો.
                <br/>
                <br/>
                <div style={{ display: 'inline-block' }}>
                    <WhatsAppShare href="https://wa.me/?text=%E0%AA%A4%E0%AA%AE%E0%AB%87+%E0%AA%95%E0%AB%8B%E0%AA%B0%E0%AB%8B%E0%AA%A8%E0%AA%BE%E0%AA%B5%E0%AA%BE%E0%AA%AF%E0%AA%B0%E0%AA%B8+%E0%AA%AE%E0%AA%BE%E0%AA%9F%E0%AB%87+%E0%AA%95%E0%AB%87%E0%AA%B5%E0%AB%80+%E0%AA%B0%E0%AB%80%E0%AA%A4%E0%AB%87+%E0%AA%A4%E0%AB%88%E0%AA%AF%E0%AA%BE%E0%AA%B0+%E0%AA%95%E0%AA%B0%E0%AB%80+%E0%AA%B6%E0%AA%95%E0%AB%8B+%E0%AA%9B%E0%AB%8B%3F+%E0%AA%85%E0%AA%B9%E0%AB%80%E0%AA%82+%E0%AA%B5%E0%AA%BE%E0%AA%82%E0%AA%9A%E0%AB%8B%3A+https%3A%2F%2Fprepkarona.in?lang=GUJARATI%0D%0A%0D%0A%E0%AA%A4%E0%AB%87%E0%AA%A8%E0%AB%87+%E0%AA%A4%E0%AA%AE%E0%AA%BE%E0%AA%B0%E0%AA%BE+%E0%AA%AE%E0%AA%BF%E0%AA%A4%E0%AB%8D%E0%AA%B0%E0%AB%8B+%E0%AA%B8%E0%AA%BE%E0%AA%A5%E0%AB%87+%E0%AA%B6%E0%AB%87%E0%AA%B0+%E0%AA%95%E0%AA%B0%E0%AB%8B.+%E0%AA%B8%E0%AB%81%E0%AA%B0%E0%AA%95%E0%AB%8D%E0%AA%B7%E0%AA%BF%E0%AA%A4+%E0%AA%B0%E0%AA%B9%E0%AB%8B%21">
                        <WhatsApp src={ WhatsAppLogo } />
                        વોટ્સએપ પર શેર કરો
                    </WhatsAppShare>
                </div>
                <br/>
                <br/>
                આ વેબસાઇટનું હોસ્ટિંગ, સામગ્રી લખવી અને વિગતો અપડેટ કરવા માટે કિંમતી પૈસા અને સમયનો ખર્ચ કરવો પડે છે અને હું ફક્ત એક વિદ્યાર્થી છું. કૃપા કરીને નીચે પેટીએમ અથવા અન્ય યુપીઆઈ પદ્ધતિઓ દ્વારા દાન આપવાનું ધ્યાનમાં લો.
                <br/>
                <br/>
                <QRWrapper>
                    <QRImage src={ QRCode } />
                </QRWrapper>
                <br/>
                Or
                <br/>
                <br/>
                <div><b>Name:</b> Victor A. Sinha</div>
                <div><b>UPI Virtual ID:</b> 917384999678@federal</div>
                <div><b>Account Number:</b> 99980100150890</div>
                <div><b>IFSC Code:</b> FDRL0001438</div>
            </Body>
        )
    },
    PUNJABI: {
        title: () => (
            <Title>ਅੱਗੇ ਕੀ?</Title>
        ),
        body: () => (
            <Body>
                ਇਸ ਜਾਣਕਾਰੀ ਨੂੰ ਸਾਂਝਾ ਕਰੋ ਅਤੇ ਆਪਣੇ ਦੋਸਤਾਂ ਅਤੇ ਪਰਿਵਾਰ ਵਿਚ ਜਾਗਰੂਕਤਾ ਫੈਲਾਓ. ਵਟਸਐਪ ਨੂੰ ਖੋਲ੍ਹਣ ਲਈ ਹੇਠਾਂ ਕਲਿੱਕ ਕਰੋ.
                <br/>
                <br/>
                <div style={{ display: 'inline-block' }}>
                    <WhatsAppShare href="https://wa.me/?text=%E0%A8%A4%E0%A9%81%E0%A8%B8%E0%A9%80%E0%A8%82+%E0%A8%95%E0%A9%8B%E0%A8%B0%E0%A9%8B%E0%A8%A8%E0%A8%BE%E0%A8%B5%E0%A8%BE%E0%A8%87%E0%A8%B0%E0%A8%B8+%E0%A8%B2%E0%A8%88+%E0%A8%95%E0%A8%BF%E0%A8%B5%E0%A9%87%E0%A8%82+%E0%A8%A4%E0%A8%BF%E0%A8%86%E0%A8%B0+%E0%A8%95%E0%A8%B0+%E0%A8%B8%E0%A8%95%E0%A8%A6%E0%A9%87+%E0%A8%B9%E0%A9%8B%3F+%E0%A8%87%E0%A9%B1%E0%A8%A5%E0%A9%87+%E0%A8%AA%E0%A9%9C%E0%A9%8D%E0%A8%B9%E0%A9%8B%3A+https%3A%2F%2Fprepkarona.in?lang=PUNJABI%0D%0A%0D%0A%E0%A8%87%E0%A8%B8%E0%A8%A8%E0%A9%82%E0%A9%B0+%E0%A8%86%E0%A8%AA%E0%A8%A3%E0%A9%87+%E0%A8%A6%E0%A9%8B%E0%A8%B8%E0%A8%A4%E0%A8%BE%E0%A8%82+%E0%A8%A8%E0%A8%BE%E0%A8%B2+%E0%A8%B8%E0%A8%BE%E0%A8%82%E0%A8%9D%E0%A8%BE+%E0%A8%95%E0%A8%B0%E0%A9%8B.+%E0%A8%B8%E0%A9%81%E0%A8%B0%E0%A9%B1%E0%A8%96%E0%A8%BF%E0%A8%85%E0%A8%A4+%E0%A8%B0%E0%A8%B9%E0%A9%8B%21">
                        <WhatsApp src={ WhatsAppLogo } />
                        ਵਟਸਐਪ 'ਤੇ ਸ਼ੇਅਰ ਕਰੋ
                    </WhatsAppShare>
                </div>
                <br/>
                <br/>
                ਇਸ ਵੈਬਸਾਈਟ ਦੀ ਮੇਜ਼ਬਾਨੀ ਕਰਨਾ, ਸਮਗਰੀ ਨੂੰ ਲਿਖਣਾ, ਅਤੇ ਵੇਰਵਿਆਂ ਨੂੰ ਅਪਡੇਟ ਕਰਨ ਨਾਲ ਕੀਮਤੀ ਪੈਸਾ ਅਤੇ ਸਮਾਂ ਖਰਚ ਆਉਂਦਾ ਹੈ, ਅਤੇ ਮੈਂ ਸਿਰਫ ਇੱਕ ਵਿਦਿਆਰਥੀ ਹਾਂ. ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਪੇਟੀਐਮ ਜਾਂ ਹੋਰ ਯੂਪੀਆਈ ਤਰੀਕਿਆਂ ਦੁਆਰਾ ਦਾਨ ਕਰਨ ਬਾਰੇ ਵਿਚਾਰ ਕਰੋ.
                <br/>
                <br/>
                <QRWrapper>
                    <QRImage src={ QRCode } />
                </QRWrapper>
                <br/>
                Or
                <br/>
                <br/>
                <div><b>Name:</b> Victor A. Sinha</div>
                <div><b>UPI Virtual ID:</b> 917384999678@federal</div>
                <div><b>Account Number:</b> 99980100150890</div>
                <div><b>IFSC Code:</b> FDRL0001438</div>
            </Body>
        )
    },
    MARATHI: {
        title: () => (
            <Title>पुढे काय?</Title>
        ),
        body: () => (
            <Body>
                ही माहिती सामायिक करा आणि आपल्या मित्रांमध्ये आणि कुटुंबात जागरूकता पसरवा. व्हॉट्सअॅप उघडण्यासाठी खाली क्लिक करा.
                <br/>
                <br/>
                <div style={{ display: 'inline-block' }}>
                    <WhatsAppShare href="https://wa.me/?text=%E0%A4%86%E0%A4%AA%E0%A4%A3+%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A5%8B%E0%A4%A8%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%B0%E0%A4%B8%E0%A4%9A%E0%A5%80+%E0%A4%A4%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A5%80+%E0%A4%95%E0%A4%B6%E0%A5%80+%E0%A4%95%E0%A4%B0%E0%A5%82+%E0%A4%B6%E0%A4%95%E0%A4%A4%E0%A4%BE%3F+%E0%A4%AF%E0%A5%87%E0%A4%A5%E0%A5%87+%E0%A4%B5%E0%A4%BE%E0%A4%9A%E0%A4%BE%3A+https%3A%2F%2Fprepkarona.in?lang=MARATHI%0D%0A%0D%0A%E0%A4%86%E0%A4%AA%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A4%BE+%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%82%E0%A4%B8%E0%A4%B9+%E0%A4%B8%E0%A4%BE%E0%A4%AE%E0%A4%BE%E0%A4%AF%E0%A4%BF%E0%A4%95+%E0%A4%95%E0%A4%B0%E0%A4%BE.+%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4+%E0%A4%B0%E0%A4%BE%E0%A4%B9%E0%A4%BE%21">
                        <WhatsApp src={ WhatsAppLogo } />
                        व्हॉट्सअ‍ॅपवर शेअर करा
                    </WhatsAppShare>
                </div>
                <br/>
                <br/>
                ही वेबसाइट होस्ट करणे, सामग्री लिहिणे आणि तपशील अद्यतनित करणे यासाठी मौल्यवान पैसा आणि वेळ खर्च करावा लागला आणि मी फक्त एक विद्यार्थी आहे. कृपया खाली पेटीएम किंवा इतर यूपीआय पद्धतीद्वारे देणगी देण्याचा विचार करा.
                <br/>
                <br/>
                <QRWrapper>
                    <QRImage src={ QRCode } />
                </QRWrapper>
                <br/>
                Or
                <br/>
                <br/>
                <div><b>Name:</b> Victor A. Sinha</div>
                <div><b>UPI Virtual ID:</b> 917384999678@federal</div>
                <div><b>Account Number:</b> 99980100150890</div>
                <div><b>IFSC Code:</b> FDRL0001438</div>
            </Body>
        )
    },
    NEPALI: {
        title: () => (
            <Title>अब के?</Title>
        ),
        body: () => (
            <Body>
                यो जानकारी साझा गर्नुहोस् र तपाईंको साथी र परिवार बीच जागरूकता फैलाउनुहोस्। व्हाट्सएप खोल्न तल क्लिक गर्नुहोस्।
                <br/>
                <br/>
                <div style={{ display: 'inline-block' }}>
                    <WhatsAppShare href="https://wa.me/?text=%E0%A4%A4%E0%A4%AA%E0%A4%BE%E0%A4%88%E0%A4%82+%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A5%8B%E0%A4%A8%E0%A4%BE%E0%A4%AD%E0%A4%BE%E0%A4%87%E0%A4%B0%E0%A4%B8%E0%A4%95%E0%A5%8B+%E0%A4%B2%E0%A4%BE%E0%A4%97%E0%A4%BF+%E0%A4%95%E0%A4%B8%E0%A4%B0%E0%A5%80+%E0%A4%A4%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A5%80+%E0%A4%97%E0%A4%B0%E0%A5%8D%E0%A4%A8+%E0%A4%B8%E0%A4%95%E0%A5%8D%E0%A4%A8%E0%A5%81%E0%A4%B9%E0%A5%81%E0%A4%A8%E0%A5%8D%E0%A4%9B%3F+%E0%A4%AF%E0%A4%B9%E0%A4%BE%E0%A4%81+%E0%A4%AA%E0%A4%A2%E0%A5%8D%E0%A4%A8%E0%A5%81%E0%A4%B9%E0%A5%8B%E0%A4%B8%E0%A5%8D%3A+https%3A%2F%2Fprepkarona.in?lang=NEPALI%0D%0A%0D%0A%E0%A4%AF%E0%A4%B8%E0%A4%B2%E0%A4%BE%E0%A4%88+%E0%A4%A4%E0%A4%AA%E0%A4%BE%E0%A4%87%E0%A4%81%E0%A4%95%E0%A4%BE+%E0%A4%B8%E0%A4%BE%E0%A4%A5%E0%A5%80%E0%A4%B9%E0%A4%B0%E0%A5%82%E0%A4%B8%E0%A4%81%E0%A4%97+%E0%A4%B8%E0%A4%BE%E0%A4%9D%E0%A4%BE+%E0%A4%97%E0%A4%B0%E0%A5%8D%E0%A4%A8%E0%A5%81%E0%A4%B9%E0%A5%8B%E0%A4%B8%E0%A5%8D%E0%A5%A4+%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4+%E0%A4%B0%E0%A4%B9%E0%A4%A8%E0%A5%81%E0%A4%B9%E0%A5%8B%E0%A4%B8%E0%A5%8D%21">
                        <WhatsApp src={ WhatsAppLogo } />
                        वाट्सएपमा साझेदारी गर्नुहोस्
                    </WhatsAppShare>
                </div>
                <br/>
                <br/>
                यस वेबसाइटलाई होस्टिंग गर्दै, सामग्री लेख्न, र विवरणहरू अद्यावधिक गर्दा मूल्यवान पैसा र समय खर्च भयो, र म मात्र एक विद्यार्थी हुँ। कृपया तल PayTm वा अन्य UPI विधिहरू मार्फत दान गर्ने विचार गर्नुहोस्।
                <br/>
                <br/>
                <QRWrapper>
                    <QRImage src={ QRCode } />
                </QRWrapper>
                <br/>
                Or
                <br/>
                <br/>
                <div><b>Name:</b> Victor A. Sinha</div>
                <div><b>UPI Virtual ID:</b> 917384999678@federal</div>
                <div><b>Account Number:</b> 99980100150890</div>
                <div><b>IFSC Code:</b> FDRL0001438</div>
            </Body>
        )
    },
    TAMIL: {
        title: () => (
            <Title>அடுத்து என்ன?</Title>
        ),
        body: () => (
            <Body>
                இந்த தகவலைப் பகிரவும், உங்கள் நண்பர்கள் மற்றும் குடும்பத்தினரிடையே விழிப்புணர்வைப் பரப்பவும். வாட்ஸ்அப்பைத் திறக்க கீழே கிளிக் செய்க.
                <br/>
                <br/>
                <div style={{ display: 'inline-block' }}>
                    <WhatsAppShare href="https://wa.me/?text=%E0%AE%95%E0%AF%8A%E0%AE%B0%E0%AF%8B%E0%AE%A9%E0%AE%BE+%E0%AE%B5%E0%AF%88%E0%AE%B0%E0%AE%B8%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81+%E0%AE%A8%E0%AF%80%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%8D+%E0%AE%8E%E0%AE%B5%E0%AF%8D%E0%AE%B5%E0%AE%BE%E0%AE%B1%E0%AF%81+%E0%AE%A4%E0%AE%AF%E0%AE%BE%E0%AE%B0%E0%AF%8D+%E0%AE%9A%E0%AF%86%E0%AE%AF%E0%AF%8D%E0%AE%AF%E0%AE%B2%E0%AE%BE%E0%AE%AE%E0%AF%8D%3F+%E0%AE%87%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AF%87+%E0%AE%AA%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%B5%E0%AF%81%E0%AE%AE%E0%AF%8D%3A+https%3A%2F%2Fprepkarona.in?lang=TAMIL%0D%0A%0D%0A%E0%AE%87%E0%AE%A4%E0%AF%88+%E0%AE%89%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%8D+%E0%AE%A8%E0%AE%A3%E0%AF%8D%E0%AE%AA%E0%AE%B0%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%81%E0%AE%9F%E0%AE%A9%E0%AF%8D+%E0%AE%AA%E0%AE%95%E0%AE%BF%E0%AE%B0%E0%AF%8D%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AF%81+%E0%AE%95%E0%AF%8A%E0%AE%B3%E0%AF%8D%E0%AE%B3%E0%AF%81%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%8D.+%E0%AE%AA%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AE%AE%E0%AE%BE%E0%AE%95+%E0%AE%87%E0%AE%B0%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%B5%E0%AF%81%E0%AE%AE%E0%AF%8D%21">
                        <WhatsApp src={ WhatsAppLogo } />
                        வாட்ஸ்அப்பில் பகிரவும்
                    </WhatsAppShare>
                </div>
                <br/>
                <br/>
                இந்த வலைத்தளத்தை ஹோஸ்ட் செய்வது, உள்ளடக்கத்தை எழுதுவது மற்றும் விவரங்களை புதுப்பிப்பது விலைமதிப்பற்ற பணம் மற்றும் நேரத்தை செலவழிக்கிறது, நான் ஒரு மாணவன். கீழே உள்ள PayTm அல்லது பிற UPI முறைகள் வழியாக நன்கொடை அளிப்பதைக் கவனியுங்கள்.
                <br/>
                <br/>
                <QRWrapper>
                    <QRImage src={ QRCode } />
                </QRWrapper>
                <br/>
                Or
                <br/>
                <br/>
                <div><b>Name:</b> Victor A. Sinha</div>
                <div><b>UPI Virtual ID:</b> 917384999678@federal</div>
                <div><b>Account Number:</b> 99980100150890</div>
                <div><b>IFSC Code:</b> FDRL0001438</div>
            </Body>
        )
    },
    TELUGU: {
        title: () => (
            <Title>తర్వాత ఏంటి?</Title>
        ),
        body: () => (
            <Body>
                ఈ సమాచారాన్ని భాగస్వామ్యం చేయండి మరియు మీ స్నేహితులు మరియు కుటుంబ సభ్యులలో అవగాహన పెంచుకోండి. వాట్సాప్ తెరవడానికి క్రింద క్లిక్ చేయండి.
                <br/>
                <br/>
                <div style={{ display: 'inline-block' }}>
                    <WhatsAppShare href="https://wa.me/?text=%E0%B0%95%E0%B0%B0%E0%B1%8B%E0%B0%A8%E0%B0%BE%E0%B0%B5%E0%B1%88%E0%B0%B0%E0%B0%B8%E0%B1%8D+%E0%B0%95%E0%B1%8B%E0%B0%B8%E0%B0%82+%E0%B0%AE%E0%B1%80%E0%B0%B0%E0%B1%81+%E0%B0%8E%E0%B0%B2%E0%B0%BE+%E0%B0%B8%E0%B0%BF%E0%B0%A6%E0%B1%8D%E0%B0%A7%E0%B0%82+%E0%B0%9A%E0%B1%87%E0%B0%AF%E0%B0%B5%E0%B0%9A%E0%B1%8D%E0%B0%9A%E0%B1%81%3F+%E0%B0%87%E0%B0%95%E0%B1%8D%E0%B0%95%E0%B0%A1+%E0%B0%9A%E0%B0%A6%E0%B0%B5%E0%B0%82%E0%B0%A1%E0%B0%BF%3A+https%3A%2F%2Fprepkarona.in?lang=TELUGU%0D%0A%0D%0A%E0%B0%A6%E0%B1%80%E0%B0%A8%E0%B1%8D%E0%B0%A8%E0%B0%BF+%E0%B0%AE%E0%B1%80+%E0%B0%B8%E0%B1%8D%E0%B0%A8%E0%B1%87%E0%B0%B9%E0%B0%BF%E0%B0%A4%E0%B1%81%E0%B0%B2%E0%B0%A4%E0%B1%8B+%E0%B0%AA%E0%B0%82%E0%B0%9A%E0%B1%81%E0%B0%95%E0%B1%8B%E0%B0%82%E0%B0%A1%E0%B0%BF.+%E0%B0%B8%E0%B1%81%E0%B0%B0%E0%B0%95%E0%B1%8D%E0%B0%B7%E0%B0%BF%E0%B0%A4%E0%B0%82%E0%B0%97%E0%B0%BE+%E0%B0%89%E0%B0%82%E0%B0%A1%E0%B0%82%E0%B0%A1%E0%B0%BF%21">
                        <WhatsApp src={ WhatsAppLogo } />
                        వాట్సాప్‌లో షేర్ చేయండి
                    </WhatsAppShare>
                </div>
                <br/>
                <br/>
                ఈ వెబ్‌సైట్‌ను హోస్ట్ చేయడం, కంటెంట్ రాయడం మరియు వివరాలను నవీకరించడం విలువైన డబ్బు మరియు సమయాన్ని ఖర్చు చేస్తుంది మరియు నేను కేవలం విద్యార్థిని. దయచేసి క్రింద PayTm లేదా ఇతర UPI పద్ధతుల ద్వారా విరాళం ఇవ్వండి.
                <br/>
                <br/>
                <QRWrapper>
                    <QRImage src={ QRCode } />
                </QRWrapper>
                <br/>
                Or
                <br/>
                <br/>
                <div><b>Name:</b> Victor A. Sinha</div>
                <div><b>UPI Virtual ID:</b> 917384999678@federal</div>
                <div><b>Account Number:</b> 99980100150890</div>
                <div><b>IFSC Code:</b> FDRL0001438</div>
            </Body>
        )
    },
    URDU: {
        title: () => (
            <Title>آگے کیا؟</Title>
        ),
        body: () => (
            <Body>
                اس معلومات کو شیئر کریں اور اپنے دوستوں اور کنبہ والوں میں آگاہی پھیلائیں۔ واٹس ایپ کھولنے کے لئے نیچے کلک کریں۔
                <br/>
                <br/>
                <div style={{ display: 'inline-block' }}>
                    <WhatsAppShare href="https://wa.me/?text=%D8%A2%D9%BE+%DA%A9%D9%88%D8%B1%D9%88%D9%86%D8%A7+%D9%88%D8%A7%D8%A6%D8%B1%D8%B3+%DA%A9%DB%8C+%D8%AA%DB%8C%D8%A7%D8%B1%DB%8C+%DA%A9%DB%8C%D8%B3%DB%92+%DA%A9%D8%B1%D8%B3%DA%A9%D8%AA%DB%92+%DB%81%DB%8C%DA%BA%D8%9F+%DB%8C%DB%81%D8%A7%DA%BA+%D9%BE%DA%91%DA%BE%DB%8C%DA%BA%3A+https%3A%2F%2Fprepkarona.in?lang=URDU%0D%0A%0D%0A%D8%A7%D8%B3%DB%92+%D8%A7%D9%BE%D9%86%DB%92+%D8%AF%D9%88%D8%B3%D8%AA%D9%88%DA%BA+%DA%A9%DB%92+%D8%B3%D8%A7%D8%AA%DA%BE+%D8%B4%DB%8C%D8%A6%D8%B1+%DA%A9%D8%B1%DB%8C%DA%BA%DB%94+%D9%85%D8%AD%D9%81%D9%88%D8%B8+%D8%B1%DB%81%D9%88%21">
                        <WhatsApp src={ WhatsAppLogo } />
                        واٹس ایپ پر شئیر کریں
                    </WhatsAppShare>
                </div>
                <br/>
                <br/>
                اس ویب سائٹ کی میزبانی کرنا ، مواد لکھنا ، اور تفصیلات کو اپ ڈیٹ کرنے میں قیمتی رقم اور وقت کی لاگت آتی ہے ، اور میں صرف ایک طالب علم ہوں۔ براہ کرم ذیل میں پے ٹی ایم یا دیگر یوپیآئ طریقوں کے ذریعے عطیہ کرنے پر غور کریں۔
                <br/>
                <br/>
                <QRWrapper>
                    <QRImage src={ QRCode } />
                </QRWrapper>
                <br/>
                Or
                <br/>
                <br/>
                <div><b>Name:</b> Victor A. Sinha</div>
                <div><b>UPI Virtual ID:</b> 917384999678@federal</div>
                <div><b>Account Number:</b> 99980100150890</div>
                <div><b>IFSC Code:</b> FDRL0001438</div>
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
        <div>
            { TitleContent(LANGUAGE) }
            { BodyContent(LANGUAGE) }
        </div>
    )
} 

function WhatNext(props) {
    return (
        <Wrapper id="whatnext" global={ props.global }>
            <Content global={ props.global }/>
        </Wrapper>
    )
}


// PropTypes:
WhatNext.propTypes = {
    global: PropTypes.object.isRequired,
    reduxProps: PropTypes.object.isRequired
};


// Exports:
export default connect(mapStateToProps, mapDispatchToProps)(WhatNext);