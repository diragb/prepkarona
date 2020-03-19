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
    padding: 2.5em 22em;
    padding-left: 4em;
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
    margin-right: 6vw;
    font-size: 1em;
    font-weight: 500;
    color: #81ecec;

    @media only screen and (max-width: 768px) {
        font-size: 1.3em;
    }
`;

const ListItem = styled.li`
    margin-top: 0.5em;
`;

const ListPoint = styled.a`
    font-weight: 700;
    color: #e84393;

    &::selection {
        padding: 1em;
        color: #0984e3;
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


// Content:
const CONTENT = {
    ENGLISH: {
        title: () => (
            <Title>What are the symptoms?</Title>
        ),
        body: () => (
            <Body>
                Most of the coronavirus symptoms<Reference target="_blank" href="https://www.nejm.org/doi/full/10.1056/NEJMoa2002032"><Superscript>6</Superscript></Reference> <Reference target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext"><Superscript>7</Superscript></Reference> are similar to the symptoms of common cold, which is what makes it so hard to detect without a medical test: 
                <br/>
                <ul>
                    <ListItem><ListPoint>A fever:</ListPoint> Half of the people infected with the coronavirus developed a fever, but note that common cold/flu will also make you sick. So if you're feeling sick, it doesn't mean you are infected with the coronavirus. Take ample rest and drink enough water, and keep yourself under observation.</ListItem>
                    <ListItem><ListPoint>Dry cough:</ListPoint> More than half of the infected cases developed <b>dry</b> cough, which seems to distinguish a coronavirus infection from the common cold.</ListItem>
                    <ListItem><ListPoint>Muscle pain or tiredness:</ListPoint> Half of the infected cases had muscle pain and/or felt generally tired.</ListItem>
                    <ListItem><ListPoint>Difficulty breathing:</ListPoint> Half of the patients faced great difficulty in breathing.</ListItem>
                </ul>
                If you develop a fever, experience muscle pain, and especially, <b>suffer from dry cough</b> -- please contact 011-23978046 (The Indian National Helpline Number), or contact a nearby hospital and get checked for the coronavirus.
                Remember, this is the flu season. If you experience these symptoms, it does not guarantee that you are infected. Don't panic, and get checked out instead.
                <br/>
                <br/>
                If you want to get tested, you may also visit the nearest Test Center near you: <a target="_blank" style={{ textDecoration: 'none', color: '#0984e3', fontWeight: 'bold', wordWrap: 'break-word', wordWrap: 'break-word' }} href="https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf">https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf</a>
                <br/>
                <br/>
                While there is no cure for the coronavirus, doctors can treat your symptoms and make you feel better while your strong immune system fights the virus.
            </Body>
        )
    },
    HINDI: {
        title: () => (
            <Title>लक्षण क्या हैं?</Title>
        ),
        body: () => (
            <Body>
                कोरोनोवायरस के अधिकांश लक्षण<Reference target="_blank" href="https://www.nejm.org/doi/full/10.1056/NEJMoa2002032"><Superscript>6</Superscript></Reference> <Reference target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext"><Superscript>7</Superscript></Reference> आम सर्दी के लक्षणों के समान हैं, जो कि बिना चिकित्सीय परीक्षण के पता लगाना कितना कठिन है:
                <br/>
                <ul>
                    <ListItem><ListPoint>बुखार:</ListPoint> कोरोनावायरस से संक्रमित आधे लोगों ने बुखार का विकास किया, लेकिन ध्यान दें कि सामान्य सर्दी / फ्लू भी आपको बीमार कर देगा। इसलिए यदि आप बीमार महसूस कर रहे हैं, तो इसका मतलब यह नहीं है कि आप कोरोनावायरस से संक्रमित हैं। पर्याप्त आराम करें और पर्याप्त पानी पिएं, और अपने आप को निगरानी में रखें।</ListItem>
                    <ListItem><ListPoint>सूखी खाँसी:</ListPoint> संक्रमित मामलों में से आधे से अधिक विकसित <b>सूखी</b> खांसी, जो सामान्य सर्दी से कोरोनोवायरस संक्रमण को भेद करने के लिए लगता है।</ListItem>
                    <ListItem><ListPoint>मांसपेशियों में दर्द या थकान:</ListPoint> संक्रमित मामलों में से आधे में मांसपेशियों में दर्द और / या आमतौर पर थका हुआ महसूस होता था।</ListItem>
                    <ListItem><ListPoint>सांस लेने मे तकलीफ:</ListPoint> आधे रोगियों को साँस लेने में बड़ी कठिनाई का सामना करना पड़ा।</ListItem>
                </ul>
                यदि आप बुखार का विकास करते हैं, मांसपेशियों में दर्द का अनुभव करते हैं, और विशेष रूप से, <b>सूखी खाँसी से पीड़ित हैं</b> - कृपया 011-23978046 (भारतीय राष्ट्रीय हेल्पलाइन नंबर) से संपर्क करें, या नजदीकी अस्पताल से संपर्क करें और कोरोनावायरस की जांच करवाएं।
                याद रखें, यह फ्लू का मौसम है। यदि आप इन लक्षणों का अनुभव करते हैं, तो यह गारंटी नहीं देता है कि आप संक्रमित हैं। घबराओ मत, और इसके बजाय बाहर की जाँच करें।
                <br/>
                <br/>
                यदि आप परीक्षण करवाना चाहते हैं, तो आप अपने नज़दीकी निकटतम परीक्षण केंद्र पर भी जा सकते हैं: <a target="_blank" style={{ textDecoration: 'none', color: '#0984e3', fontWeight: 'bold', wordWrap: 'break-word', wordWrap: 'break-word' }} href="https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf">https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf</a>
                <br/>
                <br/>
                जबकि कोरोनावायरस का कोई इलाज नहीं है, डॉक्टर आपके लक्षणों का इलाज कर सकते हैं और आपको बेहतर महसूस करा सकते हैं, जबकि आपका मजबूत प्रतिरक्षा प्रणाली वायरस से लड़ता है।
            </Body>
        )
    },
    BENGALI: {
        title: () => (
            <Title>উপসর্গ গুলো কি?</Title>
        ),
        body: () => (
            <Body>
                করোন ভাইরাস বেশিরভাগ লক্ষণ<Reference target="_blank" href="https://www.nejm.org/doi/full/10.1056/NEJMoa2002032"><Superscript>6</Superscript></Reference> <Reference target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext"><Superscript>7</Superscript></Reference> are similar to the symptoms of common cold, which is what makes it so hard to detect without a medical test: 
                <br/>
                <ul>
                    <ListItem><ListPoint>জ্বর:</ListPoint> করোনাভাইরাসে আক্রান্ত অর্ধেক লোক জ্বরে আক্রান্ত হয়েছিল, তবে লক্ষ করুন যে সাধারণ সর্দি / ফ্লু আপনাকে অসুস্থ করে তুলবে। সুতরাং আপনি যদি অসুস্থ বোধ করছেন তবে এর অর্থ এই নয় যে আপনি করোনাভাইরাসতে আক্রান্ত হয়েছেন। পর্যাপ্ত বিশ্রাম নিন এবং পর্যাপ্ত জল পান করুন এবং নিজেকে পর্যবেক্ষণে রাখুন।</ListItem>
                    <ListItem><ListPoint>শুষ্ক কাশি:</ListPoint> আক্রান্তের অর্ধেকেরও বেশি ক্ষেত্রে কাশির বিকাশ ঘটেছিল, যা সাধারণ সর্দি থেকে করোনাভাইরাস সংক্রমণকে আলাদা বলে মনে হয়।</ListItem>
                    <ListItem><ListPoint>পেশী ব্যথা বা ক্লান্তি:</ListPoint> সংক্রামিত অর্ধেকের ক্ষেত্রে মাংসপেশীতে ব্যথা হয় এবং / অথবা সাধারণত ক্লান্তি অনুভূত হয়।</ListItem>
                    <ListItem><ListPoint>শ্বাসকষ্ট:</ListPoint> অর্ধেক রোগী শ্বাস নিতে দারুণ অসুবিধার সম্মুখীন হন।</ListItem>
                </ul>
                যদি আপনার জ্বর হয়, পেশীর ব্যথা অনুভব করে এবং বিশেষত, <b>শুকনো কাশিতে ভুগছেন</b> - দয়া করে 011-23978046 (ইন্ডিয়ান ন্যাশনাল হেল্পলাইন নম্বর) -এ যোগাযোগ করুন বা নিকটস্থ হাসপাতালের সাথে যোগাযোগ করুন এবং করোনভাইরাসটি পরীক্ষা করুন ।
                মনে রাখবেন, এটি ফ্লুর মরসুম। আপনি যদি এই লক্ষণগুলি অনুভব করেন তবে এটির কোনও গ্যারান্টি নেই যে আপনি আক্রান্ত। আতঙ্কিত হবেন না, এবং পরিবর্তে চেক আউট করুন।
                <br/>
                <br/>
                আপনি যদি পরীক্ষা নিতে চান, আপনি আপনার নিকটতম নিকটতম পরীক্ষা কেন্দ্রটিও দেখতে পারেন: <a target="_blank" style={{ textDecoration: 'none', color: '#0984e3', fontWeight: 'bold', wordWrap: 'break-word', wordWrap: 'break-word' }} href="https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf">https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf</a>
                <br/>
                <br/>
                যদিও করোনভাইরাসটির কোনও নিরাময় নেই, তবে ডাক্তাররা আপনার লক্ষণগুলি চিকিত্সা করতে পারে এবং আপনাকে আরও ভাল বোধ করতে পারে যখন আপনার শক্তিশালী প্রতিরোধ ব্যবস্থা ভাইরাসের বিরুদ্ধে লড়াই করে।
            </Body>
        )
    },
    GUJARATI: {
        title: () => (
            <Title>લક્ષણો શું છે?</Title>
        ),
        body: () => (
            <Body>
                મોટાભાગે કોરોનાવાયરસ લક્ષણો<Reference target="_blank" href="https://www.nejm.org/doi/full/10.1056/NEJMoa2002032"><Superscript>6</Superscript></Reference> <Reference target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext"><Superscript>7</Superscript></Reference> are similar to the symptoms of common cold, which is what makes it so hard to detect without a medical test: 
                <br/>
                <ul>
                    <ListItem><ListPoint>તાવ:</ListPoint> કોરોનાવાયરસથી સંક્રમિત અડધા લોકોને તાવ થયો છે, પરંતુ નોંધ કરો કે સામાન્ય શરદી / ફ્લૂ તમને બીમાર પણ કરશે. તેથી જો તમે બીમાર અનુભવો છો, તો તેનો અર્થ એ નથી કે તમને કોરોનાવાયરસથી ચેપ લાગ્યો છે. પૂરતો આરામ લો અને પૂરતું પાણી પીવો, અને તમારી જાતને નિરીક્ષણમાં રાખો.</ListItem>
                    <ListItem><ListPoint>સુકી ઉધરસ:</ListPoint> અડધાથી વધુ ચેપગ્રસ્ત કેસો <b> શુષ્ક </ b> ઉધરસ વિકસાવે છે, જે સામાન્ય શરદીથી કોરોનાવાયરસ ચેપને અલગ બતાવે છે.</ListItem>
                    <ListItem><ListPoint>સ્નાયુમાં દુખાવો અથવા થાક:</ListPoint> ચેપગ્રસ્ત કેસોમાંથી અડધામાં સ્નાયુઓમાં દુખાવો હતો અને / અથવા સામાન્ય રીતે થાક લાગ્યો હતો.</ListItem>
                    <ListItem><ListPoint>શ્વાસ લેવામાં તકલીફ:</ListPoint> અડધા દર્દીઓએ શ્વાસ લેવામાં ભારે મુશ્કેલીનો સામનો કરવો પડ્યો હતો.</ListItem>
                </ul>
                જો તમને તાવ આવે છે, સ્નાયુઓમાં દુખાવો થાય છે અને ખાસ કરીને <b> શુષ્ક ઉધરસથી પીડાય છે </ b> - કૃપા કરીને 011-23978046 (ભારતીય રાષ્ટ્રીય હેલ્પલાઈન નંબર) નો સંપર્ક કરો અથવા નજીકની હોસ્પિટલમાં સંપર્ક કરો અને કોરોનાવાયરસની તપાસ કરો. .
                યાદ રાખો, આ ફલૂની મોસમ છે. જો તમે આ લક્ષણોનો અનુભવ કરો છો, તો તે બાંહેધરી આપતું નથી કે તમને ચેપ લાગ્યો છે. ગભરાશો નહીં, અને તેના બદલે તપાસો.
                <br/>
                <br/>
                જો તમે પરીક્ષણ મેળવવા માંગતા હો, તો તમે તમારી નજીકના નજીકના ટેસ્ટ સેન્ટરની મુલાકાત પણ લઈ શકો છો: <a target="_blank" style={{ textDecoration: 'none', color: '#0984e3', fontWeight: 'bold', wordWrap: 'break-word' }} href="https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf">https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf</a>
                <br/>
                <br/>
                જ્યારે કોરોનાવાયરસ માટે કોઈ ઉપાય નથી, ત્યારે ડ doctorsક્ટર તમારા લક્ષણોની સારવાર કરી શકે છે અને તમને વધુ સારું લાગે છે જ્યારે તમારી મજબૂત રોગપ્રતિકારક શક્તિ વાયરસ સામે લડે છે.
            </Body>
        )
    },
    PUNJABI: {
        title: () => (
            <Title>ਲੱਛਣ ਕੀ ਹਨ?</Title>
        ),
        body: () => (
            <Body>
                ਜ਼ਿਆਦਾਤਰ ਕੋਰੋਨਾਵਾਇਰਸ ਦੇ ਲੱਛਣ<Reference target="_blank" href="https://www.nejm.org/doi/full/10.1056/NEJMoa2002032"><Superscript>6</Superscript></Reference> <Reference target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext"><Superscript>7</Superscript></Reference> ਆਮ ਜ਼ੁਕਾਮ ਦੇ ਲੱਛਣਾਂ ਦੇ ਸਮਾਨ ਹੁੰਦੇ ਹਨ, ਜੋ ਡਾਕਟਰੀ ਜਾਂਚ ਤੋਂ ਬਿਨਾਂ ਪਤਾ ਲਗਾਉਣਾ ਇੰਨਾ ਮੁਸ਼ਕਲ ਬਣਾਉਂਦਾ ਹੈ: 
                <br/>
                <ul>
                    <ListItem><ListPoint>ਬੁਖਾਰ:</ListPoint> ਕੋਰੋਨਾਵਾਇਰਸ ਨਾਲ ਸੰਕਰਮਿਤ ਅੱਧੇ ਲੋਕਾਂ ਨੂੰ ਬੁਖਾਰ ਹੋ ਗਿਆ, ਪਰ ਯਾਦ ਰੱਖੋ ਕਿ ਆਮ ਜ਼ੁਕਾਮ / ਫਲੂ ਤੁਹਾਨੂੰ ਬਿਮਾਰ ਵੀ ਬਣਾ ਦਿੰਦਾ ਹੈ. ਇਸ ਲਈ ਜੇ ਤੁਸੀਂ ਬਿਮਾਰ ਮਹਿਸੂਸ ਕਰ ਰਹੇ ਹੋ, ਤਾਂ ਇਸਦਾ ਮਤਲਬ ਇਹ ਨਹੀਂ ਕਿ ਤੁਸੀਂ ਕੋਰੋਨਵਾਇਰਸ ਨਾਲ ਸੰਕਰਮਿਤ ਹੋ. ਕਾਫ਼ੀ ਆਰਾਮ ਲਓ ਅਤੇ ਕਾਫ਼ੀ ਪਾਣੀ ਪੀਓ, ਅਤੇ ਆਪਣੇ ਆਪ ਨੂੰ ਨਿਗਰਾਨੀ ਹੇਠ ਰੱਖੋ.</ListItem>
                    <ListItem><ListPoint>ਖੁਸ਼ਕੀ ਖੰਘ:</ListPoint> ਅੱਧੇ ਤੋਂ ਵੱਧ ਸੰਕਰਮਿਤ ਮਾਮਲਿਆਂ ਵਿੱਚ <b> ਖੁਸ਼ਕ </ b> ਖੰਘ ਵਿਕਸਤ ਹੋਈ ਹੈ, ਜੋ ਕਿ ਇੱਕ ਕੋਰੋਨਾਵਾਇਰਸ ਦੀ ਲਾਗ ਨੂੰ ਆਮ ਜ਼ੁਕਾਮ ਤੋਂ ਵੱਖਰਾ ਜਾਪਦੀ ਹੈ.</ListItem>
                    <ListItem><ListPoint>ਮਾਸਪੇਸ਼ੀ ਵਿਚ ਦਰਦ ਜਾਂ ਥਕਾਵਟ:</ListPoint> ਲਾਗ ਵਾਲੇ ਮਾਮਲਿਆਂ ਵਿਚੋਂ ਅੱਧ ਵਿਚ ਮਾਸਪੇਸ਼ੀਆਂ ਦਾ ਦਰਦ ਹੁੰਦਾ ਸੀ ਅਤੇ / ਜਾਂ ਆਮ ਤੌਰ ਤੇ ਥੱਕੇ ਮਹਿਸੂਸ ਹੁੰਦੇ ਸਨ.</ListItem>
                    <ListItem><ListPoint>ਸਾਹ ਲੈਣ ਵਿਚ ਮੁਸ਼ਕਲ:</ListPoint> ਅੱਧੇ ਮਰੀਜ਼ਾਂ ਨੂੰ ਸਾਹ ਲੈਣ ਵਿੱਚ ਬਹੁਤ ਮੁਸ਼ਕਲ ਆਈ.</ListItem>
                </ul>
                ਜੇ ਤੁਹਾਨੂੰ ਬੁਖਾਰ ਹੋ ਜਾਂਦਾ ਹੈ, ਮਾਸਪੇਸ਼ੀਆਂ ਦੇ ਦਰਦ ਦਾ ਅਨੁਭਵ ਹੁੰਦਾ ਹੈ, ਅਤੇ ਖ਼ਾਸਕਰ <b> ਖੁਸ਼ਕ ਖੰਘ ਤੋਂ ਪੀੜਤ ਹੈ </ b> - ਕਿਰਪਾ ਕਰਕੇ 011-23978046 (ਇੰਡੀਅਨ ਨੈਸ਼ਨਲ ਹੈਲਪਲਾਈਨ ਨੰਬਰ) ਨਾਲ ਸੰਪਰਕ ਕਰੋ, ਜਾਂ ਕਿਸੇ ਨੇੜਲੇ ਹਸਪਤਾਲ ਨਾਲ ਸੰਪਰਕ ਕਰੋ ਅਤੇ ਕੋਰੋਨਵਾਇਰਸ ਦੀ ਜਾਂਚ ਕਰੋ. .
                ਯਾਦ ਰੱਖੋ, ਇਹ ਫਲੂ ਦਾ ਮੌਸਮ ਹੈ. ਜੇ ਤੁਸੀਂ ਇਨ੍ਹਾਂ ਲੱਛਣਾਂ ਦਾ ਅਨੁਭਵ ਕਰਦੇ ਹੋ, ਤਾਂ ਇਹ ਇਸ ਗੱਲ ਦੀ ਗਰੰਟੀ ਨਹੀਂ ਦਿੰਦਾ ਕਿ ਤੁਸੀਂ ਸੰਕਰਮਿਤ ਹੋ. ਘਬਰਾਓ ਨਾ, ਅਤੇ ਇਸਦੀ ਬਜਾਏ ਚੈੱਕ ਆ getਟ ਕਰੋ.
                <br/>
                <br/>
                ਜੇ ਤੁਸੀਂ ਟੈਸਟ ਕਰਵਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਆਪਣੇ ਨਜ਼ਦੀਕੀ ਟੈਸਟ ਸੈਂਟਰ ਵੀ ਜਾ ਸਕਦੇ ਹੋ: <a target="_blank" style={{ textDecoration: 'none', color: '#0984e3', fontWeight: 'bold', wordWrap: 'break-word' }} href="https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf">https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf</a>
                <br/>
                <br/>
                ਹਾਲਾਂਕਿ ਕੋਰੋਨਾਵਾਇਰਸ ਦਾ ਕੋਈ ਇਲਾਜ਼ ਨਹੀਂ ਹੈ, ਡਾਕਟਰ ਤੁਹਾਡੇ ਲੱਛਣਾਂ ਦਾ ਇਲਾਜ ਕਰ ਸਕਦੇ ਹਨ ਅਤੇ ਤੁਹਾਨੂੰ ਬਿਹਤਰ ਮਹਿਸੂਸ ਕਰਾ ਸਕਦੇ ਹਨ ਜਦੋਂ ਕਿ ਤੁਹਾਡੀ ਮਜ਼ਬੂਤ ​​ਪ੍ਰਤੀਰੋਧੀ ਸਿਸਟਮ ਵਾਇਰਸ ਨਾਲ ਲੜਦਾ ਹੈ.
            </Body>
        )
    },
    MARATHI: {
        title: () => (
            <Title>याची लक्षणे कोणती?</Title>
        ),
        body: () => (
            <Body>
                कोरोनाव्हायरसची बहुतेक लक्षणे<Reference target="_blank" href="https://www.nejm.org/doi/full/10.1056/NEJMoa2002032"><Superscript>6</Superscript></Reference> <Reference target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext"><Superscript>7</Superscript></Reference> सामान्य सर्दीच्या लक्षणांसारखेच असतात, जे वैद्यकीय चाचण्याशिवाय शोधणे इतके कठीण करते:
                <br/>
                <ul>
                    <ListItem><ListPoint>ताप:</ListPoint> कोरोनाव्हायरस संसर्ग झालेल्या अर्ध्या लोकांना ताप आला, परंतु लक्षात घ्या की सामान्य सर्दी / फ्लू देखील आपल्याला आजारी करेल. म्हणून जर आपण आजारी वाटत असाल तर याचा अर्थ असा नाही की आपण कोरोनाव्हायरसने संक्रमित आहात. पुरेसे विश्रांती घ्या आणि पुरेसे पाणी प्या आणि स्वत: ला निरीक्षणाखाली ठेवा.</ListItem>
                    <ListItem><ListPoint>कोरडा खोकला:</ListPoint> अर्ध्याहून अधिक संसर्ग झालेल्या खोकल्यांमध्ये <b> कोरडे </ b> खोकला तयार झाला आहे, ज्यास सामान्य सर्दीपासून कोरोनाव्हायरस संसर्गाचे वेगळेपण दिसते.</ListItem>
                    <ListItem><ListPoint>स्नायू वेदना किंवा थकवा:</ListPoint> संक्रमित अर्ध्या प्रकरणांमध्ये स्नायू दुखणे आणि / किंवा सामान्यत: कंटाळा आला होता.</ListItem>
                    <ListItem><ListPoint>श्वास घेण्यात अडचण:</ListPoint> अर्ध्या रूग्णांना श्वासोच्छ्वास घेण्यात मोठी अडचण आली.</ListItem>
                </ul>
                आपणास ताप झाल्यास, स्नायूंमध्ये वेदना जाणवत असल्यास आणि विशेषत: <b> कोरड्या खोकल्याचा त्रास आहे </ b> - कृपया 011-23978046 (भारतीय राष्ट्रीय हेल्पलाइन नंबर) वर संपर्क साधा किंवा जवळच्या रुग्णालयात संपर्क साधा आणि कोरोनाव्हायरसची तपासणी करा. .
                लक्षात ठेवा, हा फ्लूचा हंगाम आहे. आपण ही लक्षणे अनुभवल्यास, आपण संक्रमित असल्याची हमी देत ​​नाही. घाबरू नका आणि त्याऐवजी तपासून पहा.
                <br/>
                <br/>
                जर आपल्याला चाचणी घ्यायची असेल तर आपण जवळच्या चाचणी केंद्रास देखील भेट देऊ शकता: <a target="_blank" style={{ textDecoration: 'none', color: '#0984e3', fontWeight: 'bold', wordWrap: 'break-word' }} href="https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf">https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf</a>
                <br/>
                <br/>
                कोरोनाव्हायरसवर कोणताही उपचार नसतानाही, डॉक्टर आपल्या लक्षणेवर उपचार करू शकतात आणि आपली रोगप्रतिकारक शक्ती मजबूत व्हायरसशी लढत असताना आपल्याला बरे वाटू शकतात.
            </Body>
        )
    },
    NEPALI: {
        title: () => (
            <Title>यसको के लक्षणहरू छन्?</Title>
        ),
        body: () => (
            <Body>
                अधिकांश कोरोनाभाइरस लक्षणहरू<Reference target="_blank" href="https://www.nejm.org/doi/full/10.1056/NEJMoa2002032"><Superscript>6</Superscript></Reference> <Reference target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext"><Superscript>7</Superscript></Reference> सामान्य चिसोका लक्षणहरूसँग मिल्दोजुल्दो छ, जो एक मेडिकल टेस्ट बिना नै पत्ता लगाउन यति गाह्रो बनाउँछ:
                <br/>
                <ul>
                    <ListItem><ListPoint>ज्वरो:</ListPoint> कोरोनाभाइरसबाट संक्रमित आधा मानिसहरूले ज्वरो लिएका छन्, तर ध्यान दिनुहोस् कि सामान्य चिसो / फ्लूले पनि तपाईलाई बिरामी पार्छ। त्यसोभए यदि तपाईं बिरामी महसुस गर्दै हुनुहुन्छ भने, यसको मतलब यो होइन कि तपाईं कोरोनाभाइरसमा संक्रमित हुनुहुन्छ। पर्याप्त आराम लिनुहोस् र पर्याप्त पानी पिउनुहोस्, र आफैलाई अवलोकन अन्तर्गत राख्नुहोस्।</ListItem>
                    <ListItem><ListPoint>सुख्खा खोकी:</ListPoint> आधा भन्दा बढी संक्रमित केसहरू <b> सुक्खा </ b> खान्थे, जुन सामान्य चिसो देखि एक कोरोनाभाइरस संक्रमण फरक देखिन्छ।</ListItem>
                    <ListItem><ListPoint>मांसपेशी दुख्ने वा थकान:</ListPoint> आधा संक्रमित केसहरूमा मांसपेशी दुख्ने र / वा सामान्यतया थाकेको महसुस भएको थियो।</ListItem>
                    <ListItem><ListPoint>सास फेर्न गाह्रो छ:</ListPoint> आधा बिरामीहरूले सास फेर्न ठूलो कठिनाईको सामना गरे।</ListItem>
                </ul>
                यदि तपाइँ ज्वरोको विकास गर्नुहुन्छ भने मांसपेशी दुख्ने अनुभव गर्नुहोस्, र विशेष गरी <b> सुक्खा कफबाट ग्रस्त </ b> - कृपया ०११-२3977804646 (भारतीय राष्ट्रिय हेल्पलाइन नम्बर) लाई सम्पर्क गर्नुहोस्, वा नजिकको अस्पतालमा सम्पर्क गर्नुहोस् र कोरोनाभाइरसको लागि जाँच गर्नुहोस्। ।
                याद गर्नुहोस्, यो फ्लूको मौसम हो। यदि तपाईंले यी लक्षणहरू अनुभव गर्नुभयो भने, यसले ग्यारेन्टी गर्दैन कि तपाईं संक्रमित हुनुहुन्छ। नडराउनुहोस्, र सट्टामा चेक आउट हुनुहोस्।
                <br/>
                <br/>
                यदि तपाइँ परीक्षण गर्न चाहानुहुन्छ भने, तपाइँ आफ्नो नजिकको टेस्ट सेन्टर पनि हेर्न सक्नुहुन्छ: <a target="_blank" style={{ textDecoration: 'none', color: '#0984e3', fontWeight: 'bold', wordWrap: 'break-word' }} href="https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf">https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf</a>
                <br/>
                <br/>
                जबकि कोरोनाभाइरसको कुनै उपचार छैन, डाक्टरहरूले तपाईंको लक्षणहरूको उपचार गर्न सक्छन् र तपाईंलाई राम्रो महसुस गराउँदछन् जबकि तपाईंको बलियो प्रतिरक्षा प्रणालीले भाइरससँग लड्छ।
            </Body>
        )
    },
    TAMIL: {
        title: () => (
            <Title>அறிகுறிகள் என்ன?</Title>
        ),
        body: () => (
            <Body>
                கொரோனா வைரஸ் அறிகுறிகள் பெரும்பாலானவை<Reference target="_blank" href="https://www.nejm.org/doi/full/10.1056/NEJMoa2002032"><Superscript>6</Superscript></Reference> <Reference target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext"><Superscript>7</Superscript></Reference> ஜலதோஷத்தின் அறிகுறிகளைப் போலவே இருக்கின்றன, இது மருத்துவ பரிசோதனை இல்லாமல் கண்டறிவது மிகவும் கடினமானது:
                <br/>
                <ul>
                    <ListItem><ListPoint>காய்ச்சல்:</ListPoint> கொரோனா வைரஸால் பாதிக்கப்பட்டவர்களில் பாதி பேர் காய்ச்சலை உருவாக்கினர், ஆனால் பொதுவான சளி / காய்ச்சல் கூட உங்களை நோய்வாய்ப்படுத்தும் என்பதை நினைவில் கொள்க. எனவே நீங்கள் நோய்வாய்ப்பட்டிருந்தால், நீங்கள் கொரோனா வைரஸால் பாதிக்கப்பட்டுள்ளீர்கள் என்று அர்த்தமல்ல. போதுமான ஓய்வு எடுத்து, போதுமான தண்ணீர் குடிக்கவும், உங்களை நீங்களே கவனித்துக் கொள்ளுங்கள்.</ListItem>
                    <ListItem><ListPoint>வறட்டு இருமல்:</ListPoint> பாதிக்கப்பட்ட நோயாளிகளில் பாதிக்கும் மேற்பட்டவர்கள் <b> உலர் </ b> இருமலை உருவாக்கினர், இது ஜலதோஷத்திலிருந்து கொரோனா வைரஸ் தொற்றுநோயை வேறுபடுத்துகிறது.</ListItem>
                    <ListItem><ListPoint>தசை வலி அல்லது சோர்வு:</ListPoint> பாதிக்கப்பட்ட பாதிகளில் பாதி தசை வலி மற்றும் / அல்லது பொதுவாக சோர்வாக இருந்தது.</ListItem>
                    <ListItem><ListPoint>சுவாசிப்பதில் சிரமம்:</ListPoint> பாதி நோயாளிகள் சுவாசிப்பதில் பெரும் சிரமத்தை எதிர்கொண்டனர்.</ListItem>
                </ul>
                உங்களுக்கு காய்ச்சல் ஏற்பட்டால், தசை வலியை அனுபவித்தால், குறிப்பாக, <b> வறட்டு இருமலால் அவதிப்படுங்கள் </ b> - தயவுசெய்து 011-23978046 (இந்திய தேசிய உதவி எண்) ஐ தொடர்பு கொள்ளவும், அல்லது அருகிலுள்ள மருத்துவமனையை தொடர்பு கொண்டு கொரோனா வைரஸை சரிபார்க்கவும் .
                நினைவில் கொள்ளுங்கள், இது காய்ச்சல் காலம். இந்த அறிகுறிகளை நீங்கள் அனுபவித்தால், நீங்கள் பாதிக்கப்பட்டுள்ளீர்கள் என்பதற்கு இது உத்தரவாதம் அளிக்காது. பீதி அடைய வேண்டாம், அதற்கு பதிலாக சரிபார்க்கவும்.
                <br/>
                <br/>
                நீங்கள் சோதனை செய்ய விரும்பினால், உங்களுக்கு அருகிலுள்ள டெஸ்ட் மையத்தையும் பார்வையிடலாம்: <a target="_blank" style={{ textDecoration: 'none', color: '#0984e3', fontWeight: 'bold', wordWrap: 'break-word' }} href="https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf">https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf</a>
                <br/>
                <br/>
                கொரோனா வைரஸுக்கு எந்த சிகிச்சையும் இல்லை என்றாலும், மருத்துவர்கள் உங்கள் அறிகுறிகளுக்கு சிகிச்சையளித்து, உங்கள் வலுவான நோயெதிர்ப்பு அமைப்பு வைரஸுடன் போராடும்போது உங்களை நன்றாக உணர முடியும்.
            </Body>
        )
    },
    TELUGU: {
        title: () => (
            <Title>లక్షణాలు ఏమిటి?</Title>
        ),
        body: () => (
            <Body>
                కరోనావైరస్ లక్షణాలు చాలా<Reference target="_blank" href="https://www.nejm.org/doi/full/10.1056/NEJMoa2002032"><Superscript>6</Superscript></Reference> <Reference target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext"><Superscript>7</Superscript></Reference> జలుబు యొక్క లక్షణాలతో సమానంగా ఉంటాయి, ఇది వైద్య పరీక్ష లేకుండా గుర్తించడం చాలా కష్టతరం చేస్తుంది: 
                <br/>
                <ul>
                    <ListItem><ListPoint>జ్వరము:</ListPoint> కరోనావైరస్ బారిన పడిన వారిలో సగం మందికి జ్వరం వచ్చింది, కాని సాధారణ జలుబు / ఫ్లూ కూడా మిమ్మల్ని అనారోగ్యానికి గురిచేస్తుందని గమనించండి. మీరు అనారోగ్యంతో బాధపడుతుంటే, మీరు కరోనావైరస్ బారిన పడ్డారని దీని అర్థం కాదు. తగినంత విశ్రాంతి తీసుకోండి మరియు తగినంత నీరు త్రాగండి మరియు మిమ్మల్ని మీరు పరిశీలించండి.</ListItem>
                    <ListItem><ListPoint>పొడి దగ్గు:</ListPoint> సోకిన కేసులలో సగానికి పైగా <b> పొడి </ b> దగ్గును అభివృద్ధి చేసింది, ఇది జలుబు నుండి కరోనావైరస్ సంక్రమణను వేరు చేస్తుంది.</ListItem>
                    <ListItem><ListPoint>కండరాల నొప్పి లేదా అలసట:</ListPoint> సోకిన కేసులలో సగం మందికి కండరాల నొప్పి మరియు / లేదా సాధారణంగా అలసిపోయినట్లు అనిపిస్తుంది.</ListItem>
                    <ListItem><ListPoint>శ్వాస తీసుకోవడంలో ఇబ్బంది:</ListPoint> సగం మంది రోగులు శ్వాస తీసుకోవడంలో చాలా ఇబ్బందులు ఎదుర్కొన్నారు.</ListItem>
                </ul>
                మీకు జ్వరం వస్తే, కండరాల నొప్పిని అనుభవించండి మరియు ముఖ్యంగా, <b> పొడి దగ్గుతో బాధపడుతుంటే </ b> - దయచేసి 011-23978046 (ది ఇండియన్ నేషనల్ హెల్ప్‌లైన్ నంబర్) ని సంప్రదించండి, లేదా సమీపంలోని ఆసుపత్రిని సంప్రదించి కరోనావైరస్ కోసం తనిఖీ చేయండి .
                గుర్తుంచుకోండి, ఇది ఫ్లూ సీజన్. మీరు ఈ లక్షణాలను అనుభవిస్తే, మీరు సోకినట్లు ఇది హామీ ఇవ్వదు. భయపడవద్దు, బదులుగా తనిఖీ చేయండి.
                <br/>
                <br/>
                మీరు పరీక్షించాలనుకుంటే, మీరు మీ సమీప టెస్ట్ సెంటర్‌ను కూడా సందర్శించవచ్చు: <a target="_blank" style={{ textDecoration: 'none', color: '#0984e3', fontWeight: 'bold', wordWrap: 'break-word' }} href="https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf">https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf</a>
                <br/>
                <br/>
                కరోనావైరస్కు చికిత్స లేదు, వైద్యులు మీ లక్షణాలకు చికిత్స చేయవచ్చు మరియు మీ బలమైన రోగనిరోధక వ్యవస్థ వైరస్ తో పోరాడుతున్నప్పుడు మీకు మంచి అనుభూతిని కలిగిస్తుంది.
            </Body>
        )
    },
    URDU: {
        title: () => (
            <Title>علامات کیا ہیں؟</Title>
        ),
        body: () => (
            <Body>
                کورونا وائرس کے زیادہ تر علامات<Reference target="_blank" href="https://www.nejm.org/doi/full/10.1056/NEJMoa2002032"><Superscript>6</Superscript></Reference> <Reference target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext"><Superscript>7</Superscript></Reference> عام سردی کی علامات سے ملتے جلتے ہیں ، یہی وجہ ہے کہ طبی جانچ کے بغیر اس کا پتہ لگانا اتنا مشکل بنا دیتا ہے: 
                <br/>
                <ul>
                    <ListItem><ListPoint>بخار:</ListPoint> کورونا وائرس سے متاثرہ لوگوں میں سے آدھے افراد کو بخار ہوا ، لیکن یاد رکھیں کہ عام سردی / فلو بھی آپ کو بیمار کردے گا۔ لہذا اگر آپ بیمار محسوس کررہے ہیں تو ، اس کا مطلب یہ نہیں ہے کہ آپ کورونا وائرس سے متاثر ہیں۔ کافی آرام کرو اور کافی پانی پیو ، اور خود کو مشاہدے میں رکھو۔</ListItem>
                    <ListItem><ListPoint>خشک کھانسی:</ListPoint> نصف سے زیادہ متاثرہ معاملات <b> خشک </ b> کھانسی میں پیدا ہوئے ہیں ، جو ایسا لگتا ہے کہ عام سردی سے کورونیوائرس انفیکشن کی تمیز ہوتی ہے۔</ListItem>
                    <ListItem><ListPoint>پٹھوں میں درد یا تھکاوٹ:</ListPoint> متاثرہ معاملات میں سے نصف کو پٹھوں میں درد تھا اور / یا عام طور پر تھکا ہوا محسوس ہوتا تھا۔</ListItem>
                    <ListItem><ListPoint>سانس لینے میں دشواری:</ListPoint> نصف مریضوں کو سانس لینے میں بڑی دشواری کا سامنا کرنا پڑا۔</ListItem>
                </ul>
                اگر آپ کو بخار آتا ہے ، پٹھوں میں درد ہوتا ہے اور خاص طور پر <b> خشک کھانسی میں مبتلا ہوتا ہے </ b> - براہ کرم 011-23978046 (انڈین نیشنل ہیلپ لائن نمبر) سے رابطہ کریں ، یا کسی قریبی اسپتال سے رابطہ کریں اور کورون وائرس کی جانچ کریں۔ .
                یاد رکھنا ، یہ فلو کا موسم ہے۔ اگر آپ ان علامات کا تجربہ کرتے ہیں تو ، یہ اس بات کی ضمانت نہیں دیتا ہے کہ آپ کو متاثرہ ہے۔ گھبرائیں نہیں ، اور اس کے بجائے چیک آؤٹ کریں۔
                <br/>
                <br/>
                اگر آپ ٹیسٹ کروانا چاہتے ہیں تو ، آپ اپنے قریب واقع ٹیسٹ سنٹر کا بھی دورہ کرسکتے ہیں: <a target="_blank" style={{ textDecoration: 'none', color: '#0984e3', fontWeight: 'bold', wordWrap: 'break-word' }} href="https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf">https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf</a>
                <br/>
                <br/>
                جب کہ کورونا وائرس کا کوئی علاج نہیں ہے ، ڈاکٹر آپ کی علامات کا علاج کر سکتے ہیں اور آپ کو بہتر محسوس کرسکتے ہیں جب کہ آپ کا مضبوط مدافعتی نظام وائرس سے لڑتا ہے۔
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

function WhatAreTheSymptoms(props) {
    return (
        <Wrapper id="whatarethesymptoms" global={ props.global }>
            <Content global={ props.global }/>
        </Wrapper>
    )
}


// PropTypes:
WhatAreTheSymptoms.propTypes = {
    global: PropTypes.object.isRequired,
    reduxProps: PropTypes.object.isRequired
};


// Exports:
export default connect(mapStateToProps, mapDispatchToProps)(WhatAreTheSymptoms);