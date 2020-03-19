// Packages:
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


// Imports:
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
        reduxProps: state.components.Introduction
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
    padding: 7em 0em;
    padding-right: 28vw;
    padding-bottom: 3.5em;
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

const ListImportant = styled.a`
    font-weight: 700;
    color: #0984e3;
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
            <Title>Why is the coronavirus different?</Title>
        ),
        body: () => (
            <Body>
                The coronavirus (nCoV-19) is far worse than the seasonal flu and SARS, and some researchers believe that this is the worst outbreak we've had since the Spanish Flu, which caused 500 lakh deaths, with 200 lakh deaths in India alone.
                <br/>
                <br/>
                Here are some ways the coronavirus is different fron the flu/common cold:
                <br />
                <ul>
                    <ListItem><ListPoint>Dangerously infectious:</ListPoint> A person infected with the coronavirus can infect upto 7 people, and each of them can infect another 7 more<b><Reference target="_blank" href="https://www.rtbf.be/info/opinions/detail_lettre-ouverte-a-la-ministre-de-la-sante-publique-coronavirus-il-faut-savoir-ecouter-la-peur?id=10443799"><Superscript>1</Superscript></Reference></b>, whereas the common cold/influenza can only infect up to 1.3 people. Additionally, the coronavirus can spread through air, sneeze droplets, fecal matter, and <ListImportant>even through the eyes.</ListImportant></ListItem>
                    <ListItem><ListPoint>Very good at hiding:</ListPoint> Those infected <ListImportant>will not show any symptoms or signs</ListImportant> (high temperature, coughing, etc) for 14 to 28 days. <ListImportant>However, they will spread the virus during this period.</ListImportant><Reference target="_blank" href="https://www.sciencealert.com/researchers-confirmed-patients-can-transmit-the-coronavirus-without-showing-symptoms"><Superscript>2</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>High complication rate:</ListPoint> If you get infected, you have 20% chances of requiring hospitalization. While that may seem low, remember that when several people get infected, the hospitals will be filled completely. In China, people are dying outside of hospitals primarily due to this reason.</ListItem>
                    <ListItem><ListPoint>No vaccines or immunity:</ListPoint> According to WHO, a vaccine won't be ready until 2021. Additionally, unlike the flu/influenza, we do not have immunity to this virus.</ListItem>
                    <ListItem><ListPoint>Tests don't work properly:</ListPoint> Medical tests for the coronavirus often fail to detect whether a person is infected or not.<Reference target="_blank" href="https://www.bbc.com/news/health-51491763"><Superscript>3</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>Re-infection is worse:</ListPoint> If you survive a coronavirus infection, a reinfection will be deadlier.<Reference target="_blank" href="https://nypost.com/2020/02/19/whistleblower-doctors-say-coronavirus-reinfection-even-deadlier/"><Superscript>4</Superscript></Reference> Additionally, you will keep spreading the virus even after recovery.<Reference target="_blank" href="https://qz.com/1806050/chinese-coronavirus-expert-recovered-patients-may-still-be-infectious/"><Superscript>5</Superscript></Reference></ListItem>
                </ul>
            </Body>
        )
    },
    HINDI: {
        title: () => (
            <Title>कोरोनोवायरस अलग क्यों है?</Title>
        ),
        body: () => (
            <Body>
                कोरोनोवायरस (nCoV-19) मौसमी फ्लू और SARS की तुलना में कहीं अधिक घातक है, और कुछ शोधकर्ताओं का मानना ​​है कि स्पेनिश फ्लू के बाद से यह सबसे खराब प्रकोप है, जिसके कारण भारत में अकेले 200 लाख लोगों की मौत के साथ 500 लाख मौतें हुईं।
                <br/>
                <br/>
                यहां कुछ तरीके बताए गए हैं कि कोरोनोवायरस फ्लू / आम सर्दी को अलग करता है:
                <br />
                <ul>
                    <ListItem><ListPoint>खतरनाक रूप से संक्रामक:</ListPoint> कोरोनावायरस से संक्रमित व्यक्ति 7 लोगों को संक्रमित कर सकता है, और उनमें से प्रत्येक एक और 7 को संक्रमित कर सकता है<b><Reference target="_blank" href="https://www.rtbf.be/info/opinions/detail_lettre-ouverte-a-la-ministre-de-la-sante-publique-coronavirus-il-faut-savoir-ecouter-la-peur?id=10443799"><Superscript>1</Superscript></Reference></b>, जबकि आम सर्दी / इन्फ्लूएंजा केवल 1.3 लोगों को संक्रमित कर सकता है। इसके अतिरिक्त, कोरोनोवायरस हवा, छींक बूंदों, फेकल पदार्थ और यहां तक ​​कि आंखों के माध्यम से फैल सकता है।</ListItem>
                    <ListItem><ListPoint>छिपाने में बहुत अच्छा:</ListPoint> संक्रमित लोग दो से चार सप्ताह तक कोई लक्षण या संकेत (उच्च तापमान, खांसी आदि) नहीं दिखाएंगे। <ListImportant>हालांकि, वे इस अवधि के दौरान वायरस फैलाएंगे।</ListImportant><Reference target="_blank" href="https://www.sciencealert.com/researchers-confirmed-patients-can-transmit-the-coronavirus-without-showing-symptoms"><Superscript>2</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>उच्च जटिलता दर:</ListPoint> यदि आप संक्रमित हो जाते हैं, तो आपके पास अस्पताल में भर्ती होने की 20% संभावना है। हालांकि यह कम लग सकता है, याद रखें कि जब कई लोग संक्रमित हो जाते हैं, तो अस्पताल पूरी तरह से भर जाएंगे। चीन में, लोग मुख्य रूप से इस कारण से अस्पतालों के बाहर मर रहे हैं।</ListItem>
                    <ListItem><ListPoint>कोई टीका या प्रतिरक्षा नहीं:</ListPoint> डब्ल्यूएचओ के अनुसार, 2021 तक कोई टीका तैयार नहीं होगा। इसके अलावा, फ्लू / इन्फ्लूएंजा के विपरीत, हमारे पास इस वायरस के लिए प्रतिरक्षा नहीं है।</ListItem>
                    <ListItem><ListPoint>टेस्ट ठीक से काम नहीं करते हैं:</ListPoint> कोरोनोवायरस के लिए चिकित्सा परीक्षण अक्सर यह पता लगाने में विफल रहते हैं कि कोई व्यक्ति संक्रमित है या नहीं।<Reference target="_blank" href="https://www.bbc.com/news/health-51491763"><Superscript>3</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>पुन: संक्रमण बदतर है:</ListPoint> यदि आप कोरोनोवायरस संक्रमण से बच जाते हैं, तो एक पुन: संक्रमण घातक हो जाएगा।<Reference target="_blank" href="https://nypost.com/2020/02/19/whistleblower-doctors-say-coronavirus-reinfection-even-deadlier/"><Superscript>4</Superscript></Reference> इसके अतिरिक्त, आप रिकवरी के बाद भी वायरस फैलाते रहेंगे।<Reference target="_blank" href="https://qz.com/1806050/chinese-coronavirus-expert-recovered-patients-may-still-be-infectious/"><Superscript>5</Superscript></Reference></ListItem>
                </ul>
            </Body>
        )
    },
    BENGALI: {
        title: () => (
            <Title>করোনভাইরাসটি আলাদা কেন?</Title>
        ),
        body: () => (
            <Body>
                করোনাভাইরাস (এনসিওভি-১৯) মৌসুমী ফ্লু এবং এসএআরএসের চেয়ে অনেক মারাত্মক, এবং কিছু গবেষকরা মনে করেন যে স্প্যানিশ ফ্লু থেকে আমাদের সবচেয়ে মারাত্মক প্রকোপ হয়েছে, যা বিশ্বব্যাপী ৫০০ লক্ষ মানুষের মৃত্যু হয়েছিল, কেবল ভারতে ২০০ লক্ষ লোক মারা গিয়েছিল।
                <br/>
                <br/>
                করোনভাইরাসটি ফ্লু / সাধারণ ঠান্ডা থেকে আলাদা কিছু উপায় এখানে রয়েছে:
                <br />
                <ul>
                    <ListItem><ListPoint>মারাত্মক সংক্রামক:</ListPoint> করোনাভাইরাস সংক্রামিত একজন ব্যক্তি 7 জন পর্যন্ত সংক্রামিত হতে পারে এবং তাদের প্রত্যেকে আরও 7 জন সংক্রামিত করতে পারে<b><Reference target="_blank" href="https://www.rtbf.be/info/opinions/detail_lettre-ouverte-a-la-ministre-de-la-sante-publique-coronavirus-il-faut-savoir-ecouter-la-peur?id=10443799"><Superscript>1</Superscript></Reference></b>, যদিও সাধারণ সর্দি / ইনফ্লুয়েঞ্জা কেবল 1.3 জনকে সংক্রামিত করতে পারে। অতিরিক্তভাবে, করোনাভাইরাস বায়ু, হাঁচি ফোঁটা, মলদ্বার এবং এমনকি চোখের মাধ্যমে ছড়িয়ে যেতে পারে।</ListItem>
                    <ListItem><ListPoint>খুব ভাল করে লুকিয়ে থাকতে পারে:</ListPoint> সংক্রামিতরা দু-চার সপ্তাহ ধরে কোনও লক্ষণ বা লক্ষণ (উচ্চ তাপমাত্রা, কাশি ইত্যাদি) দেখায় না। <ListImportant>তবে তারা এই সময়ের মধ্যে ভাইরাস ছড়িয়ে দেবে।</ListImportant><Reference target="_blank" href="https://www.sciencealert.com/researchers-confirmed-patients-can-transmit-the-coronavirus-without-showing-symptoms"><Superscript>2</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>উচ্চ জটিলতার হার:</ListPoint> আপনি যদি সংক্রামিত হন, আপনার কাছে হাসপাতালে ভর্তির প্রয়োজনের 20% সম্ভাবনা রয়েছে। যদিও এটি কম বলে মনে হচ্ছে, মনে রাখবেন যে যখন বেশিরভাগ লোক সংক্রামিত হয় তখন হাসপাতালগুলি সম্পূর্ণ পূর্ণ হয়ে যায়। চিনে, মূলত এই কারণে লোকেরা হাসপাতালের বাইরে মারা যাচ্ছে।</ListItem>
                    <ListItem><ListPoint>কোনও ভ্যাকসিন বা অনাক্রম্যতা নেই:</ListPoint> ডাব্লুএইচও (WHO) এর মতে, ২০২১ (2021) সাল পর্যন্ত একটি ভ্যাকসিন প্রস্তুত থাকবে না। অতিরিক্তভাবে, ফ্লু / ইনফ্লুয়েঞ্জা থেকে ভিন্ন, আমাদের এই ভাইরাসের প্রতিরোধ ক্ষমতা নেই।</ListItem>
                    <ListItem><ListPoint>টেস্টগুলি সঠিকভাবে কাজ করে না:</ListPoint> করোনভাইরাসটির চিকিত্সা পরীক্ষাগুলি প্রায়শই কোনও ব্যক্তি আক্রান্ত কিনা তা সনাক্ত করতে ব্যর্থ হয়।<Reference target="_blank" href="https://www.bbc.com/news/health-51491763"><Superscript>3</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>পুনরায় সংক্রমণ আরও খারাপ:</ListPoint> যদি আপনি কোনও করোনভাইরাস সংক্রমণ থেকে বেঁচে থাকেন তবে একটি পুনরায় সংক্রমণ ক্ষতিকারক হবে।<Reference target="_blank" href="https://nypost.com/2020/02/19/whistleblower-doctors-say-coronavirus-reinfection-even-deadlier/"><Superscript>4</Superscript></Reference> অতিরিক্তভাবে, আপনি পুনরুদ্ধারের পরেও ভাইরাস ছড়িয়ে দিতে থাকবেন।<Reference target="_blank" href="https://qz.com/1806050/chinese-coronavirus-expert-recovered-patients-may-still-be-infectious/"><Superscript>5</Superscript></Reference></ListItem>
                </ul>
            </Body>
        )
    },
    GUJARATI: {
        title: () => (
            <Title>કોરોનાવાયરસ કેમ અલગ છે?</Title>
        ),
        body: () => (
            <Body>
                કોરોનાવાયરસ (એનસીઓવી -19) મોસમી ફલૂ અને એસએઆરએસ કરતા ખૂબ ખરાબ છે, અને કેટલાક સંશોધનકારો માને છે કે સ્પેનિશ ફ્લૂથી આપણે અત્યારસુધીનો સૌથી મોટો ફાટી નીકળ્યો છે, જેના કારણે 500 ભારતમાં એકલા ભારતમાં 200 લાખ લોકો મૃત્યુ પામ્યા છે.
                <br/>
                <br/>
                અહીં કેટલીક રીતે કોરોનાવાયરસ ફ્લૂ / સામાન્ય શરદીથી અલગ છે:
                <br />
                <ul>
                    <ListItem><ListPoint>ખતરનાક ચેપી:</ListPoint> કોરોનાવાયરસથી ચેપગ્રસ્ત વ્યક્તિ 7 લોકો સુધી ચેપ લગાવી શકે છે અને તેમાંથી દરેક અન્ય 7 લોકોને ચેપ લગાવી શકે છે<Reference target="_blank" href="https://www.rtbf.be/info/opinions/detail_lettre-ouverte-a-la-ministre-de-la-sante-publique-coronavirus-il-faut-savoir-ecouter-la-peur?id=10443799"><Superscript>1</Superscript></Reference>, જ્યારે સામાન્ય શરદી / ઈન્ફલ્યુએન્ઝા ફક્ત 1.3 લોકોને જ સંક્રમિત કરી શકે છે. આ ઉપરાંત, કોરોનાવાયરસ હવા, છીંકવાના ટીપાં, ફેકલ મેટર અને આંખો દ્વારા પણ ફેલાય છે.</ListItem>
                    <ListItem><ListPoint>છુપાવી રાખવામાં ખૂબ સારો:</ListPoint> ચેપગ્રસ્ત <ListImportant>કોઈપણ લક્ષણો અથવા ચિહ્નો બતાવશે નહીં</ListImportant> (ઉચ્ચ તાપમાન, ખાંસી, વગેરે) 14 થી 28 દિવસ માટે. <ListImportant>જો કે, તેઓ આ સમયગાળા દરમિયાન વાયરસ ફેલાવશે.</ListImportant><Reference target="_blank" href="https://www.sciencealert.com/researchers-confirmed-patients-can-transmit-the-coronavirus-without-showing-symptoms"><Superscript>2</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>ઉચ્ચ ગૂંચવણ દર:</ListPoint> જો તમને ચેપ લાગે છે, તો તમારી પાસે હોસ્પિટલમાં દાખલ થવાની 20% શક્યતાઓ છે. જ્યારે તે ઓછું લાગે છે, યાદ રાખો કે જ્યારે ઘણા લોકોને ચેપ આવે છે, ત્યારે હોસ્પિટલો સંપૂર્ણ ભરાઈ જશે. ચીનમાં, લોકો મુખ્યત્વે આ કારણોસર હોસ્પિટલોની બહાર મરી રહ્યા છે.</ListItem>
                    <ListItem><ListPoint>કોઈ રસી અથવા રોગપ્રતિકારક શક્તિ નથી:</ListPoint> ડબ્લ્યુએચઓ મુજબ, રસી 2021 સુધી તૈયાર નહીં થાય. વધુમાં, ફલૂ / ઈન્ફલ્યુએન્ઝાથી વિપરીત, આપણને આ વાયરસની પ્રતિરક્ષા નથી.</ListItem>
                    <ListItem><ListPoint>પરીક્ષણો યોગ્ય રીતે કાર્ય કરતી નથી:</ListPoint> કોરોનાવાયરસ માટેની તબીબી પરીક્ષણો ઘણીવાર વ્યક્તિને ચેપ લાગ્યો છે કે નહીં તે શોધવામાં નિષ્ફળ જાય છે.<Reference target="_blank" href="https://www.bbc.com/news/health-51491763"><Superscript>3</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>ફરીથી ચેપ વધુ ખરાબ છે:</ListPoint> જો તમે કોરોનાવાયરસ ચેપથી બચી શકો છો, તો એક રિફેક્શન ઘાતક બનશે.<Reference target="_blank" href="https://nypost.com/2020/02/19/whistleblower-doctors-say-coronavirus-reinfection-even-deadlier/"><Superscript>4</Superscript></Reference> આ ઉપરાંત, તમે પુન recoveryપ્રાપ્તિ પછી પણ વાયરસ ફેલાવતા રહેશો.<Reference target="_blank" href="https://qz.com/1806050/chinese-coronavirus-expert-recovered-patients-may-still-be-infectious/"><Superscript>5</Superscript></Reference></ListItem>
                </ul>
            </Body>
        )
    },
    PUNJABI: {
        title: () => (
            <Title>ਕੋਰੋਨਾਵਾਇਰਸ ਅਲੱਗ ਕਿਉਂ ਹੈ?</Title>
        ),
        body: () => (
            <Body>
                ਕੋਰੋਨਾਵਾਇਰਸ (ਐਨਸੀਓਵੀ -19) ਮੌਸਮੀ ਫਲੂ ਅਤੇ ਸਾਰਾਂ ਤੋਂ ਕਿਤੇ ਵੱਧ ਬਦਤਰ ਹੈ, ਅਤੇ ਕੁਝ ਖੋਜਕਰਤਾਵਾਂ ਮੰਨਦੇ ਹਨ ਕਿ ਸਪੇਨਿਸ਼ ਫਲੂ ਤੋਂ ਬਾਅਦ ਦਾ ਇਹ ਸਭ ਤੋਂ ਵੱਡਾ ਪ੍ਰਕੋਪ ਹੈ, ਜਿਸ ਨਾਲ 500 ਲੱਖ ਮੌਤਾਂ ਹੋਈਆਂ, ਇਕੱਲੇ ਭਾਰਤ ਵਿੱਚ ਹੀ 200 ਲੱਖ ਮੌਤਾਂ ਹੋਈਆਂ।
                <br/>
                <br/>
                ਕੋਰੋਨਵਾਇਰਸ ਫਲੂ / ਆਮ ਜ਼ੁਕਾਮ ਤੋਂ ਵੱਖਰੇ ਹਨ:
                <br />
                <ul>
                    <ListItem><ListPoint>ਖ਼ਤਰਨਾਕ ਤੌਰ ਤੇ ਛੂਤ ਵਾਲੀ:</ListPoint> ਕੋਰੋਨਾਵਾਇਰਸ ਨਾਲ ਸੰਕਰਮਿਤ ਵਿਅਕਤੀ 7 ਵਿਅਕਤੀਆਂ ਨੂੰ ਸੰਕਰਮਿਤ ਕਰ ਸਕਦਾ ਹੈ, ਅਤੇ ਉਨ੍ਹਾਂ ਵਿੱਚੋਂ ਹਰ ਇੱਕ ਹੋਰ 7 ਨੂੰ ਸੰਕਰਮਿਤ ਕਰ ਸਕਦਾ ਹੈ<Reference target="_blank" href="https://www.rtbf.be/info/opinions/detail_lettre-ouverte-a-la-ministre-de-la-sante-publique-coronavirus-il-faut-savoir-ecouter-la-peur?id=10443799"><Superscript>1</Superscript></Reference>, ਜਦੋਂ ਕਿ ਆਮ ਜ਼ੁਕਾਮ / ਇਨਫਲੂਐਨਜ਼ਾ ਸਿਰਫ 1.3 ਵਿਅਕਤੀਆਂ ਨੂੰ ਪ੍ਰਭਾਵਤ ਕਰ ਸਕਦਾ ਹੈ. ਇਸ ਤੋਂ ਇਲਾਵਾ, ਕੋਰੋਨਾਵਾਇਰਸ ਹਵਾ, ਛਿੱਕ ਛਿੜਕਣ, ਮਿਰਤਕ ਪਦਾਰਥ ਅਤੇ ਅੱਖਾਂ ਰਾਹੀਂ ਵੀ ਫੈਲ ਸਕਦਾ ਹੈ.</ListItem>
                    <ListItem><ListPoint>ਲੁਕਣ 'ਤੇ ਬਹੁਤ ਚੰਗਾ:</ListPoint> ਸੰਕਰਮਿਤ <ListImportant>ਕੋਈ ਲੱਛਣ ਜਾਂ ਸੰਕੇਤ ਨਹੀਂ ਦਿਖਾਏਗਾ</ListImportant> (ਉੱਚ ਤਾਪਮਾਨ, ਖੰਘ, ਆਦਿ) 14 ਤੋਂ 28 ਦਿਨਾਂ ਲਈ. <ListImportant>ਹਾਲਾਂਕਿ, ਉਹ ਇਸ ਮਿਆਦ ਦੇ ਦੌਰਾਨ ਵਾਇਰਸ ਫੈਲਾਉਣਗੇ.</ListImportant><Reference target="_blank" href="https://www.sciencealert.com/researchers-confirmed-patients-can-transmit-the-coronavirus-without-showing-symptoms"><Superscript>2</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>ਉੱਚ ਪੇਚੀਦਗੀ ਦੀ ਦਰ:</ListPoint> ਜੇ ਤੁਸੀਂ ਸੰਕਰਮਿਤ ਹੋ ਜਾਂਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਡੇ ਕੋਲ 20% ਸੰਭਾਵਨਾ ਹੈ ਹਸਪਤਾਲ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਦੀ. ਹਾਲਾਂਕਿ ਇਹ ਘੱਟ ਲੱਗ ਸਕਦਾ ਹੈ, ਪਰ ਯਾਦ ਰੱਖੋ ਕਿ ਜਦੋਂ ਬਹੁਤ ਸਾਰੇ ਲੋਕ ਸੰਕਰਮਿਤ ਹੁੰਦੇ ਹਨ, ਹਸਪਤਾਲ ਪੂਰੀ ਤਰ੍ਹਾਂ ਭਰੇ ਜਾਣਗੇ. ਚੀਨ ਵਿੱਚ, ਲੋਕ ਇਸ ਕਾਰਣ ਮੁੱਖ ਤੌਰ ਤੇ ਹਸਪਤਾਲਾਂ ਦੇ ਬਾਹਰ ਮਰ ਰਹੇ ਹਨ.</ListItem>
                    <ListItem><ListPoint>ਕੋਈ ਟੀਕੇ ਜਾਂ ਛੋਟ ਨਹੀਂ:</ListPoint> ਡਬਲਯੂਐਚਓ ਦੇ ਅਨੁਸਾਰ, ਇੱਕ ਟੀਕਾ 2021 ਤੱਕ ਤਿਆਰ ਨਹੀਂ ਹੋਵੇਗਾ. ਇਸ ਤੋਂ ਇਲਾਵਾ, ਫਲੂ / ਫਲੂ ਦੇ ਉਲਟ, ਸਾਡੇ ਕੋਲ ਇਸ ਵਾਇਰਸ ਪ੍ਰਤੀ ਛੋਟ ਨਹੀਂ ਹੈ.</ListItem>
                    <ListItem><ListPoint>ਟੈਸਟ ਸਹੀ ਤਰ੍ਹਾਂ ਕੰਮ ਨਹੀਂ ਕਰਦੇ:</ListPoint> ਕੋਰੋਨਾਵਾਇਰਸ ਲਈ ਡਾਕਟਰੀ ਜਾਂਚ ਅਕਸਰ ਇਹ ਪਤਾ ਲਗਾਉਣ ਵਿਚ ਅਸਫਲ ਰਹਿੰਦੇ ਹਨ ਕਿ ਕੋਈ ਵਿਅਕਤੀ ਸੰਕਰਮਿਤ ਹੈ ਜਾਂ ਨਹੀਂ.<Reference target="_blank" href="https://www.bbc.com/news/health-51491763"><Superscript>3</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>ਦੁਬਾਰਾ ਇਨਫੈਕਸ਼ਨ ਵਧੇਰੇ ਮਾੜਾ ਹੈ:</ListPoint> ਜੇ ਤੁਸੀਂ ਇਕ ਕੋਰੋਨਵਾਇਰਸ ਦੀ ਲਾਗ ਤੋਂ ਬਚ ਜਾਂਦੇ ਹੋ, ਤਾਂ ਇਕ ਪੁਨਰ ਸੰਕਰਮਣ ਘਾਤਕ ਹੋਵੇਗਾ.<Reference target="_blank" href="https://nypost.com/2020/02/19/whistleblower-doctors-say-coronavirus-reinfection-even-deadlier/"><Superscript>4</Superscript></Reference> ਇਸ ਤੋਂ ਇਲਾਵਾ, ਤੁਸੀਂ ਰਿਕਵਰੀ ਤੋਂ ਬਾਅਦ ਵੀ ਵਾਇਰਸ ਫੈਲਾਉਂਦੇ ਰਹੋਗੇ.<Reference target="_blank" href="https://qz.com/1806050/chinese-coronavirus-expert-recovered-patients-may-still-be-infectious/"><Superscript>5</Superscript></Reference></ListItem>
                </ul>
            </Body>
        )
    },
    MARATHI: {
        title: () => (
            <Title>कोरोनाव्हायरस वेगळे का आहे?</Title>
        ),
        body: () => (
            <Body>
                कोरोनाव्हायरस (एनसीओव्ही -१)) हा हंगामी फ्लू आणि एसएआरएसपेक्षा खूपच वाईट आहे आणि काही संशोधकांचा असा विश्वास आहे की स्पॅनिश फ्लूमुळे had०० लाख लोकांचा मृत्यू झाला आहे. केवळ भारतातच २०० लाख लोक मरण पावले आहेत.
                <br/>
                <br/>
                कोरोनाव्हायरस फ्लू / सामान्य सर्दीपासून वेगळा असण्याचे काही मार्ग येथे आहेतः
                <br />
                <ul>
                    <ListItem><ListPoint>धोकादायक संसर्गजन्य:</ListPoint> कोरोनाव्हायरसने संसर्गित एखादी व्यक्ती 7 लोकांना संक्रमित करू शकते आणि त्यापैकी प्रत्येकजण आणखी 7 लोकांना संक्रमित करू शकतो<Reference target="_blank" href="https://www.rtbf.be/info/opinions/detail_lettre-ouverte-a-la-ministre-de-la-sante-publique-coronavirus-il-faut-savoir-ecouter-la-peur?id=10443799"><Superscript>1</Superscript></Reference>, तर सामान्य सर्दी / इन्फ्लूएन्झा केवळ 1.3 लोकांनाच संक्रमित करू शकतो. याव्यतिरिक्त, कोरोनाव्हायरस हवा, शिंक्यासारखे थेंब, मलमात्रा आणि अगदी डोळ्यांद्वारे पसरतो.</ListItem>
                    <ListItem><ListPoint>लपवून ठेवण्यात खूप चांगले:</ListPoint> ज्यांना संसर्ग झाला आहे <ListImportant>कोणतीही लक्षणे किंवा चिन्हे दर्शवणार नाहीत</ListImportant> (उच्च तापमान, खोकला इ.) 14 ते 28 दिवस. <ListImportant>तथापि, या काळात ते व्हायरसचा प्रसार करतील.</ListImportant><Reference target="_blank" href="https://www.sciencealert.com/researchers-confirmed-patients-can-transmit-the-coronavirus-without-showing-symptoms"><Superscript>2</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>उच्च गुंतागुंत दर:</ListPoint> आपल्याला संसर्ग झाल्यास, आपल्याकडे 20% शक्यता आहे की हॉस्पिटलमध्ये दाखल करावे. ते कमी वाटले तरी लक्षात ठेवा की जेव्हा बर्‍याच लोकांना संसर्ग होतो तेव्हा रुग्णालये पूर्ण भरली जातील. चीनमध्ये लोक मुख्यत: या कारणास्तव रुग्णालयांच्या बाहेर मरत आहेत.</ListItem>
                    <ListItem><ListPoint>लस किंवा प्रतिकारशक्ती नाही:</ListPoint> डब्ल्यूएचओच्या मते, 2021 पर्यंत एक लस तयार होणार नाही. याव्यतिरिक्त, फ्लू / इन्फ्लूएन्झाच्या विपरीत, आपल्याकडे या विषाणूची प्रतिकारशक्ती नाही.</ListItem>
                    <ListItem><ListPoint>चाचण्या व्यवस्थित चालत नाहीत:</ListPoint> कोरोनाव्हायरसच्या वैद्यकीय चाचण्या बहुतेकदा एखाद्या व्यक्तीस संक्रमित आहे की नाही हे शोधण्यात अपयशी ठरतात.<Reference target="_blank" href="https://www.bbc.com/news/health-51491763"><Superscript>3</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>पुन्हा संक्रमण अधिक वाईट आहे:</ListPoint> आपण कोरोनाव्हायरस संसर्गापासून वाचल्यास, एक पुनर्जन्म अत्यंत घातक असेल.<Reference target="_blank" href="https://nypost.com/2020/02/19/whistleblower-doctors-say-coronavirus-reinfection-even-deadlier/"><Superscript>4</Superscript></Reference> याव्यतिरिक्त, आपण पुनर्प्राप्तीनंतरही व्हायरसचा प्रसार करत रहाल.<Reference target="_blank" href="https://qz.com/1806050/chinese-coronavirus-expert-recovered-patients-may-still-be-infectious/"><Superscript>5</Superscript></Reference></ListItem>
                </ul>
            </Body>
        )
    },
    NEPALI: {
        title: () => (
            <Title>कोरोनाभायरस किन फरक छ?</Title>
        ),
        body: () => (
            <Body>
                कोरोनाभाइरस (एनसीओवी -१)) मौसमी फ्लू र सार्स भन्दा निकै नराम्रो छ र केही अनुसन्धानकर्ताहरूले यो विश्वास गरे कि स्पेनी फ्लूबाट हामीले सबैभन्दा नराम्रो प्रकोप ग which्यौं जुन 500०० लाखको मृत्यु भयो र भारतमा मात्र २०० लाखको मृत्यु भयो।
                <br/>
                <br/>
                यहाँ केहि तरिकाहरू छन् कोरोनाभाइरस फरक फ्रिन फ्लू / साधारण चिसो:
                <br />
                <ul>
                    <ListItem><ListPoint>खतरनाक संक्रामक:</ListPoint> एक कोरोना भाइरस संक्रमित एक व्यक्ति 7 व्यक्ति सम्म संक्रमित गर्न सक्दछ, र ती सबैले अरु 7 जना लाई संक्रमित गर्न सक्दछन्<Reference target="_blank" href="https://www.rtbf.be/info/opinions/detail_lettre-ouverte-a-la-ministre-de-la-sante-publique-coronavirus-il-faut-savoir-ecouter-la-peur?id=10443799"><Superscript>1</Superscript></Reference>, जबकि सामान्य चिसो / इन्फ्लूएन्जा मात्र १.3 व्यक्ति सम्म संक्रमित गर्न सक्दछ। थप रूपमा, कोरोनाभाइरस हावाबाट, स्निज थोप्लाहरू, मलको पदार्थ र आँखाबाट पनि फैलिन सक्छ।</ListItem>
                    <ListItem><ListPoint>लुकाउन धेरै राम्रो:</ListPoint> ती संक्रमित <ListImportant>कुनै लक्षण वा संकेत देखाउने छैन</ListImportant> (उच्च तापमान, खोकी, आदि) १ 14 देखि २ days दिनसम्म। <ListImportant>जे होस्, तिनीहरू यस अवधिमा भाइरस फैलनेछ।</ListImportant><Reference target="_blank" href="https://www.sciencealert.com/researchers-confirmed-patients-can-transmit-the-coronavirus-without-showing-symptoms"><Superscript>2</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>उच्च जटिलता दर:</ListPoint> यदि तपाई संक्रमित हुनुभयो भने, तपाईसँग २०% सम्भाव्यता छ अस्पताल भर्नाको आवश्यक छ। जबकि यो कम लाग्न सक्छ, याद गर्नुहोस् जब धेरै व्यक्ति संक्रमित हुन्छन्, अस्पताल पूर्ण रूपमा भरिन्छ। चीनमा, मान्छे अस्पतालको बाहिर मर्दैछन् यस कारणले गर्दा।</ListItem>
                    <ListItem><ListPoint>कुनै खोप वा प्रतिरक्षा छैन:</ListPoint> डब्ल्यूएचओका अनुसार २०२१ सम्म खोप तयार हुने छैन। साथै, फ्लू / इन्फ्लूएन्जा विपरीत हामीसँग यो भाइरस प्रतिरोध क्षमता छैन।</ListItem>
                    <ListItem><ListPoint>परीक्षणहरू राम्रोसँग काम गर्दैनन्:</ListPoint> कोरोनाभाइरस को लागी चिकित्सा परीक्षणहरु अक्सर एक व्यक्ति संक्रमित छ वा छैन पत्ता लगाउन असफल।<Reference target="_blank" href="https://www.bbc.com/news/health-51491763"><Superscript>3</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>पुनः संक्रमण खराब छ:</ListPoint> यदि तपाईं कोरोनाभाइरस संक्रमणबाट बच्नुहुन्छ भने, एक पुनर्जन्म घातक हुनेछ।<Reference target="_blank" href="https://nypost.com/2020/02/19/whistleblower-doctors-say-coronavirus-reinfection-even-deadlier/"><Superscript>4</Superscript></Reference> थप रूपमा, तपाई रिकभरी पछि पनि भाइरस फैलाउन जारी राख्नु हुनेछ।<Reference target="_blank" href="https://qz.com/1806050/chinese-coronavirus-expert-recovered-patients-may-still-be-infectious/"><Superscript>5</Superscript></Reference></ListItem>
                </ul>
            </Body>
        )
    },
    TAMIL: {
        title: () => (
            <Title>கொரோனா வைரஸ் ஏன் வேறுபட்டது?</Title>
        ),
        body: () => (
            <Body>
                கொரோனா வைரஸ் (nCoV-19) பருவகால காய்ச்சல் மற்றும் SARS ஐ விட மிகவும் மோசமானது, மேலும் சில ஆராய்ச்சியாளர்கள் நம்புகிறார்கள், இது ஸ்பானிஷ் காய்ச்சலுக்குப் பிறகு, 500 லட்சம் இறப்புகளை ஏற்படுத்தியது, இந்தியாவில் மட்டும் 200 லட்சம் இறப்புகள் ஏற்பட்டன.
                <br/>
                <br/>
                கொரோனா வைரஸ் காய்ச்சல் / ஜலதோஷம் வேறுபட்ட சில வழிகள் இங்கே:
                <br />
                <ul>
                    <ListItem><ListPoint>ஆபத்தான தொற்று:</ListPoint> கொரோனா வைரஸால் பாதிக்கப்பட்ட ஒருவர் 7 பேர் வரை பாதிக்கலாம், மேலும் அவர்கள் ஒவ்வொருவரும் மேலும் 7 பேரை பாதிக்கலாம்<Reference target="_blank" href="https://www.rtbf.be/info/opinions/detail_lettre-ouverte-a-la-ministre-de-la-sante-publique-coronavirus-il-faut-savoir-ecouter-la-peur?id=10443799"><Superscript>1</Superscript></Reference>, அதேசமயம், ஜலதோஷம் / காய்ச்சல் 1.3 பேருக்கு மட்டுமே தொற்றும். கூடுதலாக, கொரோனா வைரஸ் காற்று, தும்மல் துளிகள், மலம் மற்றும் கண்கள் வழியாகவும் பரவுகிறது.</ListItem>
                    <ListItem><ListPoint>ஒளிந்து கொள்வதில் மிகவும் நல்லது:</ListPoint> பாதிக்கப்பட்டவர்கள் <ListImportant>எந்த அறிகுறிகளையும் அறிகுறிகளையும் காட்டாது</ListImportant> (அதிக வெப்பநிலை, இருமல் போன்றவை) 14 முதல் 28 நாட்களுக்கு. <ListImportant>இருப்பினும், அவர்கள் இந்த காலகட்டத்தில் வைரஸை பரப்புவார்கள்.</ListImportant><Reference target="_blank" href="https://www.sciencealert.com/researchers-confirmed-patients-can-transmit-the-coronavirus-without-showing-symptoms"><Superscript>2</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>அதிக சிக்கலான வீதம்:</ListPoint> நீங்கள் நோய்த்தொற்றுக்கு ஆளானால், மருத்துவமனையில் அனுமதிக்க 20% வாய்ப்புகள் உள்ளன. அது குறைவாகத் தோன்றினாலும், பலர் பாதிக்கப்படும்போது, ​​மருத்துவமனைகள் முழுமையாக நிரப்பப்படும் என்பதை நினைவில் கொள்ளுங்கள். சீனாவில், மக்கள் இந்த காரணங்களால் மருத்துவமனைகளுக்கு வெளியே இறந்து கொண்டிருக்கிறார்கள்.</ListItem>
                    <ListItem><ListPoint>தடுப்பூசிகள் அல்லது நோய் எதிர்ப்பு சக்தி இல்லை:</ListPoint> WHO இன் கூற்றுப்படி, 2021 வரை ஒரு தடுப்பூசி தயாராக இருக்காது. கூடுதலாக, காய்ச்சல் / காய்ச்சல் போலல்லாமல், இந்த வைரஸுக்கு நோய் எதிர்ப்பு சக்தி எங்களிடம் இல்லை.</ListItem>
                    <ListItem><ListPoint>சோதனைகள் சரியாக இயங்காது:</ListPoint> கொரோனா வைரஸிற்கான மருத்துவ பரிசோதனைகள் பெரும்பாலும் ஒரு நபர் பாதிக்கப்பட்டுள்ளதா இல்லையா என்பதைக் கண்டறியத் தவறிவிடுகின்றன.<Reference target="_blank" href="https://www.bbc.com/news/health-51491763"><Superscript>3</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>மறு தொற்று மோசமானது:</ListPoint> நீங்கள் ஒரு கொரோனா வைரஸ் தொற்றுநோயிலிருந்து தப்பித்தால், ஒரு மறுசீரமைப்பு ஆபத்தானது.<Reference target="_blank" href="https://nypost.com/2020/02/19/whistleblower-doctors-say-coronavirus-reinfection-even-deadlier/"><Superscript>4</Superscript></Reference> கூடுதலாக, மீட்கப்பட்ட பின்னரும் வைரஸை பரப்புவீர்கள்.<Reference target="_blank" href="https://qz.com/1806050/chinese-coronavirus-expert-recovered-patients-may-still-be-infectious/"><Superscript>5</Superscript></Reference></ListItem>
                </ul>
            </Body>
        )
    },
    TELUGU: {
        title: () => (
            <Title>కరోనావైరస్ ఎందుకు భిన్నంగా ఉంటుంది?</Title>
        ),
        body: () => (
            <Body>
                కరోనావైరస్ (nCoV-19) కాలానుగుణ ఫ్లూ మరియు SARS కన్నా చాలా ఘోరంగా ఉంది, మరియు కొంతమంది పరిశోధకులు స్పానిష్ ఫ్లూ నుండి 500 లక్షల మరణాలకు కారణమైన, భారతదేశంలో మాత్రమే 200 లక్షల మరణాలతో సంభవించిన చెత్త వ్యాప్తి అని నమ్ముతారు.
                <br/>
                <br/>
                కరోనావైరస్ ఫ్లూ / జలుబు నుండి భిన్నమైన కొన్ని మార్గాలు ఇక్కడ ఉన్నాయి:
                <br />
                <ul>
                    <ListItem><ListPoint>ప్రమాదకరమైన అంటువ్యాధి:</ListPoint> కరోనావైరస్ సోకిన వ్యక్తి 7 మందికి సోకుతుంది, మరియు వారిలో ప్రతి ఒక్కరికి మరో 7 మందికి సోకుతుంది<Reference target="_blank" href="https://www.rtbf.be/info/opinions/detail_lettre-ouverte-a-la-ministre-de-la-sante-publique-coronavirus-il-faut-savoir-ecouter-la-peur?id=10443799"><Superscript>1</Superscript></Reference>, సాధారణ జలుబు / ఇన్ఫ్లుఎంజా 1.3 మందికి మాత్రమే సోకుతుంది. అదనంగా, కరోనావైరస్ గాలి, తుమ్ము బిందువులు, మల పదార్థం మరియు కళ్ళ ద్వారా కూడా వ్యాపిస్తుంది.</ListItem>
                    <ListItem><ListPoint>దాచడం చాలా మంచిది:</ListPoint> సోకిన వారు <ListImportant>ఏ లక్షణాలు లేదా సంకేతాలను చూపించదు</ListImportant> (అధిక ఉష్ణోగ్రత, దగ్గు మొదలైనవి) 14 నుండి 28 రోజులు. <ListImportant>అయితే, వారు ఈ కాలంలో వైరస్ వ్యాప్తి చెందుతారు.</ListImportant><Reference target="_blank" href="https://www.sciencealert.com/researchers-confirmed-patients-can-transmit-the-coronavirus-without-showing-symptoms"><Superscript>2</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>అధిక క్లిష్టత రేటు:</ListPoint> మీరు సోకినట్లయితే, మీకు ఆసుపత్రి అవసరం 20% అవకాశాలు ఉన్నాయి. అది తక్కువగా అనిపించినప్పటికీ, చాలా మందికి వ్యాధి సోకినప్పుడు, ఆసుపత్రులు పూర్తిగా నిండిపోతాయని గుర్తుంచుకోండి. చైనాలో, ప్రజలు ఈ కారణంగా ఆసుపత్రుల వెలుపల చనిపోతున్నారు.</ListItem>
                    <ListItem><ListPoint>టీకాలు లేదా రోగనిరోధక శక్తి లేదు:</ListPoint> WHO ప్రకారం, 2021 వరకు వ్యాక్సిన్ సిద్ధంగా ఉండదు. అదనంగా, ఫ్లూ / ఇన్ఫ్లుఎంజా మాదిరిగా కాకుండా, ఈ వైరస్కు మనకు రోగనిరోధక శక్తి లేదు.</ListItem>
                    <ListItem><ListPoint>పరీక్షలు సరిగా పనిచేయవు:</ListPoint> కరోనావైరస్ కోసం వైద్య పరీక్షలు తరచుగా ఒక వ్యక్తి సోకినా లేదా అనే విషయాన్ని గుర్తించడంలో విఫలమవుతాయి.<Reference target="_blank" href="https://www.bbc.com/news/health-51491763"><Superscript>3</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>తిరిగి సంక్రమణ అధ్వాన్నంగా ఉంది:</ListPoint> మీరు కరోనావైరస్ సంక్రమణ నుండి బయటపడితే, రీఇన్ఫెక్షన్ ప్రాణాంతకం అవుతుంది.<Reference target="_blank" href="https://nypost.com/2020/02/19/whistleblower-doctors-say-coronavirus-reinfection-even-deadlier/"><Superscript>4</Superscript></Reference> అదనంగా, మీరు కోలుకున్న తర్వాత కూడా వైరస్ వ్యాప్తి చెందుతూనే ఉంటారు.<Reference target="_blank" href="https://qz.com/1806050/chinese-coronavirus-expert-recovered-patients-may-still-be-infectious/"><Superscript>5</Superscript></Reference></ListItem>
                </ul>
            </Body>
        )
    },
    URDU: {
        title: () => (
            <Title>کورونا وائرس کیوں مختلف ہے؟</Title>
        ),
        body: () => (
            <Body>
                کورونا وائرس (این سی او وی۔ 19) موسمی فلو اور سارس سے کہیں زیادہ بدتر ہے ، اور کچھ محققین کا خیال ہے کہ ہسپانوی فلو کے بعد سے اب تک کا یہ بدترین پھیلائو ہے ، جس سے 500 لاکھ اموات ہوئیں ، صرف ہندوستان میں ہی 200 لاکھ اموات ہوئیں۔
                <br/>
                <br/>
                یہاں کچھ طریقے ہیں جس میں کورونا وائرس فلو / عام سردی سے مختلف ہے:
                <br />
                <ul>
                    <ListItem><ListPoint>خطرناک طور پر متعدی:</ListPoint> کورونا وائرس سے متاثرہ فرد 7 افراد تک کی بیماری لگاسکتا ہے ، اور ان میں سے ہر ایک مزید 7 افراد کو بھی متاثر کرسکتا ہے<Reference target="_blank" href="https://www.rtbf.be/info/opinions/detail_lettre-ouverte-a-la-ministre-de-la-sante-publique-coronavirus-il-faut-savoir-ecouter-la-peur?id=10443799"><Superscript>1</Superscript></Reference>, جبکہ عام سردی / انفلوئنزا صرف 1.3 افراد کو ہی متاثر کرسکتی ہے۔ مزید برآں ، کورونا وائرس ہوا ، چھینکنے والی بوندیں ، آنتوں سے متعلق مادے اور یہاں تک کہ آنکھوں کے ذریعے بھی پھیل سکتا ہے۔</ListItem>
                    <ListItem><ListPoint>چھپنے میں بہت اچھا ہے:</ListPoint> متاثرہ افراد <ListImportant>کوئی علامت یا علامت نہیں دکھائے گا</ListImportant> (اعلی درجہ حرارت ، کھانسی ، وغیرہ) 14 سے 28 دن تک۔ <ListImportant>تاہم ، وہ اس عرصے کے دوران وائرس پھیلائیں گے۔</ListImportant><Reference target="_blank" href="https://www.sciencealert.com/researchers-confirmed-patients-can-transmit-the-coronavirus-without-showing-symptoms"><Superscript>2</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>اعلی پیچیدگی کی شرح:</ListPoint>اگر آپ کو انفکشن ہوتا ہے تو ، آپ کو ہسپتال جانے کی ضرورت کے 20٪ امکانات ہوں گے۔ اگرچہ یہ کم محسوس ہوسکتا ہے ، لیکن یاد رکھیں کہ جب متعدد افراد انفیکشن میں ہوں گے تو ، اسپتال مکمل طور پر بھر جائیں گے۔ چین میں ، لوگ بنیادی وجہ اس وجہ سے اسپتالوں کے باہر مر رہے ہیں۔</ListItem>
                    <ListItem><ListPoint>کوئی ویکسین یا استثنیٰ نہیں ہے:</ListPoint> ڈبلیو ایچ او کے مطابق ، 2021 تک ایک ویکسین تیار نہیں ہوگی۔ اضافی طور پر ، فلو / انفلوئنزا کے برخلاف ، ہمارے پاس اس وائرس سے استثنیٰ نہیں ہے۔</ListItem>
                    <ListItem><ListPoint>ٹیسٹ ٹھیک سے کام نہیں کرتے ہیں:</ListPoint> کورونا وائرس کے میڈیکل ٹیسٹ اکثر یہ پتہ لگانے میں ناکام رہتے ہیں کہ آیا کوئی شخص انفیکشن میں ہے یا نہیں۔<Reference target="_blank" href="https://www.bbc.com/news/health-51491763"><Superscript>3</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>دوبارہ انفیکشن زیادہ خراب ہے:</ListPoint> اگر آپ کورونیوائرس انفیکشن سے بچ جاتے ہیں تو ، ایک ریفیکشن مہلک ہوگا۔<Reference target="_blank" href="https://nypost.com/2020/02/19/whistleblower-doctors-say-coronavirus-reinfection-even-deadlier/"><Superscript>4</Superscript></Reference> مزید برآں ، آپ بازیابی کے بعد بھی وائرس پھیلاتے رہیں گے۔<Reference target="_blank" href="https://qz.com/1806050/chinese-coronavirus-expert-recovered-patients-may-still-be-infectious/"><Superscript>5</Superscript></Reference></ListItem>
                </ul>
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

function Introduction(props) {
    return (
        <Wrapper id="introduction" global={ props.global }>
            <Content global={ props.global }/>
        </Wrapper>
    )
}


// PropTypes:
Introduction.propTypes = {
    global: PropTypes.object.isRequired,
    reduxProps: PropTypes.object.isRequired
};


// Exports:
export default connect(mapStateToProps, mapDispatchToProps)(Introduction);