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
        reduxProps: state.components.MustHaves
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


// Content:
const CONTENT = {
    ENGLISH: {
        title: () => (
            <Title>Things you must have.</Title>
        ),
        body: () => (
            <Body>
                Here are some of basic items you <ListImportant>must</ListImportant> have during the coronavirus pandemic:
                <br/>
                <ul>
                    <ListItem><ListPoint>Tools:</ListPoint> Candles, batteries, power banks, flashlights, cigarette lighters, duct tapes, paper towels/napkins, and scissors will be required.</ListItem>
                    <ListItem><ListPoint>Masks:</ListPoint> You should have N95 or N99 masks in stock, and be sure to wear them whenever you go outside. <ListImportant>Surgical masks will not work, and even N95 and N99 masks are not as effective.</ListImportant></ListItem>
                    <ListItem><ListPoint>Medicines:</ListPoint> Stock up on 3 to 6 months of medicines that you or your family members need (drugs for blood pressure, diabetes, and other conditions). Also, make sure you have a collection of multivitamin suppliments, and painkillers such as Ibuprofen.</ListItem>
                    <ListItem><ListPoint>Helpful chemicals:</ListPoint> Make sure you have a good quantity of hand sanitizers, isopropyl alcohol (rubbing alcohol), disinfectants, mosquito repellents, anti-fungal creams.</ListItem>
                    <ListItem><ListPoint>Carbohydrate-rich foods:</ListPoint> Stock up on 3 to 4 months of carbohydrate-rich foods, such as rice, flour, oats, cornflakes, potatoes, and peanut butter, along with cooking oil, cooking gas, and other kitchen essentials. You can store noodles, dark chocolates, honey, onions, and garlic.</ListItem>
                </ul>
                <br/>
                Here are some optional items you might need:
                <ul>
                    <ListItem><ListPoint>Eye protection:</ListPoint> If you're living close to an infected area, it is essential that you have adequate eye protection. In this case, swimming goggles might be the best option. They are cheap and easy to use, compared to full-face gas masks that cost a fortune (and may not be available).</ListItem>
                    <ListItem><ListPoint>Hand protection:</ListPoint> Nitrile gloves are cheap, disposable, and easy to wear accessories that can protect you from skin-contact with potentially infected people.</ListItem>
                    <ListItem><ListPoint>Additional foods:</ListPoint> You can also stock up on dried fruits, jams, salted butter, and free-dried foods.</ListItem>
                </ul>
            </Body>
        )
    },
    HINDI: {
        title: () => (
            <Title>चीजें जो आपके पास होनी चाहिए।</Title>
        ),
        body: () => (
            <Body>
                कोरोनोवायरस महामारी के दौरान आपके पास कुछ बुनियादी चीजें होनी चाहिए:
                <br/>
                <ul>
                    <ListItem><ListPoint>उपकरण:</ListPoint> मोमबत्तियाँ, बैटरी, पावर बैंक, फ्लैशलाइट, सिगरेट लाइटर, डक्ट टेप, पेपर टॉवल / नैपकिन और कैंची की आवश्यकता होगी।</ListItem>
                    <ListItem><ListPoint>मास्क:</ListPoint> आपके पास स्टॉक में एन 95 या एन 99 मास्क होना चाहिए, और जब भी आप बाहर जाते हैं, तो उन्हें पहनना सुनिश्चित करें। <ListImportant>सर्जिकल मास्क काम नहीं करेगा, और यहां तक ​​कि एन 95 और एन 99 मास्क भी उतने प्रभावी नहीं हैं।</ListImportant></ListItem>
                    <ListItem><ListPoint>दवाई:</ListPoint> 3 से 6 महीने की दवाओं पर स्टॉक करें जो आपको या आपके परिवार के सदस्यों को चाहिए (रक्तचाप, मधुमेह, और अन्य स्थितियों के लिए दवाएं)। इसके अलावा, सुनिश्चित करें कि आपके पास मल्टीविटामिन सप्लीमेंट्स का संग्रह है, और इबुप्रोफेन जैसे दर्द निवारक।</ListItem>
                    <ListItem><ListPoint>सहायक रसायन:</ListPoint> सुनिश्चित करें कि आपके पास अच्छी मात्रा में हैंड सैनिटाइज़र, आइसोप्रोपिल अल्कोहल (रबिंग अल्कोहल), कीटाणुनाशक, मच्छर भगाने वाले, एंटी-फंगल क्रीम हैं।</ListItem>
                    <ListItem><ListPoint>कार्बोहाइड्रेट युक्त खाद्य पदार्थ:</ListPoint> चावल, आटा, जई, कॉर्नफ्लेक्स, आलू, और मूंगफली का मक्खन, खाना पकाने के तेल, रसोई गैस, और अन्य रसोई आवश्यक के रूप में कार्बोहाइड्रेट युक्त खाद्य पदार्थों के 3 से 4 महीने पर स्टॉक करें। आप नूडल्स, डार्क चॉकलेट, शहद, प्याज और लहसुन स्टोर कर सकते हैं।</ListItem>
                </ul>
                <br/>
                यहां कुछ वैकल्पिक आइटम हैं जिनकी आपको आवश्यकता हो सकती है:
                <ul>
                    <ListItem><ListPoint>नेत्र सुरक्षा:</ListPoint> यदि आप एक संक्रमित क्षेत्र के करीब रह रहे हैं, तो यह आवश्यक है कि आपके पास पर्याप्त सुरक्षा हो। इस मामले में, तैराकी चश्मे सबसे अच्छा विकल्प हो सकता है। वे फुल-फेस गैस मास्क की तुलना में सस्ते और उपयोग में आसान होते हैं, जिनकी कीमत एक भाग्य होती है (और उपलब्ध नहीं हो सकती है)।</ListItem>
                    <ListItem><ListPoint>हाथों का संरक्षण:</ListPoint> नाइट्राइल दस्ताने सस्ते, डिस्पोजेबल और सहायक उपकरण पहनने में आसान होते हैं जो संभावित संक्रमित लोगों के साथ त्वचा-संपर्क से आपकी रक्षा कर सकते हैं।</ListItem>
                    <ListItem><ListPoint>अतिरिक्त खाद्य पदार्थ:</ListPoint> आप सूखे मेवे, जैम, नमकीन मक्खन और फ्री-ड्राइड खाद्य पदार्थों का भी स्टॉक कर सकते हैं।</ListItem>
                </ul>
            </Body>
        )
    },
    BENGALI: {
        title: () => (
            <Title>আপনার অবশ্যই জিনিস থাকতে হবে।</Title>
        ),
        body: () => (
            <Body>
                করোনাভাইরাস মহামারী চলাকালীন আপনার কয়েকটি মৌলিক আইটেম অবশ্যই রয়েছে:
                <br/>
                <ul>
                    <ListItem><ListPoint>সরঞ্জামসমূহ:</ListPoint> মোমবাতি, ব্যাটারি, পাওয়ার ব্যাংক, ফ্ল্যাশলাইট, সিগারেট লাইটার, নালী টেপ, কাগজের তোয়ালে / ন্যাপকিন এবং কাঁচির প্রয়োজন হবে।</ListItem>
                    <ListItem><ListPoint>মুখোশ:</ListPoint> আপনার স্টকটিতে N95 বা N99 মাস্ক থাকা উচিত এবং আপনি যখনই বাইরে বেরোন তখন এগুলি পরতে ভুলবেন না। <ListImportant>সার্জিক্যাল মুখোশগুলি কাজ করবে না, এমনকি এন 95 এবং এন 99 মাস্কগুলিও তেমন কার্যকর নয়।</ListImportant></ListItem>
                    <ListItem><ListPoint>ওষুধ:</ListPoint> আপনার বা আপনার পরিবারের সদস্যদের প্রয়োজনীয় ওষুধের 3 থেকে 6 মাসের মধ্যে স্টক আপ করুন (রক্তচাপ, ডায়াবেটিস এবং অন্যান্য অবস্থার জন্য ড্রাগ)। এছাড়াও, নিশ্চিত করুন যে আপনার কাছে মাল্টিভিটামিন সাপ্লিমেন্টস এবং আইবুপ্রোফেনের মতো ব্যথানাশক .ষধ সংগ্রহ রয়েছে।</ListItem>
                    <ListItem><ListPoint>সহায়ক রাসায়নিক:</ListPoint> নিশ্চিত করুন যে আপনার হাতে প্রচুর পরিমাণে স্যানিটাইজার, আইসোপ্রোপাইল অ্যালকোহল (অ্যালকোহল ঘষা), জীবাণুনাশক, মশার ছত্রভঙ্গ, অ্যান্টি-ফাঙ্গাল ক্রিম রয়েছে।</ListItem>
                    <ListItem><ListPoint>কার্বোহাইড্রেট সমৃদ্ধ খাবার:</ListPoint> ভাত, আটা, ওট, কর্নফ্লেক্স, আলু এবং চিনাবাদাম মাখনের মতো রান্না তেল, রান্নার গ্যাস এবং অন্যান্য রান্নাঘরের প্রয়োজনীয় উপাদানের সাথে 3 থেকে 4 মাসের মধ্যে কার্বোহাইড্রেট সমৃদ্ধ খাবার স্টক আপ করুন। আপনি নুডলস, গা dark় চকোলেট, মধু, পেঁয়াজ এবং রসুন সংরক্ষণ করতে পারেন।</ListItem>
                </ul>
                <br/>
                এখানে আপনার প্রয়োজন হতে পারে এমন কিছু alচ্ছিক আইটেম রয়েছে:
                <ul>
                    <ListItem><ListPoint>চোখের সুরক্ষা:</ListPoint> যদি আপনি কোনও সংক্রামিত অঞ্চলের কাছাকাছি বাস করেন, তবে আপনার চোখের পর্যাপ্ত সুরক্ষা থাকা অপরিহার্য। এই ক্ষেত্রে, সুইমিং গগলস সেরা বিকল্প হতে পারে। পূর্ণ মুখের গ্যাস মুখোশের তুলনায় এগুলি সস্তা এবং সহজেই ব্যবহারযোগ্য, যার জন্য এক ভাগ্যের জন্য ব্যয় হয় (এবং উপলভ্যও নাও হতে পারে)।</ListItem>
                    <ListItem><ListPoint>হাত সুরক্ষা:</ListPoint> নাইট্রাইল গ্লাভস সস্তা, ডিসপোজেবল এবং সহজে পরা সহজ জিনিস যা আপনাকে সম্ভাব্য সংক্রামিত ব্যক্তির সাথে ত্বকের যোগাযোগ থেকে রক্ষা করতে পারে।</ListItem>
                    <ListItem><ListPoint>অতিরিক্ত খাদ্য:</ListPoint> আপনি শুকনো ফল, জাম, লবণাক্ত মাখন এবং বিনামূল্যে শুকনো খাবারগুলিতেও স্টক করতে পারেন।</ListItem>
                </ul>
            </Body>
        )
    },
    GUJARATI: {
        title: () => (
            <Title>વસ્તુઓ તમારી પાસે હોવી જ જોઇએ.</Title>
        ),
        body: () => (
            <Body>
                અહીં તમને કેટલીક મૂળભૂત બાબતો છે <ListImportant>જ જોઈએ</ListImportant> કોરોનાવાયરસ રોગચાળા દરમિયાન હોય છે:
                <br/>
                <ul>
                    <ListItem><ListPoint>સાધનો:</ListPoint> મીણબત્તીઓ, બેટરીઓ, પાવર બેંકો, ફ્લેશલાઇટ્સ, સિગારેટ લાઇટર, ડક્ટ ટેપ, કાગળનાં ટુવાલ / નેપકિન્સ, અને કાતરની જરૂર પડશે.</ListItem>
                    <ListItem><ListPoint>માસ્ક:</ListPoint> તમારી પાસે સ્ટોકમાં N95 અથવા N99 માસ્ક હોવા જોઈએ, અને જ્યારે પણ તમે બહાર જાઓ ત્યારે તેને પહેરવાનું ભૂલશો નહીં. <ListImportant>સર્જિકલ માસ્ક કામ કરશે નહીં, અને એન 95 અને એન 99 માસ્ક પણ એટલા અસરકારક નથી.</ListImportant></ListItem>
                    <ListItem><ListPoint>દવાઓ:</ListPoint> તમને અથવા તમારા પરિવારના સભ્યોને જરૂરી દવાઓ (બ્લડ પ્રેશર, ડાયાબિટીઝ અને અન્ય સ્થિતિઓ માટે દવાઓ) માં 3 થી 6 મહિના સુધી સ્ટોક અપ કરો. ઉપરાંત, ખાતરી કરો કે તમારી પાસે મલ્ટિવિટામિન સપ્લિમેન્ટ્સ અને આઇબુપ્રોફેન જેવા પેઇનકિલર્સનો સંગ્રહ છે.</ListItem>
                    <ListItem><ListPoint>સહાયક રસાયણો:</ListPoint> ખાતરી કરો કે તમારી પાસે હેન્ડ સેનિટાઇઝર્સ, આઇસોપ્રોપીલ આલ્કોહોલ (આલ્કોહોલ સળીયાથી), જંતુનાશક પદાર્થો, મચ્છર ભગાડનારા, એન્ટી ફંગલ ક્રિમની સારી માત્રા છે.</ListItem>
                    <ListItem><ListPoint>કાર્બોહાઇડ્રેટયુક્ત ખોરાક:</ListPoint> રાંધણ તેલ, રસોઈ ગેસ અને અન્ય રસોડું આવશ્યક વસ્તુઓ સાથે ચોખા, લોટ, ઓટ, કોર્નફ્લેક્સ, બટાટા અને મગફળીના માખણ જેવા કાર્બોહાઈડ્રેટથી ભરપુર 3 થી 4 મહિના સુધી સ્ટોક અપ કરો. તમે નૂડલ્સ, ડાર્ક ચોકલેટ, મધ, ડુંગળી અને લસણ સ્ટોર કરી શકો છો.</ListItem>
                </ul>
                <br/>
                અહીં તમને જોઈતી કેટલીક વૈકલ્પિક વસ્તુઓ છે:
                <ul>
                    <ListItem><ListPoint>આંખનું રક્ષણ:</ListPoint> જો તમે ચેપગ્રસ્ત વિસ્તારની નજીક રહો છો, તો તે જરૂરી છે કે તમારી પાસે આંખની પૂરતી સુરક્ષા હોય. આ કિસ્સામાં, સ્વિમિંગ ગોગલ્સ શ્રેષ્ઠ વિકલ્પ હોઈ શકે છે. સંપૂર્ણ ચહેરો ગેસ માસ્કની તુલનામાં, તે સસ્તા અને વાપરવા માટે સરળ છે, જેની કિંમત નસીબ (અને ઉપલબ્ધ નહીં પણ હોય).</ListItem>
                    <ListItem><ListPoint>હાથ રક્ષણ:</ListPoint> નાઇટ્રિલ ગ્લોવ્સ સસ્તા, નિકાલજોગ, અને પહેરવા માટે સરળ એસેસરીઝ છે જે તમને સંભવિત ચેપગ્રસ્ત લોકો સાથે ત્વચા સંપર્કથી બચાવી શકે છે.</ListItem>
                    <ListItem><ListPoint>વધારાના ખોરાક:</ListPoint> તમે સૂકા ફળો, જામ, મીઠું ચડાવેલું માખણ અને ફ્રી-ડ્રાયડ ફૂડ પર પણ સ્ટોક રાખી શકો છો.</ListItem>
                </ul>
            </Body>
        )
    },
    PUNJABI: {
        title: () => (
            <Title>ਉਹ ਚੀਜ਼ਾਂ ਜੋ ਤੁਹਾਡੇ ਕੋਲ ਹੋਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ.</Title>
        ),
        body: () => (
            <Body>
                ਇਹ ਕੁਝ ਬੁਨਿਆਦੀ ਚੀਜ਼ਾਂ ਹਨ <ListImportant>ਲਾਜ਼ਮੀ ਹੈ</ListImportant> ਕੋਰੋਨਵਾਇਰਸ ਮਹਾਂਮਾਰੀ ਦੌਰਾਨ:
                <br/>
                <ul>
                    <ListItem><ListPoint>ਸੰਦ:</ListPoint> ਮੋਮਬੱਤੀਆਂ, ਬੈਟਰੀਆਂ, ਪਾਵਰ ਬੈਂਕ, ਫਲੈਸ਼ ਲਾਈਟਾਂ, ਸਿਗਰੇਟ ਲਾਈਟਰ, ਡਕਟ ਟੇਪਾਂ, ਕਾਗਜ਼ ਦੇ ਤੌਲੀਏ / ਨੈਪਕਿਨ, ਅਤੇ ਕੈਂਚੀ ਦੀ ਜ਼ਰੂਰਤ ਹੋਏਗੀ.</ListItem>
                    <ListItem><ListPoint>ਮਾਸਕ:</ListPoint> ਤੁਹਾਡੇ ਕੋਲ ਸਟਾਕ ਵਿਚ N95 ਜਾਂ N99 ਮਾਸਕ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ, ਅਤੇ ਜਦੋਂ ਵੀ ਤੁਸੀਂ ਬਾਹਰ ਜਾਂਦੇ ਹੋ ਤਾਂ ਉਨ੍ਹਾਂ ਨੂੰ ਪਹਿਨਣਾ ਨਿਸ਼ਚਤ ਕਰੋ. <ListImportant>ਸਰਜੀਕਲ ਮਾਸਕ ਕੰਮ ਨਹੀਂ ਕਰਨਗੇ, ਅਤੇ ਇੱਥੋਂ ਤੱਕ ਕਿ N95 ਅਤੇ N99 ਮਾਸਕ ਵੀ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਨਹੀਂ ਹਨ.</ListImportant></ListItem>
                    <ListItem><ListPoint>ਦਵਾਈਆਂ:</ListPoint> ਤੁਹਾਨੂੰ ਜਾਂ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਦੇ ਮੈਂਬਰਾਂ ਨੂੰ ਲੋੜੀਂਦੀਆਂ 3 ਤੋਂ 6 ਮਹੀਨਿਆਂ ਦੀਆਂ ਦਵਾਈਆਂ (ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ, ਸ਼ੂਗਰ, ਅਤੇ ਹੋਰ ਹਾਲਤਾਂ ਲਈ ਦਵਾਈਆਂ) ਦਾ ਸਟੋਰ ਕਰੋ. ਨਾਲ ਹੀ, ਇਹ ਸੁਨਿਸ਼ਚਿਤ ਕਰੋ ਕਿ ਤੁਹਾਡੇ ਕੋਲ ਮਲਟੀਵਿਟਾਮਿਨ ਸਪਲੀਮੈਂਟਸ ਅਤੇ ਆਈਬੁਪ੍ਰੋਫੇਨ ਵਰਗੇ ਦਰਦ-ਨਿਵਾਰਕ ਦਾ ਭੰਡਾਰ ਹੈ.</ListItem>
                    <ListItem><ListPoint>ਮਦਦਗਾਰ ਰਸਾਇਣ:</ListPoint> ਇਹ ਸੁਨਿਸ਼ਚਿਤ ਕਰੋ ਕਿ ਤੁਹਾਡੇ ਕੋਲ ਹੱਥ ਦੀ ਰੋਗਾਣੂ, ਆਈਸੋਪ੍ਰੋਪਾਈਲ ਅਲਕੋਹਲ (ਸ਼ਰਾਬ ਪੀਣ), ਕੀਟਾਣੂਨਾਸ਼ਕ, ਮੱਛਰ ਦੂਰ ਕਰਨ ਵਾਲੇ, ਐਂਟੀ-ਫੰਗਲ ਕਰੀਮ ਦੀ ਚੰਗੀ ਮਾਤਰਾ ਹੈ.</ListItem>
                    <ListItem><ListPoint>ਕਾਰਬੋਹਾਈਡਰੇਟ ਨਾਲ ਭਰਪੂਰ ਭੋਜਨ:</ListPoint> ਖਾਣਾ ਪਕਾਉਣ ਵਾਲਾ ਤੇਲ, ਖਾਣਾ ਪਕਾਉਣ ਵਾਲੀ ਗੈਸ ਅਤੇ ਰਸੋਈ ਦੀਆਂ ਹੋਰ ਜ਼ਰੂਰੀ ਚੀਜ਼ਾਂ ਦੇ ਨਾਲ 3 ਤੋਂ 4 ਮਹੀਨਿਆਂ ਦੇ ਕਾਰਬੋਹਾਈਡਰੇਟ ਨਾਲ ਭਰੇ ਭੋਜਨਾਂ, ਜਿਵੇਂ ਚਾਵਲ, ਆਟਾ, ਜਵੀ, ਮੱਕੀ ਦੇ ਮੱਖਣ, ਆਲੂ ਅਤੇ ਮੂੰਗਫਲੀ ਦਾ ਮੱਖਣ ਰੱਖੋ. ਤੁਸੀਂ ਨੂਡਲਜ਼, ਡਾਰਕ ਚਾਕਲੇਟ, ਸ਼ਹਿਦ, ਪਿਆਜ਼ ਅਤੇ ਲਸਣ ਰੱਖ ਸਕਦੇ ਹੋ.</ListItem>
                </ul>
                <br/>
                ਇਹ ਕੁਝ ਵਿਕਲਪਿਕ ਵਸਤੂਆਂ ਹਨ ਜੋ ਤੁਹਾਨੂੰ ਸ਼ਾਇਦ ਲੋੜੀਂਦੀਆਂ ਹੋਣ:
                <ul>
                    <ListItem><ListPoint>ਅੱਖ ਸੁਰੱਖਿਆ:</ListPoint> ਜੇ ਤੁਸੀਂ ਕਿਸੇ ਸੰਕਰਮਿਤ ਖੇਤਰ ਦੇ ਨੇੜੇ ਰਹਿ ਰਹੇ ਹੋ, ਤਾਂ ਇਹ ਲਾਜ਼ਮੀ ਹੈ ਕਿ ਤੁਹਾਨੂੰ ਅੱਖਾਂ ਦੀ .ੁਕਵੀਂ ਸੁਰੱਖਿਆ ਮਿਲੇ. ਇਸ ਸਥਿਤੀ ਵਿੱਚ, ਤੈਰਾਕੀ ਚਸ਼ਮੇ ਸਭ ਤੋਂ ਵਧੀਆ ਵਿਕਲਪ ਹੋ ਸਕਦੇ ਹਨ. ਉਹ ਪੂਰੇ ਸਸਤੇ ਗੈਸ ਮਾਸਕ ਦੀ ਤੁਲਨਾ ਵਿੱਚ ਸਸਤੇ ਅਤੇ ਵਰਤਣ ਵਿੱਚ ਅਸਾਨ ਹਨ, ਜਿਸਦੀ ਕਿਸਮਤ ਦੀ ਕੀਮਤ ਪੈਂਦੀ ਹੈ (ਅਤੇ ਉਪਲਬਧ ਨਹੀਂ ਹੋ ਸਕਦੀ).</ListItem>
                    <ListItem><ListPoint>ਹੱਥ ਸੁਰੱਖਿਆ:</ListPoint> ਨਾਈਟ੍ਰਾਈਲ ਦਸਤਾਨੇ ਸਸਤੇ, ਡਿਸਪੋਸੇਜਲ ਅਤੇ ਅਸਾਨ ਉਪਕਰਣ ਹਨ ਜੋ ਤੁਹਾਨੂੰ ਸੰਭਾਵਤ ਤੌਰ ਤੇ ਸੰਕਰਮਿਤ ਲੋਕਾਂ ਨਾਲ ਚਮੜੀ ਦੇ ਸੰਪਰਕ ਤੋਂ ਬਚਾ ਸਕਦੇ ਹਨ.</ListItem>
                    <ListItem><ListPoint>ਅਤਿਰਿਕਤ ਭੋਜਨ:</ListPoint> ਤੁਸੀਂ ਸੁੱਕੇ ਫਲਾਂ, ਜੈਮ, ਨਮਕੀਨ ਮੱਖਣ, ਅਤੇ ਮੁਫਤ-ਸੁੱਕੇ ਭੋਜਨ 'ਤੇ ਵੀ ਸਟਾਕ ਕਰ ਸਕਦੇ ਹੋ.</ListItem>
                </ul>
            </Body>
        )
    },
    MARATHI: {
        title: () => (
            <Title>आपल्याकडे असणे आवश्यक आहे.</Title>
        ),
        body: () => (
            <Body>
                आपण काही मूलभूत गोष्टी येथे देत आहात <ListImportant>हे केलेच पाहिजे</ListImportant> कोरोनव्हायरस (साथीचा रोग) सर्व देशभर (किंवा खंडभर) असलेला दरम्यान आहे:
                <br/>
                <ul>
                    <ListItem><ListPoint>साधने:</ListPoint> मेणबत्त्या, बॅटरी, पॉवर बँका, फ्लॅशलाइट्स, सिगारेट लाइटर्स, डक्ट टेप, कागदी टॉवेल्स / नॅपकिन्स आणि कात्री लागतील.</ListItem>
                    <ListItem><ListPoint>मुखवटे:</ListPoint> आपल्याकडे स्टॉकमध्ये एन 95 किंवा एन 99 चे मुखवटा असले पाहिजेत आणि जेव्हा आपण बाहेर असाल तेव्हा त्या घालण्याची खात्री करा. <ListImportant>सर्जिकल मास्क कार्य करणार नाहीत आणि N95 आणि N99 मुखवटे देखील तितके प्रभावी नाहीत.</ListImportant></ListItem>
                    <ListItem><ListPoint>औषधे:</ListPoint> आपल्याला किंवा आपल्या कुटुंबातील सदस्यांना आवश्यक असलेल्या 3 ते 6 महिन्यांपर्यंत औषधे (रक्तदाब, मधुमेह आणि इतर परिस्थितींकरिता औषधे) ठेवा. तसेच, आपल्याकडे मल्टीविटामिन सप्लीमंट्स आणि इबुप्रोफेन सारख्या वेदनाशामक औषधांचा संग्रह आहे याची खात्री करा.</ListItem>
                    <ListItem><ListPoint>उपयुक्त रसायने:</ListPoint> आपल्याकडे हातातील सेनिटायझर्स, आयसोप्रोपिल अल्कोहोल (रबिंग अल्कोहोल), जंतुनाशक, मच्छर काढून टाकणारे, एंटी-फंगल क्रीम चांगली प्रमाणात असल्याचे सुनिश्चित करा.</ListItem>
                    <ListItem><ListPoint>कार्बोहायड्रेट युक्त पदार्थ:</ListPoint> तांदूळ, पीठ, ओट्स, कॉर्नफ्लेक्स, बटाटे आणि शेंगदाणा बटर सारख्या cooking ते car महिन्यांच्या कार्बोहायड्रेटयुक्त खाद्यपदार्थासह स्वयंपाक तेल, स्वयंपाक गॅस आणि इतर स्वयंपाकघरातील वस्तूंचा साठा करा. आपण नूडल्स, गडद चॉकलेट, मध, कांदे आणि लसूण ठेवू शकता.</ListItem>
                </ul>
                <br/>
                आपल्यास कदाचित आवश्यक असलेल्या काही पर्यायी वस्तू येथे आहेतः
                <ul>
                    <ListItem><ListPoint>डोळा संरक्षण:</ListPoint> आपण एखाद्या संक्रमित क्षेत्राच्या जवळ राहत असल्यास आपल्याकडे डोळ्यांचे संरक्षण करणे आवश्यक आहे. अशा परिस्थितीत पोहणे चष्मा हा एक उत्तम पर्याय असू शकतो. भविष्यकाळ (आणि उपलब्ध नसू शकते) किंमत असलेल्या पूर्ण-फेस गॅस मास्कच्या तुलनेत ते स्वस्त आणि वापरण्यास सुलभ आहेत.</ListItem>
                    <ListItem><ListPoint>हात संरक्षण:</ListPoint> नायट्रील ग्लोव्हज स्वस्त, डिस्पोजेबल आणि सोपी असणारी उपकरणे आहेत जी संभाव्यत: संक्रमित लोकांच्या त्वचेच्या संपर्कातून आपले रक्षण करू शकतात.</ListItem>
                    <ListItem><ListPoint>अतिरिक्त पदार्थ:</ListPoint> सुकामेवा, जाम, खारट लोणी आणि फ्री-वाळलेल्या पदार्थांवर आपण साठा करू शकता.</ListItem>
                </ul>
            </Body>
        )
    },
    NEPALI: {
        title: () => (
            <Title>चीजहरू तपाईसँग हुनुपर्दछ।</Title>
        ),
        body: () => (
            <Body>
                यहाँ केही आधारभूत वस्तुहरू छन् <ListImportant>पर्छ</ListImportant> कोरोनाभाइरस महामारीको समयमा छ:
                <br/>
                <ul>
                    <ListItem><ListPoint>उपकरणहरू:</ListPoint> मैनबत्तीहरू, ब्याट्रीहरू, पावर बैंकहरू, फ्ल्यासलाइटहरू, सिगरेट लाइटरहरू, डक्ट टेपहरू, कागज तौलिया / नेपकिनहरू, र कैंची आवश्यक पर्नेछ।</ListItem>
                    <ListItem><ListPoint>मास्क:</ListPoint> तपाईंसँग N95 वा N99 मास्कहरू स्टकमा हुनुपर्दछ, र निश्चित गर्नुहोस् जब तपाईं बाहिर जानुहुन्छ। <ListImportant>सर्जिकल मास्कले काम गर्दैन, र N95 र N99 मास्क पनि प्रभावशाली छैनन्।</ListImportant></ListItem>
                    <ListItem><ListPoint>औषधी:</ListPoint> तपाईं वा तपाईंको परिवारका सदस्यहरूलाई चाहिने औषधिहरूको to देखि months महिनामा स्टक अप गर्नुहोस् (रक्तचाप, मधुमेह, र अन्य स्थितिका लागि ड्रग्स)। साथै, यो कुरा निश्चित गर्नुहोस् कि तपाईसँग मल्टिभिटमिन स्लिमेन्टहरूको संग्रह छ, र पेनकिलरहरू जस्तै इबुप्रोफेन।</ListItem>
                    <ListItem><ListPoint>सहयोगी रसायनहरू:</ListPoint> निश्चित गर्नुहोस् कि तपाईंसँग राम्रो मात्रामा हात सेनिटाइजरहरू, isopropyl रक्सी (मदिरा रबिंग), कीटाणुनाशक, लामखुट्टे हटाउने औषधी, एंटी-फंगल क्रीमहरू छन्।</ListItem>
                    <ListItem><ListPoint>कार्बोहाइड्रेट युक्त खाद्य पदार्थ:</ListPoint> चामल, पिठो, ओट्स, कर्नफ्लाक्स, आलु, र बदाम बटर जस्ता खाना पकाउने तेल, खाना पकाउने ग्यास, र अन्य भान्साको आवश्यक चीजहरूको साथमा to देखि months महिनाको कार्बोहाइड्रेट युक्त खाद्य पदार्थहरूको शेयर गर्नुहोस्। तपाईं नूडल्स, गाढा चकलेट, मह, प्याज, र लसुन भण्डारण गर्न सक्नुहुनेछ।</ListItem>
                </ul>
                <br/>
                यहाँ केहि वैकल्पिक वस्तुहरू छन् जुन तपाईलाई आवश्यक पर्न सक्छ:
                <ul>
                    <ListItem><ListPoint>आँखा सुरक्षा:</ListPoint> यदि तपाईं संक्रमित क्षेत्रको नजिक बस्नुहुन्छ भने, यो आवश्यक छ कि तपाईंसँग पर्याप्त आँखा सुरक्षा छ। यस्तो अवस्थामा स्विमि swimming गग्गल्स उत्तम विकल्प हुन सक्दछ। भाग्य लागत (र उपलब्ध नहुन सक्छ) पूरा अनुहार ग्यास मास्कको तुलनामा तिनीहरू सस्तो र प्रयोग गर्न सजिलो हुन्छ।</ListItem>
                    <ListItem><ListPoint>हात सुरक्षा:</ListPoint> नाइट्रिल ग्लोभहरू सस्तो, डिस्पोजेबल, र सज्न सजिलो सामानहरू हुन् जसले तपाईंलाई सम्भावित संक्रमित व्यक्तिहरूको साथ छाला सम्पर्कबाट बचाउन सक्छ।</ListItem>
                    <ListItem><ListPoint>थप खाना:</ListPoint> तपाईं सुक्खा फल, जाम, नुनिलो माखन, र फ्रि-सुकेको खाना पनि स्टक गर्न सक्नुहुन्छ।</ListItem>
                </ul>
            </Body>
        )
    },
    TAMIL: {
        title: () => (
            <Title>உங்களிடம் இருக்க வேண்டிய விஷயங்கள்.</Title>
        ),
        body: () => (
            <Body>
                நீங்கள் சில அடிப்படை உருப்படிகள் இங்கே <ListImportant>வேண்டும்</ListImportant> கொரோனா வைரஸ் தொற்றுநோய்களின் போது:
                <br/>
                <ul>
                    <ListItem><ListPoint>கருவிகள்:</ListPoint> மெழுகுவர்த்திகள், பேட்டரிகள், பவர் வங்கிகள், ஒளிரும் விளக்குகள், சிகரெட் லைட்டர்கள், குழாய் நாடாக்கள், காகித துண்டுகள் / நாப்கின்கள் மற்றும் கத்தரிக்கோல் தேவைப்படும்.</ListItem>
                    <ListItem><ListPoint>முகமூடிகள்:</ListPoint> உங்களிடம் N95 அல்லது N99 முகமூடிகள் இருக்க வேண்டும், நீங்கள் வெளியே செல்லும் போதெல்லாம் அவற்றை அணிய மறக்காதீர்கள். <ListImportant>அறுவைசிகிச்சை முகமூடிகள் இயங்காது, மேலும் N95 மற்றும் N99 முகமூடிகள் கூட பயனுள்ளதாக இல்லை.</ListImportant></ListItem>
                    <ListItem><ListPoint>மருந்துகள்:</ListPoint> உங்களுக்கோ அல்லது உங்கள் குடும்ப உறுப்பினர்களுக்கோ தேவைப்படும் 3 முதல் 6 மாத மருந்துகளை (இரத்த அழுத்தம், நீரிழிவு மற்றும் பிற நிலைமைகளுக்கான மருந்துகள்) சேமித்து வைக்கவும். மேலும், உங்களிடம் மல்டிவைட்டமின் சப்ளிமெண்ட்ஸ் மற்றும் இப்யூபுரூஃபன் போன்ற வலி நிவாரணி மருந்துகள் உள்ளனவா என்பதை உறுதிப்படுத்திக் கொள்ளுங்கள்.</ListItem>
                    <ListItem><ListPoint>பயனுள்ள இரசாயனங்கள்:</ListPoint> உங்களிடம் நல்ல அளவு கை சுத்திகரிப்பாளர்கள், ஐசோபிரைல் ஆல்கஹால் (ஆல்கஹால் தேய்த்தல்), கிருமிநாசினிகள், கொசு விரட்டிகள், பூஞ்சை எதிர்ப்பு கிரீம்கள் இருப்பதை உறுதிப்படுத்திக் கொள்ளுங்கள்.</ListItem>
                    <ListItem><ListPoint>கார்போஹைட்ரேட் நிறைந்த உணவுகள்:</ListPoint> 3 முதல் 4 மாதங்கள் வரை கார்போஹைட்ரேட் நிறைந்த உணவுகளான அரிசி, மாவு, ஓட்ஸ், கார்ன்ஃப்ளேக்ஸ், உருளைக்கிழங்கு மற்றும் வேர்க்கடலை வெண்ணெய், சமையல் எண்ணெய், சமையல் எரிவாயு மற்றும் பிற சமையலறை அத்தியாவசிய பொருட்களுடன் சேமிக்கவும். நீங்கள் நூடுல்ஸ், டார்க் சாக்லேட்டுகள், தேன், வெங்காயம், பூண்டு ஆகியவற்றை சேமிக்கலாம்.</ListItem>
                </ul>
                <br/>
                உங்களுக்கு தேவையான சில விருப்ப உருப்படிகள் இங்கே:
                <ul>
                    <ListItem><ListPoint>கண் பாதுகாப்பு:</ListPoint> நீங்கள் பாதிக்கப்பட்ட பகுதிக்கு அருகில் வசிக்கிறீர்கள் என்றால், உங்களுக்கு போதுமான கண் பாதுகாப்பு இருப்பது அவசியம். இந்த வழக்கில், நீச்சல் கண்ணாடிகள் சிறந்த தேர்வாக இருக்கலாம். முழு மலிவான வாயு முகமூடிகளுடன் ஒப்பிடும்போது அவை மலிவானவை மற்றும் பயன்படுத்த எளிதானவை, அவை ஒரு செல்வத்தை செலவழிக்கின்றன (கிடைக்காமல் போகலாம்).</ListItem>
                    <ListItem><ListPoint>கை பாதுகாப்பு:</ListPoint> நைட்ரைல் கையுறைகள் மலிவானவை, களைந்துவிடும் மற்றும் அணிய எளிதான பாகங்கள்.</ListItem>
                    <ListItem><ListPoint>கூடுதல் உணவுகள்:</ListPoint> உலர்ந்த பழங்கள், ஜாம், உப்பு வெண்ணெய் மற்றும் இலவச உலர்ந்த உணவுகள் ஆகியவற்றிலும் நீங்கள் சேமிக்கலாம்.</ListItem>
                </ul>
            </Body>
        )
    },
    TELUGU: {
        title: () => (
            <Title>మీరు కలిగి ఉన్న విషయాలు.</Title>
        ),
        body: () => (
            <Body>
                ఇక్కడ మీరు కొన్ని ప్రాథమిక అంశాలు ఉన్నాయి <ListImportant>తప్పక</ListImportant> కరోనావైరస్ మహమ్మారి సమయంలో:
                <br/>
                <ul>
                    <ListItem><ListPoint>పరికరములు:</ListPoint> కొవ్వొత్తులు, బ్యాటరీలు, పవర్ బ్యాంకులు, ఫ్లాష్‌లైట్లు, సిగరెట్ లైటర్లు, డక్ట్ టేపులు, పేపర్ తువ్వాళ్లు / న్యాప్‌కిన్లు మరియు కత్తెరలు అవసరం.</ListItem>
                    <ListItem><ListPoint>ముసుగులు:</ListPoint> మీరు స్టాక్లో N95 లేదా N99 ముసుగులు కలిగి ఉండాలి మరియు మీరు బయటికి వెళ్ళినప్పుడల్లా వాటిని ధరించడం మర్చిపోవద్దు. <ListImportant>శస్త్రచికిత్స ముసుగులు పనిచేయవు మరియు N95 మరియు N99 ముసుగులు కూడా అంత ప్రభావవంతంగా లేవు.</ListImportant></ListItem>
                    <ListItem><ListPoint>మెడిసిన్స్:</ListPoint> మీకు లేదా మీ కుటుంబ సభ్యులకు అవసరమైన 3 నుండి 6 నెలల మందులను (రక్తపోటు, మధుమేహం మరియు ఇతర పరిస్థితులకు మందులు) నిల్వ చేయండి. అలాగే, మీకు మల్టీవిటమిన్ సప్లిమెంట్స్ మరియు ఇబుప్రోఫెన్ వంటి నొప్పి నివారణల సేకరణ ఉందని నిర్ధారించుకోండి.</ListItem>
                    <ListItem><ListPoint>సహాయక రసాయనాలు:</ListPoint> మీకు హ్యాండ్ శానిటైజర్స్, ఐసోప్రొపైల్ ఆల్కహాల్ (మద్యం రుద్దడం), క్రిమిసంహారకాలు, దోమల నివారణ మందులు, యాంటీ ఫంగల్ క్రీములు ఉన్నాయని నిర్ధారించుకోండి.</ListItem>
                    <ListItem><ListPoint>కార్బోహైడ్రేట్ అధికంగా ఉండే ఆహారాలు:</ListPoint> 3 నుండి 4 నెలల కార్బోహైడ్రేట్ అధికంగా ఉండే ఆహారాలు, బియ్యం, పిండి, వోట్స్, కార్న్‌ఫ్లేక్స్, బంగాళాదుంపలు మరియు వేరుశెనగ వెన్నతో పాటు వంట నూనె, వంట గ్యాస్ మరియు ఇతర వంటగది నిత్యావసరాలను నిల్వ చేయండి. మీరు నూడుల్స్, డార్క్ చాక్లెట్లు, తేనె, ఉల్లిపాయలు మరియు వెల్లుల్లిని నిల్వ చేయవచ్చు.</ListItem>
                </ul>
                <br/>
                మీకు అవసరమైన కొన్ని ఐచ్ఛిక అంశాలు ఇక్కడ ఉన్నాయి:
                <ul>
                    <ListItem><ListPoint>కంటి రక్షణ:</ListPoint> మీరు సోకిన ప్రాంతానికి దగ్గరగా నివసిస్తుంటే, మీకు తగినంత కంటి రక్షణ ఉండటం చాలా అవసరం. ఈ సందర్భంలో, ఈత గాగుల్స్ ఉత్తమ ఎంపిక. పూర్తి-ముఖ గ్యాస్ మాస్క్‌లతో పోల్చితే అవి చౌకైనవి మరియు ఉపయోగించడానికి సులభమైనవి (మరియు అందుబాటులో ఉండకపోవచ్చు).</ListItem>
                    <ListItem><ListPoint>చేతి రక్షణ:</ListPoint> నైట్రిల్ గ్లోవ్స్ చౌకైనవి, పునర్వినియోగపరచలేనివి మరియు ధరించే ఉపకరణాలు, ఇవి సోకిన వ్యక్తులతో చర్మ సంబంధాల నుండి మిమ్మల్ని రక్షించగలవు.</ListItem>
                    <ListItem><ListPoint>అదనపు ఆహారాలు:</ListPoint> మీరు ఎండిన పండ్లు, జామ్లు, సాల్టెడ్ వెన్న మరియు ఉచిత ఎండిన ఆహారాలపై కూడా నిల్వ చేయవచ్చు.</ListItem>
                </ul>
            </Body>
        )
    },
    URDU: {
        title: () => (
            <Title>جو چیزیں آپ کے پاس ہونی چاہئیں۔</Title>
        ),
        body: () => (
            <Body>
                آپ کو کچھ بنیادی چیزیں یہ ہیں <ListImportant>لازمی</ListImportant> کورونا وائرس وبائی مرض کے دوران ہونا:
                <br/>
                <ul>
                    <ListItem><ListPoint>اوزار:</ListPoint> موم بتیاں ، بیٹریاں ، بجلی کے بینک ، فلیش لائٹس ، سگریٹ لائٹر ، ڈکٹ ٹیپس ، کاغذ کے تولیے / نیپکن اور کینچی کی ضرورت ہوگی۔</ListItem>
                    <ListItem><ListPoint>ماسک:</ListPoint> آپ کے پاس اسٹاک میں N95 یا N99 ماسک موجود ہوں ، اور جب بھی آپ باہر جائیں گے تو ان کو ضرور پہنیں۔ <ListImportant>جراحی کے ماسک کام نہیں کریں گے ، اور یہاں تک کہ N95 اور N99 ماسک بھی اتنے موثر نہیں ہیں۔</ListImportant></ListItem>
                    <ListItem><ListPoint>دوائیں:</ListPoint> 3 سے 6 ماہ تک دواؤں کا ذخیرہ کریں جس کی آپ کو یا آپ کے اہل خانہ کو ضرورت ہے (بلڈ پریشر ، ذیابیطس ، اور دیگر حالتوں کے لئے دوائیں)۔ نیز ، یہ بھی یقینی بنائیں کہ آپ کے پاس ملٹی وٹامن ضمیمہ جات ، اور درد سازوں جیسے ابوپروفین کا ایک مجموعہ ہے۔</ListItem>
                    <ListItem><ListPoint>مددگار کیمیکل:</ListPoint> اس بات کو یقینی بنائیں کہ آپ کو ہاتھ سے صاف کرنے والے ، آئسوپروپائل الکحل (شراب رگڑنے) ، ڈس انفیکشن ، مچھر سے بچانے والے ، اینٹی فنگل کریم موجود ہیں۔</ListItem>
                    <ListItem><ListPoint>کاربوہائیڈریٹ سے بھرپور غذا:</ListPoint> 3 سے 4 ماہ تک کاربوہائیڈریٹ سے بھرپور غذائیں ، جیسے چاول ، آٹا ، جئ ، مکئی کے ٹکڑے ، آلو اور مونگ پھلی کا مکھن ، ساتھ ہی کھانا پکانے کا تیل ، کھانا پکانے گیس ، اور باورچی خانے کے دیگر لوازمات کا ذخیرہ کریں۔ آپ نوڈلس ، سیاہ چاکلیٹ ، شہد ، پیاز اور لہسن کو محفوظ کر سکتے ہیں۔</ListItem>
                </ul>
                <br/>
                یہاں کچھ اختیاری اشیا ہیں جن کی آپ کو ضرورت ہوسکتی ہے۔
                <ul>
                    <ListItem><ListPoint>آنکھوں کا تحفظ:</ListPoint> اگر آپ کسی متاثرہ علاقے کے قریب رہ رہے ہیں تو ، یہ ضروری ہے کہ آپ کو آنکھوں کا مناسب تحفظ حاصل ہو۔ اس معاملے میں ، سوئمنگ چشمیں بہترین آپشن ہوسکتے ہیں۔ وہ پورے چہرے والے گیس ماسک کے مقابلے میں سستے اور استعمال میں آسان ہیں جن کی قیمت میں ایک قیمت ہوتی ہے (اور یہ دستیاب نہیں ہوسکتا ہے)۔</ListItem>
                    <ListItem><ListPoint>ہاتھ سے تحفظ:</ListPoint> نائٹریل دستانے سستے ، ڈسپوزایبل ، اور پہننے میں آسان لوازمات ہیں جو آپ کو ممکنہ طور پر متاثرہ افراد سے جلد رابطے سے بچا سکتے ہیں۔</ListItem>
                    <ListItem><ListPoint>اضافی کھانے کی اشیاء:</ListPoint> آپ خشک میوہ جات ، جام ، نمکین مکھن ، اور بغیر خشک کھانے کی اشیاء پر بھی اسٹاک کرسکتے ہیں۔</ListItem>
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

function MustHaves(props) {
    return (
        <Wrapper id="musthaves" global={ props.global }>
            <Content global={ props.global }/>
        </Wrapper>
    )
}


// PropTypes:
MustHaves.propTypes = {
    global: PropTypes.object.isRequired,
    reduxProps: PropTypes.object.isRequired
};


// Exports:
export default connect(mapStateToProps, mapDispatchToProps)(MustHaves);