// Packages:
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


// Redux:
const mapStateToProps = state => {
    return {
        global: state.global,
        reduxProps: state.components.MustDo
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

const Reference = styled.a`
    margin: 0em 0.1em;
    color: #fd79a8;
    text-decoration: none;
`;

const Superscript = styled.sup`
    font-size: 0.6em;
`;


// Content:
const CONTENT = {
    ENGLISH: {
        title: () => (
            <Title>Things you must do.</Title>
        ),
        body: () => (
            <Body>
                Here are some things you <ListImportant>must</ListImportant> do during the coronavirus pandemic:                <br/>
                <ul>
                    <ListItem><ListPoint>Always wear masks when outside:</ListPoint> Masks not only prevent you from touching your face, they also stop germ particles from entering your nose and mouth.</ListItem>
                    <ListItem><ListPoint>Wash hands frequently:</ListPoint> You should wash hands after coming from outside or from the washroom, and before eating or cooking food. Proper hygiene is absolutely critical to ensuring good health. Additionally, carry a small hand sanitizer with you, to clean your hands on the fly.</ListItem>
                    <ListItem><ListPoint>Donate:</ListPoint> Support your neighbours and the old members of your community, donate extra masks to your neighbours, family members and maids (if any) who don't have any. Additionally, you should probably consider asking any house maids who work in your home/office to take a leave.</ListItem>
                    <ListItem><ListPoint>Manage electricity:</ListPoint> It is entirely possible that there will be prolonged power-cuts wherever you stay. For this, make sure that you have an inverter system, or at least power banks and rechargable batteries. Some might even consider purchasing small solar panels and charge controllers.</ListItem>
                    <ListItem><ListPoint>Clean drinking water:</ListPoint> Make sure that you have a basic water filtration system that can work without electricity. Boiling the water before drinking will work wonders, other methods include using a tiny pinch of potassium permanganate, adding iodine tablets, using chlorine drops, or using a UV flashlight to purify water.<Reference target="_blank" href="https://www.bryceviewlodge.com/make-water-safe-drinking-simple-water-purification-techniques/"><Superscript>8</Superscript></Reference></ListItem>
                </ul>
                <br/>
                Here are some additional tips:
                <ul>
                    <ListItem><ListPoint>Spray isopropyl alcohol (rubbing alcohol) on clothes:</ListPoint> After coming back home from a short trip outside, spray your clothes with rubbing alcohol/isopropyl alcohol (don't breathe it in too much!).<Reference target="_blank" href="https://journal.com.ph/lifestyle/health-and-wellness/ethyl-or-isopropyl-alcohol"><Superscript>9</Superscript></Reference> Additionally, be sure to clean your mobile screens with rubbing alcohol/isopropyl alcohol as well, because <ListImportant>research suggests that the coronavirus can live on your phone screens for upto 96 hours.</ListImportant><Reference target="_blank" href="https://qz.com/1810508/covid-19-can-likely-live-up-to-96-hours-on-your-phone/"><Superscript>10</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>Eat garlic:</ListPoint> Garlic contains compounds that help the immune system fight germs, along with a compound known as alliin. <ListImportant>Note: Eating garlic will NOT make you immune towards the coronavirus under any circumstances.</ListImportant> Garlic prevents common cold and flu from attacking your body, which means that if you show symptoms such as dry cough, fever, and sore throat, there will be higher probability that you are infected. Even then, your strong immune system will be better at fighting the coronavirus.<Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11238807"><Superscript>11</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/25961060"><Superscript>12</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5537651/"><Superscript>13</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/22280901"><Superscript>14</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11697022"><Superscript>15</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>Keep morale high:</ListPoint> If you take the necessary precautions, you will be alright. It might feel like the end of the world, but it's not. Take this time to work on your hobbies, develop new skills, read books that interest you, watch movies at home that you might have missed out on, and spend some quality time with your family.</ListItem>
                </ul>
            </Body>
        )
    },
    HINDI: {
        title: () => (
            <Title>चीजें जो आपको करनी चाहिए।</Title>
        ),
        body: () => (
            <Body>
               यहाँ कुछ चीजें हैं जो आपको अवश्य कोरोनावायरस महामारी के दौरान करनी चाहिए:
                <br/>
                <ul>
                    <ListItem><ListPoint>हमेशा बाहर होने पर मास्क पहनें:</ListPoint> मुखौटे न केवल आपको अपने चेहरे को छूने से रोकते हैं, वे आपकी नाक और मुंह में प्रवेश करने से रोगाणु कणों को भी रोकते हैं।</ListItem>
                    <ListItem><ListPoint>बार-बार हाथ धोएं:</ListPoint> आपको बाहर से या वॉशरूम से आने के बाद और खाना खाने या खाना पकाने से पहले हाथ धोना चाहिए। अच्छे स्वास्थ्य को सुनिश्चित करने के लिए उचित स्वच्छता बिल्कुल महत्वपूर्ण है। इसके अतिरिक्त, मक्खी पर अपने हाथों को साफ करने के लिए, अपने साथ एक छोटा सा हैंडनिटाइज़र ले जाएँ।</ListItem>
                    <ListItem><ListPoint>वस्तुओं का दान करें:</ListPoint> अपने पड़ोसियों और अपने समुदाय के पुराने सदस्यों का समर्थन करें, अपने पड़ोसियों, परिवार के सदस्यों और नौकरानियों (यदि कोई हो) को अतिरिक्त मास्क दान करें जो कोई भी नहीं है। इसके अतिरिक्त, आपको शायद किसी भी घर के नौकरानियों से पूछने पर विचार करना चाहिए जो आपके घर / कार्यालय में काम करते हैं।</ListItem>
                    <ListItem><ListPoint>बिजली का प्रबंध करें:</ListPoint> यह पूरी तरह से संभव है कि आप जहां भी रहें, वहां लंबे समय तक बिजली कटौती हो। इसके लिए, सुनिश्चित करें कि आपके पास एक इन्वर्टर सिस्टम, या कम से कम पावर बैंक और रिचार्ज करने योग्य बैटरी हैं। कुछ लोग छोटे सौर पैनल और चार्ज कंट्रोलर खरीदने पर भी विचार कर सकते हैं।</ListItem>
                    <ListItem><ListPoint>पीने का साफ पानी:</ListPoint> सुनिश्चित करें कि आपके पास एक बुनियादी जल निस्पंदन प्रणाली है जो बिजली के बिना काम कर सकती है। पीने से पहले पानी को उबालना अद्भुत होगा, अन्य तरीकों में पोटेशियम परमैंगनेट की एक छोटी चुटकी का उपयोग करना, आयोडीन की गोलियाँ जोड़ना, क्लोरीन की बूंदों का उपयोग करना या पानी को शुद्ध करने के लिए एक यूवी टॉर्च का उपयोग करना शामिल है।<Reference target="_blank" href="https://www.bryceviewlodge.com/make-water-safe-drinking-simple-water-purification-techniques/"><Superscript>8</Superscript></Reference></ListItem>
                </ul>
                <br/>
                यहाँ कुछ अतिरिक्त सुझाव दिए गए हैं:
                <ul>
                    <ListItem><ListPoint>कपड़े पर आइसोप्रोपिल अल्कोहल (रबिंग अल्कोहल) स्प्रे करें:</ListPoint> बाहर की छोटी यात्रा से घर वापस आने के बाद, अपने कपड़ों को रबिंग अल्कोहल / इसोप्रोपिल अल्कोहल (बहुत अधिक मात्रा में साँस न लें!) के साथ स्प्रे करें। <Reference target="_blank" href="https://journal.com.ph/lifestyle/health-and-wellness/ethyl-or-isopropyl-alcohol"><Superscript>9</Superscript></Reference> इसके अतिरिक्त, अपने मोबाइल स्क्रीन को रबिंग अल्कोहल / इसोप्रोपाइल अल्कोहल के साथ भी साफ करना सुनिश्चित करें, क्योंकि <ListImportant>शोध बताता है कि कोरोनोवायरस 96 घंटों तक आपके फोन स्क्रीन पर रह सकता है।</ListImportant><Reference target="_blank" href="https://qz.com/1810508/covid-19-can-likely-live-up-to-96-hours-on-your-phone/"><Superscript>10</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>लहसुन का सेवन करें:</ListPoint> लहसुन में ऐसे यौगिक होते हैं जो प्रतिरक्षा प्रणाली को कीटाणुओं से लड़ने में मदद करते हैं, साथ ही एक यौगिक जिसे एलिन कहा जाता है। <ListImportant>नोट: लहसुन का सेवन आपको किसी भी परिस्थिति में कोरोनावायरस की ओर प्रतिरक्षा नहीं करेगा।</ListImportant> लहसुन आम सर्दी और फ्लू को आपके शरीर पर हमला करने से रोकता है, जिसका अर्थ है कि यदि आप सूखी खांसी, बुखार और गले में खराश जैसे लक्षण दिखाते हैं, तो उच्च संभावना होगी कि आप संक्रमित हैं। फिर भी, आपकी मजबूत प्रतिरक्षा प्रणाली कोरोनावायरस से लड़ने में बेहतर होगी।<Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11238807"><Superscript>11</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/25961060"><Superscript>12</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5537651/"><Superscript>13</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/22280901"><Superscript>14</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11697022"><Superscript>15</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>मनोबल ऊँचा रखें:</ListPoint> यदि आप आवश्यक सावधानी बरतेंगे, तो आप ठीक हो जाएंगे। यह दुनिया के अंत की तरह लग सकता है, लेकिन ऐसा नहीं है। इस समय को अपने शौक पर काम करने के लिए लें, नए कौशल विकसित करें, उन पुस्तकों को पढ़ें, जिनमें आपकी रुचि हो, घर पर ऐसी फिल्में देखें जिन्हें आपने याद किया हो, और अपने परिवार के साथ कुछ गुणवत्ता वाला समय बिताएं।</ListItem>
                </ul>
            </Body>
        )
    },
    BENGALI: {
        title: () => (
            <Title>আপনার অবশ্যই যা করা উচিত।</Title>
        ),
        body: () => (
            <Body>
                করোনাভাইরাস মহামারী চলাকালীন আপনাকে অবশ্যই কিছু জিনিস করতে হবে:
                <br/>
                <ul>
                    <ListItem><ListPoint>বাইরে থাকাকালীন সর্বদা মুখোশ পরুন:</ListPoint> মুখোশগুলি আপনাকে কেবল আপনার মুখ স্পর্শ করা থেকে বিরত রাখে না, এগুলি জীবাণু কণাকে আপনার নাক এবং মুখের প্রবেশ থেকে বিরত রাখে।</ListItem>
                    <ListItem><ListPoint>ঘন ঘন হাত ধোয়া:</ListPoint> বাইরে থেকে বা ওয়াশরুম থেকে আসার পরে এবং খাবার খাওয়া বা রান্না করার আগে আপনার হাত ধুয়ে নেওয়া উচিত। সুস্বাস্থ্য নিশ্চিত করার জন্য সঠিক স্বাস্থ্যবিধি একেবারেই সমালোচিত। অতিরিক্তভাবে, ফ্লাইয়ে আপনার হাত পরিষ্কার করতে, আপনার সাথে একটি ছোট হাত স্যানিটাইজার বহন করুন।</ListItem>
                    <ListItem><ListPoint>জিনিস দান করুন:</ListPoint> আপনার প্রতিবেশী এবং আপনার সম্প্রদায়ের পুরানো সদস্যদের সমর্থন করুন, আপনার প্রতিবেশী, পরিবারের সদস্য এবং গৃহকর্মীদের (যদি থাকে) যাদের নেই তাদের অতিরিক্ত মুখোশ দান করুন। অধিকন্তু, আপনার সম্ভবত আপনার বাড়ি / অফিসে যে কোনও গৃহকর্মী ছুটি নেওয়ার জন্য জিজ্ঞাসা করার কথা বিবেচনা করা উচিত।</ListItem>
                    <ListItem><ListPoint>বিদ্যুৎ পরিচালনা করুন:</ListPoint> এটি সম্পূর্ণভাবে সম্ভব যে আপনি যেখানেই থাকুন সেখানে দীর্ঘায়িত শক্তি-কাটা পড়তে হবে। এর জন্য, আপনার কাছে একটি বৈদ্যুতিন সংকেতের মেরু বদল সিস্টেম, বা কমপক্ষে পাওয়ার ব্যাংক এবং রিচার্জেবল ব্যাটারি রয়েছে তা নিশ্চিত করুন। কিছু এমনকি ছোট সোলার প্যানেল এবং চার্জ কন্ট্রোলার কেনার বিষয়ে বিবেচনা করতে পারে।</ListItem>
                    <ListItem><ListPoint>পরিষ্কার পানীয় জল:</ListPoint> আপনার কাছে এমন একটি বেসিক ওয়াটার ফিলটারেশন সিস্টেম রয়েছে যা বিদ্যুত ছাড়াই কাজ করতে পারে তা নিশ্চিত করুন। পান করার আগে জল ফুটানো আশ্চর্যজনকভাবে কাজ করবে, অন্যান্য পদ্ধতির মধ্যে রয়েছে একটি ছোট চিমটি পটাসিয়াম পারম্যাঙ্গনেট ব্যবহার, আয়োডিন ট্যাবলেট যুক্ত করা, ক্লোরিন ড্রপ ব্যবহার করা, বা জল বিশুদ্ধ করার জন্য একটি ইউভি ফ্ল্যাশলাইট ব্যবহার করা।<Reference target="_blank" href="https://www.bryceviewlodge.com/make-water-safe-drinking-simple-water-purification-techniques/"><Superscript>8</Superscript></Reference></ListItem>
                </ul>
                <br/>
                এখানে কিছু অতিরিক্ত টিপস দেওয়া হয়েছে:
                <ul>
                    <ListItem><ListPoint>কাপড়ে আইসোপ্রোপাইল অ্যালকোহল (অ্যালকোহল ঘষা) স্প্রে করুন:</ListPoint> বাইরে স্বল্প ভ্রমণে বাড়ি ফিরে আসার পরে, আপনার পোশাকগুলি ঘষে অ্যালকোহল / আইসোপ্রোপিল অ্যালকোহল দিয়ে স্প্রে করুন (এটি খুব বেশি শ্বাস ফেলবেন না!)।<Reference target="_blank" href="https://journal.com.ph/lifestyle/health-and-wellness/ethyl-or-isopropyl-alcohol"><Superscript>9</Superscript></Reference> তদ্ব্যতীত, আপনার মোবাইল স্ক্রিনগুলিও ঘষে অ্যালকোহল / আইসোপ্রোপিল অ্যালকোহল দিয়ে পরিষ্কার করা নিশ্চিত করুন, কারণ <ListImportant> গবেষণা থেকে জানা যায় যে করোনভাইরাস আপনার ফোনের পর্দায় 96 ঘন্টা অবধি বেঁচে থাকতে পারে।</ListImportant><Reference target="_blank" href="https://qz.com/1810508/covid-19-can-likely-live-up-to-96-hours-on-your-phone/"><Superscript>10</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>রসুন খান:</ListPoint> রসুনে এমন যৌগ রয়েছে যা প্রতিরক্ষা ব্যবস্থা জীবাণুগুলির সাথে লড়াই করতে সহায়তা করে এবং এর সাথে অ্যালিন নামে পরিচিত একটি যৌগ থাকে। <ListImportant>দ্রষ্টব্য: রসুন খাওয়া আপনাকে কোনও পরিস্থিতিতে করোনভাইরাস থেকে প্রতিরোধ ক্ষমতা তৈরি করবে না।</ListImportant> রসুন আপনার শরীরে আক্রমণ থেকে সাধারণ সর্দি এবং ফ্লু প্রতিরোধ করে, যার অর্থ আপনি যদি শুকনো কাশি, জ্বর এবং গলা ব্যথায় লক্ষণগুলি দেখান তবে আপনার সংক্রমণ হওয়ার সম্ভাবনা বেশি থাকে higher তারপরেও আপনার শক্তিশালী রোগ প্রতিরোধ ক্ষমতা করোনভাইরাসকে লড়াই করার ক্ষেত্রে আরও ভাল।<Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11238807"><Superscript>11</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/25961060"><Superscript>12</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5537651/"><Superscript>13</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/22280901"><Superscript>14</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11697022"><Superscript>15</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>মনোবল উঁচু রাখুন:</ListPoint> আপনি যদি প্রয়োজনীয় সতর্কতা অবলম্বন করেন তবে আপনি ঠিক হয়ে যাবেন। এটি বিশ্বের শেষের মতো মনে হতে পারে, তবে তা নয়। আপনার শখগুলিতে কাজ করার জন্য, নতুন দক্ষতা বিকাশের জন্য, আপনার আগ্রহী বইগুলি পড়তে, ঘরে বসে সিনেমা দেখার জন্য যা আপনার হাতছাড়া হতে পারে এবং আপনার পরিবারের সাথে কিছু গুণমানের সময় কাটাতে এই সময় নিন।</ListItem>
                </ul>
            </Body>
        )
    },
    GUJARATI: {
        title: () => (
            <Title>જે વસ્તુઓ તમારે કરવી જોઈએ.</Title>
        ),
        body: () => (
            <Body>
                અહીં કેટલીક વસ્તુઓ છે <ListImportant>જ જોઈએ</ListImportant> કોરોનાવાયરસ રોગચાળા દરમિયાન કરો:
                <br/>
                <ul>
                    <ListItem><ListPoint>હંમેશા જ્યારે બહાર હોય ત્યારે માસ્ક પહેરો:</ListPoint> માસ્ક ફક્ત તમારા ચહેરાને સ્પર્શતા અટકાવે છે, પરંતુ તે સૂક્ષ્મજીવના કણોને તમારા નાક અને મોંમાં પ્રવેશતા અટકાવે છે.</ListItem>
                    <ListItem><ListPoint>વારંવાર હાથ ધોવા:</ListPoint> બહારથી અથવા વ theશરૂમથી આવ્યા પછી, અને ખાતા-પીતા પહેલા, તમારે હાથ ધોવા જોઈએ. સારા આરોગ્યની ખાતરી કરવા માટે યોગ્ય સ્વચ્છતા એકદમ જટિલ છે. આ ઉપરાંત, ફ્લાય પર તમારા હાથ સાફ કરવા માટે, તમારી સાથે એક નાનો હેન્ડ સેનિટાઇઝર પણ રાખો.</ListItem>
                    <ListItem><ListPoint>દાન કરો:</ListPoint> તમારા પડોશીઓ અને તમારા સમુદાયના વૃદ્ધ સભ્યોને ટેકો આપો, તમારા પાડોશીઓ, કુટુંબના સભ્યો અને દાસી (જો કોઈ હોય તો) જેની પાસે નથી, તેમને વધારાના માસ્ક દાન કરો. આ ઉપરાંત, તમારે સંભવત any કોઈપણ ઘરની દાસી કે જેઓ તમારા ઘર / officeફિસમાં કામ કરે છે તેમને રજા લેવાનું કહેવાનું ધ્યાનમાં લેવું જોઈએ.</ListItem>
                    <ListItem><ListPoint>વીજળીનું સંચાલન કરો:</ListPoint> તે શક્ય છે કે તમે જ્યાં રહો ત્યાં લાંબા સમય સુધી વીજળી કાપવામાં આવશે. આ માટે, ખાતરી કરો કે તમારી પાસે એક ઇન્વર્ટર સિસ્ટમ છે, અથવા ઓછામાં ઓછી પાવર બેંકો અને રિચાર્જ યોગ્ય બેટરી છે. કેટલાક નાના સોલર પેનલ્સ અને ચાર્જ નિયંત્રકો ખરીદવાનું પણ વિચારી શકે છે.</ListItem>
                    <ListItem><ListPoint>શુધ્ધ પીવાનું પાણી:</ListPoint> ખાતરી કરો કે તમારી પાસે પાણીની મૂળભૂત ગાળણક્રિયા સિસ્ટમ છે જે વીજળી વિના કાર્ય કરી શકે છે. પીવા પહેલાં પાણીને ઉકાળવાથી આશ્ચર્ય થાય છે, અન્ય પદ્ધતિઓમાં પોટેશિયમ પરમેંગેનેટની એક નાની ચપટીનો ઉપયોગ કરવો, આયોડિન ગોળીઓ ઉમેરવી, કલોરિનના ટીપાંનો ઉપયોગ કરવો, અથવા પાણીને શુદ્ધ કરવા માટે યુવી ફ્લેશલાઇટનો ઉપયોગ કરવો તે શામેલ છે.<Reference target="_blank" href="https://www.bryceviewlodge.com/make-water-safe-drinking-simple-water-purification-techniques/"><Superscript>8</Superscript></Reference></ListItem>
                </ul>
                <br/>
                અહીં કેટલીક વધારાની ટીપ્સ આપી છે:
                <ul>
                    <ListItem><ListPoint>કપડા પર આઇસોપ્રોપીલ આલ્કોહોલ (આલ્કોહોલ સળીયાથી) સ્પ્રે કરો:</ListPoint> બહાર ટૂંકી મુસાફરીથી ઘરે પાછા આવ્યા પછી, તમારા કપડાંને સળીયાથી દારૂ / આઇસોપ્રોપીલ આલ્કોહોલથી છાંટી દો (તેને વધારે પ્રમાણમાં શ્વાસ ન લો!).<Reference target="_blank" href="https://journal.com.ph/lifestyle/health-and-wellness/ethyl-or-isopropyl-alcohol"><Superscript>9</Superscript></Reference> વધારામાં, તમારા મોબાઇલ સ્ક્રીનને પણ સળીયાથી દારૂ / આઇસોપ્રોપીલ આલ્કોહોલથી સાફ કરવાની ખાતરી કરો, કારણ કે <ListImportant>સંશોધન સૂચવે છે કે કોરોનાવાયરસ તમારા ફોનની સ્ક્રીન પર 96 કલાક સુધી જીવી શકે છે.</ListImportant><Reference target="_blank" href="https://qz.com/1810508/covid-19-can-likely-live-up-to-96-hours-on-your-phone/"><Superscript>10</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>લસણ ખાય છે:</ListPoint> લસણમાં એવા સંયોજનો છે જે રોગપ્રતિકારક શક્તિને જીવાણુઓ સામે લડવામાં મદદ કરે છે, તે સાથે એલિઆન તરીકે ઓળખાય છે. <ListImportant> નોંધ: લસણ ખાવાથી કોઈ પણ સંજોગોમાં તમે કોરોનાવાયરસ પ્રત્યે રોગપ્રતિકારક શક્તિ પ્રાપ્ત કરશો નહીં. </ListImportant> લસણ સામાન્ય શરદી અને ફ્લૂને તમારા શરીર પર હુમલો કરવાથી રોકે છે, જેનો અર્થ છે કે જો તમે સુકા ઉધરસ, તાવ અને ગળા જેવા લક્ષણો બતાવો છો. ગળા, ત્યાં તમને વધારે ચેપ લાગવાની સંભાવના રહેશે. તે પછી પણ, તમારી મજબૂત રોગપ્રતિકારક શક્તિ કોરોનાવાયરસ સામે લડવામાં વધુ સારી રહેશે.<Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11238807"><Superscript>11</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/25961060"><Superscript>12</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5537651/"><Superscript>13</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/22280901"><Superscript>14</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11697022"><Superscript>15</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>ઉચ્ચ મનોબળ જાળવવું:</ListPoint> જો તમે જરૂરી સાવચેતી રાખશો, તો તમે બરાબર થઈ જશો. તે વિશ્વના અંત જેવું લાગે છે, પરંતુ તે નથી. તમારા શોખ પર કામ કરવા માટે, નવી કુશળતા વિકસાવવા, તમને રસ હોય તેવા પુસ્તકો વાંચવા, ઘરે મૂવીઝ જોવા જેનો તમે ચૂકી ગયા હો તે વાંચવા અને તમારા પરિવાર સાથે થોડો સમય ગાળવા માટે આ સમય કા .ો.</ListItem>
                </ul>
            </Body>
        )
    },
    PUNJABI: {
        title: () => (
            <Title>ਉਹ ਕੰਮ ਜੋ ਤੁਹਾਨੂੰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ.</Title>
        ),
        body: () => (
            <Body>
                ਇੱਥੇ ਕੁਝ ਚੀਜ਼ਾਂ ਹਨ <ListImportant>ਲਾਜ਼ਮੀ ਹੈ</ListImportant> ਕੋਰੋਨਵਾਇਰਸ ਮਹਾਂਮਾਰੀ ਦੌਰਾਨ ਕਰੋ:
                <br/>
                <ul>
                    <ListItem><ListPoint>ਜਦੋਂ ਬਾਹਰ ਹੋਵੇ ਤਾਂ ਹਮੇਸ਼ਾਂ ਮਾਸਕ ਪਹਿਨੋ:</ListPoint> ਮਾਸਕ ਤੁਹਾਨੂੰ ਨਾ ਸਿਰਫ ਤੁਹਾਡੇ ਚਿਹਰੇ ਨੂੰ ਛੂਹਣ ਤੋਂ ਰੋਕਦੇ ਹਨ, ਬਲਕਿ ਉਹ ਕੀਟਾਣੂ ਦੇ ਕਣਾਂ ਨੂੰ ਤੁਹਾਡੇ ਨੱਕ ਅਤੇ ਮੂੰਹ ਵਿਚ ਦਾਖਲ ਹੋਣ ਤੋਂ ਵੀ ਰੋਕਦੇ ਹਨ.</ListItem>
                    <ListItem><ListPoint>ਅਕਸਰ ਹੱਥ ਧੋਵੋ:</ListPoint> ਤੁਹਾਨੂੰ ਬਾਹਰੋਂ ਜਾਂ ਵਾਸ਼ਰੂਮ ਤੋਂ ਆਉਣ ਤੋਂ ਬਾਅਦ, ਅਤੇ ਖਾਣਾ ਖਾਣ ਜਾਂ ਪਕਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਹੱਥ ਧੋਣੇ ਚਾਹੀਦੇ ਹਨ. ਚੰਗੀ ਸਿਹਤ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਸਹੀ ਸਫਾਈ ਬਿਲਕੁਲ ਨਾਜ਼ੁਕ ਹੈ. ਇਸ ਤੋਂ ਇਲਾਵਾ, ਉੱਡਣ 'ਤੇ ਆਪਣੇ ਹੱਥਾਂ ਨੂੰ ਸਾਫ਼ ਕਰਨ ਲਈ ਆਪਣੇ ਨਾਲ ਇਕ ਛੋਟਾ ਜਿਹਾ ਹੱਥ ਸੈਨੀਟਾਈਜ਼ਰ ਲੈ ਜਾਓ.</ListItem>
                    <ListItem><ListPoint>ਦਾਨ ਕਰੋ:</ListPoint> ਉਨ੍ਹਾਂ ਲੋਕਾਂ ਦਾ ਸਮਰਥਨ ਕਰੋ ਜੋ ਤੁਹਾਡੇ ਨਾਲ ਰਹਿੰਦੇ ਹਨ ਅਤੇ ਆਪਣੇ ਖੇਤਰ ਦੇ ਪੁਰਾਣੇ ਮੈਂਬਰਾਂ ਨੂੰ, ਆਪਣੇ ਲੋਕਾਂ ਨੂੰ ਵਾਧੂ ਮਾਸਕ ਦਾਨ ਕਰੋ ਜੋ ਤੁਹਾਡੇ ਨਾਲ ਰਹਿੰਦੇ ਹਨ, ਪਰਿਵਾਰ ਦੇ ਮੈਂਬਰਾਂ ਅਤੇ ਨੌਕਰੀਆਂ (ਜੇ ਕੋਈ ਹੈ) ਜਿਸ ਕੋਲ ਕੋਈ ਨਹੀਂ ਹੈ. ਇਸ ਤੋਂ ਇਲਾਵਾ, ਤੁਹਾਨੂੰ ਕਿਸੇ ਵੀ ਘਰੇਲੂ ਨੌਕਰਾਣੀ ਨੂੰ ਜੋ ਤੁਹਾਡੇ ਘਰ / ਦਫਤਰ ਵਿਚ ਕੰਮ ਕਰਦੇ ਹਨ ਨੂੰ ਛੁੱਟੀ ਲੈਣ ਲਈ ਕਹਿਣ ਬਾਰੇ ਵਿਚਾਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ.</ListItem>
                    <ListItem><ListPoint>ਬਿਜਲੀ ਦਾ ਪ੍ਰਬੰਧ ਕਰੋ:</ListPoint> ਇਹ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸੰਭਾਵਨਾ ਹੈ ਕਿ ਤੁਸੀਂ ਜਿੱਥੇ ਵੀ ਰਹੋਗੇ ਲੰਮੇ ਸਮੇਂ ਤੋਂ ਪਾਵਰ-ਕੱਟ ਹੋ ਜਾਣਗੇ. ਇਸਦੇ ਲਈ, ਇਹ ਸੁਨਿਸ਼ਚਿਤ ਕਰੋ ਕਿ ਤੁਹਾਡੇ ਕੋਲ ਇੱਕ ਇਨਵਰਟਰ ਸਿਸਟਮ ਹੈ, ਜਾਂ ਘੱਟੋ ਘੱਟ ਪਾਵਰ ਬੈਂਕ ਅਤੇ ਰੀਚਾਰਜਬਲ ਬੈਟਰੀਆਂ ਹਨ. ਕੁਝ ਛੋਟੇ ਸੋਲਰ ਪੈਨਲਾਂ ਅਤੇ ਚਾਰਜ ਕੰਟਰੋਲਰ ਖਰੀਦਣ ਬਾਰੇ ਵੀ ਸੋਚ ਸਕਦੇ ਹਨ.</ListItem>
                    <ListItem><ListPoint>ਪੀਣ ਵਾਲਾ ਸਾਫ ਪਾਣੀ:</ListPoint> ਇਹ ਸੁਨਿਸ਼ਚਿਤ ਕਰੋ ਕਿ ਤੁਹਾਡੇ ਕੋਲ ਪਾਣੀ ਦਾ ਮੁ basicਲਾ ਫਿਲਟਰਨ ਸਿਸਟਮ ਹੈ ਜੋ ਬਿਨਾਂ ਬਿਜਲੀ ਦੇ ਕੰਮ ਕਰ ਸਕਦਾ ਹੈ. ਪਾਣੀ ਪੀਣ ਤੋਂ ਪਹਿਲਾਂ ਪਾਣੀ ਨੂੰ ਉਬਾਲ ਕੇ ਅਚੰਭੇ ਕੀਤੇ ਜਾਣਗੇ, ਹੋਰ ਤਰੀਕਿਆਂ ਵਿਚ ਇਕ ਛੋਟੇ ਚੁਟਕੀ ਪੋਟਾਸ਼ੀਅਮ ਪਰਮੰਗੇਟੇਟ ਦੀ ਵਰਤੋਂ ਕਰਨਾ, ਆਇਓਡੀਨ ਦੀਆਂ ਗੋਲੀਆਂ ਸ਼ਾਮਲ ਕਰਨਾ, ਕਲੋਰੀਨ ਦੀਆਂ ਬੂੰਦਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨਾ, ਜਾਂ ਪਾਣੀ ਨੂੰ ਸ਼ੁੱਧ ਕਰਨ ਲਈ ਯੂਵੀ ਫਲੈਸ਼ਲਾਈਟ ਦੀ ਵਰਤੋਂ ਕਰਨਾ ਸ਼ਾਮਲ ਹੈ.<Reference target="_blank" href="https://www.bryceviewlodge.com/make-water-safe-drinking-simple-water-purification-techniques/"><Superscript>8</Superscript></Reference></ListItem>
                </ul>
                <br/>
                ਇਹ ਕੁਝ ਵਾਧੂ ਸੁਝਾਅ ਹਨ:
                <ul>
                    <ListItem><ListPoint>ਕਪੜੇ 'ਤੇ ਆਈਸੋਪ੍ਰੋਪਾਈਲ ਅਲਕੋਹਲ (ਅਲੱਗ ਅਲਕੋਹਲ) ਦਾ ਛਿੜਕਾਅ ਕਰੋ:</ListPoint> ਬਾਹਰ ਛੋਟੀ ਯਾਤਰਾ ਤੋਂ ਵਾਪਸ ਘਰ ਆਉਣ ਤੋਂ ਬਾਅਦ, ਆਪਣੇ ਕੱਪੜਿਆਂ ਨੂੰ ਅਲੱਗ ਅਲਕੋਹਲ / ਆਈਸੋਪ੍ਰੋਪਾਈਲ ਅਲਕੋਹਲ ਨਾਲ ਛਿੜਕਾਓ (ਇਸ ਨੂੰ ਬਹੁਤ ਜ਼ਿਆਦਾ ਸਾਹ ਨਾ ਲਓ!).<Reference target="_blank" href="https://journal.com.ph/lifestyle/health-and-wellness/ethyl-or-isopropyl-alcohol"><Superscript>9</Superscript></Reference> ਇਸ ਤੋਂ ਇਲਾਵਾ, ਆਪਣੇ ਮੋਬਾਈਲ ਸਕਰੀਨਾਂ ਨੂੰ ਸ਼ਰਾਬ / ਇਸੋਪ੍ਰੋਪਾਈਲ ਅਲਕੋਹਲ ਨੂੰ ਵੀ ਰਗੜਣ ਨਾਲ ਸਾਫ ਕਰਨਾ ਯਕੀਨੀ ਬਣਾਓ, ਕਿਉਂਕਿ <ListImportant>ਖੋਜ ਸੁਝਾਅ ਦਿੰਦੀ ਹੈ ਕਿ ਕੋਰੋਨਾਵਾਇਰਸ ਤੁਹਾਡੇ ਫੋਨ ਦੀ ਸਕ੍ਰੀਨ ਤੇ 96 ਘੰਟਿਆਂ ਲਈ ਜੀ ਸਕਦਾ ਹੈ.</ListImportant><Reference target="_blank" href="https://qz.com/1810508/covid-19-can-likely-live-up-to-96-hours-on-your-phone/"><Superscript>10</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>ਲਸਣ ਖਾਓ:</ListPoint> ਲਸਣ ਵਿਚ ਮਿਸ਼ਰਣ ਹੁੰਦੇ ਹਨ ਜੋ ਪ੍ਰਤੀਰੋਧੀ ਪ੍ਰਣਾਲੀ ਦੇ ਕੀਟਾਣੂਆਂ ਨਾਲ ਲੜਨ ਵਿਚ ਸਹਾਇਤਾ ਕਰਦੇ ਹਨ, ਨਾਲ ਹੀ ਇਕ ਮਿਸ਼ਰਿਤ ਅਲੀਸਿਨ. <ListImportant>ਨੋਟ: ਲਸਣ ਨੂੰ ਖਾਣਾ ਤੁਹਾਨੂੰ ਕਿਸੇ ਵੀ ਹਾਲਾਤ ਵਿੱਚ ਕੋਰਨਾਵਾਇਰਸ ਪ੍ਰਤੀ ਇਮਿ .ਨ ਨਹੀਂ ਬਣਾਏਗਾ.</ListImportant> ਲਸਣ ਆਮ ਜ਼ੁਕਾਮ ਅਤੇ ਫਲੂ ਨੂੰ ਤੁਹਾਡੇ ਸਰੀਰ 'ਤੇ ਹਮਲਾ ਕਰਨ ਤੋਂ ਰੋਕਦਾ ਹੈ, ਜਿਸਦਾ ਅਰਥ ਹੈ ਕਿ ਜੇ ਤੁਸੀਂ ਖੁਸ਼ਕੀ ਖੰਘ, ਬੁਖਾਰ, ਅਤੇ ਗਲ਼ੇ ਦੇ ਦਰਦ ਵਰਗੇ ਲੱਛਣ ਦਿਖਾਉਂਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਡੇ ਸੰਕਰਮਿਤ ਹੋਣ ਦੀ ਵਧੇਰੇ ਸੰਭਾਵਨਾ ਹੋਵੇਗੀ. ਫਿਰ ਵੀ, ਤੁਹਾਡੀ ਮਜ਼ਬੂਤ ​​ਪ੍ਰਤੀਰੋਧੀ ਪ੍ਰਣਾਲੀ ਕੋਰਨਾਵਾਇਰਸ ਨਾਲ ਲੜਨ ਵਿਚ ਬਿਹਤਰ ਹੋਵੇਗੀ.<Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11238807"><Superscript>11</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/25961060"><Superscript>12</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5537651/"><Superscript>13</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/22280901"><Superscript>14</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11697022"><Superscript>15</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>ਮਨੋਬਲ ਉੱਚਾ ਰੱਖੋ:</ListPoint> ਜੇ ਤੁਸੀਂ ਜ਼ਰੂਰੀ ਸਾਵਧਾਨੀਆਂ ਵਰਤਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਠੀਕ ਹੋਵੋਗੇ. ਇਹ ਸ਼ਾਇਦ ਦੁਨੀਆਂ ਦੇ ਅੰਤ ਵਰਗਾ ਮਹਿਸੂਸ ਕਰੇ, ਪਰ ਅਜਿਹਾ ਨਹੀਂ ਹੈ. ਇਸ ਸਮੇਂ ਨੂੰ ਆਪਣੇ ਸ਼ੌਕ 'ਤੇ ਕੰਮ ਕਰਨ ਲਈ, ਨਵੇਂ ਹੁਨਰਾਂ ਨੂੰ ਵਿਕਸਤ ਕਰਨ, ਕਿਤਾਬਾਂ ਪੜ੍ਹਨ ਜੋ ਤੁਹਾਨੂੰ ਦਿਲਚਸਪੀ ਲੈਂਦੇ ਹਨ, ਘਰ ਵਿਚ ਫਿਲਮਾਂ ਦੇਖਣ ਜਿਸ ਨਾਲ ਤੁਸੀਂ ਸ਼ਾਇਦ ਗੁਆਚ ਗਏ ਹੋਵੋ, ਅਤੇ ਆਪਣੇ ਪਰਿਵਾਰ ਨਾਲ ਕੁਝ ਕੁ ਵਧੀਆ ਸਮਾਂ ਬਿਤਾਓ.</ListItem>
                </ul>
            </Body>
        )
    },
    MARATHI: {
        title: () => (
            <Title>आपण करणे आवश्यक असलेल्या गोष्टी.</Title>
        ),
        body: () => (
            <Body>
                आपण काही गोष्टी येथे देत आहात <ListImportant>हे केलेच पाहिजे</ListImportant> कोरोनाव्हायरस (साथीचा रोग) सर्व देशभर (किंवा खंडभर) असलेला दरम्यान करा:
                <br/>
                <ul>
                    <ListItem><ListPoint>बाहेर असताना नेहमीच मुखवटा घाला:</ListPoint> मुखवटे आपल्याला केवळ आपल्या तोंडास स्पर्श करण्यापासून रोखत नाहीत तर ते जंतुनाशक कणांना आपल्या नाकात आणि तोंडात जाण्यापासून रोखतात.</ListItem>
                    <ListItem><ListPoint>वारंवार हात धुवा:</ListPoint> बाहेरून किंवा वॉशरूममधून आल्यानंतर आणि खाण्यापूर्वी किंवा जेवण बनवण्यापूर्वी तुम्ही हात धुवावेत. योग्य आरोग्य सुनिश्चित करण्यासाठी योग्य स्वच्छता ठेवणे अत्यंत आवश्यक आहे. याव्यतिरिक्त, उड्डाण करताना आपले हात स्वच्छ करण्यासाठी, आपल्याबरोबर एक लहान हात सॅनिटायझर सोबत ठेवा.</ListItem>
                    <ListItem><ListPoint>दान करा:</ListPoint> आपल्या शेजार्‍यांना आणि आपल्या समुदायाच्या जुन्या सदस्यांना पाठिंबा द्या, आपल्या शेजार्‍यांना, कुटूंबातील सदस्यांना आणि दासी (काही असल्यास) ज्यांना नसेल त्यांच्याकडे जास्तीचे मुखवटे दान करा. याव्यतिरिक्त, आपण कदाचित आपल्या घर / कार्यालयात काम करणार्‍या कोणत्याही घरातील नोकर्‍यांना सुट्टी घेण्यास सांगण्याचा विचार केला पाहिजे.</ListItem>
                    <ListItem><ListPoint>वीज व्यवस्थापित करा:</ListPoint> हे शक्य आहे की आपण जिथे रहाल तिथे दीर्घकाळ वीज कपात होईल. यासाठी, आपल्याकडे एक इन्व्हर्टर सिस्टम किंवा किमान पॉवर बँक आणि रीचार्जेबल बॅटरी असल्याची खात्री करा. काही लहान सोलर पॅनेल आणि चार्ज कंट्रोलर्स खरेदी करण्याचा विचार करू शकतात.</ListItem>
                    <ListItem><ListPoint>स्वच्छ पिण्याचे पाणी:</ListPoint> आपल्याकडे एक मूलभूत जल गाळण्याची प्रक्रिया प्रणाली आहे जी विजेशिवाय काम करू शकते याची खात्री करा. पिण्यापूर्वी पाणी उकळणे आश्चर्यकारक कार्य करेल, इतर पद्धतींमध्ये पोटॅशियम परमॅंगनेटचा एक चिमूटभर वापरणे, आयोडीनच्या गोळ्या जोडणे, क्लोरीन थेंब वापरणे किंवा पाण्याचे शुद्धीकरण करण्यासाठी यूव्ही फ्लॅशलाइट वापरणे समाविष्ट आहे.<Reference target="_blank" href="https://www.bryceviewlodge.com/make-water-safe-drinking-simple-water-purification-techniques/"><Superscript>8</Superscript></Reference></ListItem>
                </ul>
                <br/>
                येथे काही अतिरिक्त टिपा आहेतः
                <ul>
                    <ListItem><ListPoint>कपड्यांवर आयसोप्रोपिल अल्कोहोल (मद्यपान) फवारणी करा.</ListPoint> बाहेरच्या छोट्याश्या सहलीतून घरी परत आल्यावर, आपल्या कपड्यांना रबिंग अल्कोहोल / आयसोप्रोपिल अल्कोहोलने फवारणी करा (जास्त प्रमाणात श्वास घेऊ नका!).<Reference target="_blank" href="https://journal.com.ph/lifestyle/health-and-wellness/ethyl-or-isopropyl-alcohol"><Superscript>9</Superscript></Reference> याव्यतिरिक्त, रबिंग अल्कोहोल / आइसोप्रोपिल अल्कोहोलसह आपले मोबाइल स्क्रीन साफ ​​करण्याचे देखील सुनिश्चित करा, कारण <ListImportant>संशोधन असे सूचित करते की कोरोनाव्हायरस आपल्या फोनच्या स्क्रीनवर scre hours तासांपर्यंत जगू शकते.</ListImportant><Reference target="_blank" href="https://qz.com/1810508/covid-19-can-likely-live-up-to-96-hours-on-your-phone/"><Superscript>10</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>लसूण खा:</ListPoint> लसूणमध्ये अशी संयुगे असतात जी रोगप्रतिकारक यंत्रणेस जंतुनाशेशी लढण्यास मदत करतात, तसेच मिश्रित मिश्रणासह <ListImportant>टीप: लसूण खाणे कोणत्याही परिस्थितीत आपल्यास कोरोनव्हायरसपासून प्रतिकार करू शकत नाही.</ListImportant> लसूण सामान्य सर्दी आणि फ्लू आपल्या शरीरावर आक्रमण करण्यापासून प्रतिबंधित करते, याचा अर्थ असा की जर आपण कोरडे खोकला, ताप, आणि घसा खवखवणे अशी लक्षणे दर्शविली तर आपल्याला संसर्ग झाल्याची शक्यता जास्त असते. तरीही, आपली मजबूत रोगप्रतिकारक क्षमता कोरोनाव्हायरसशी लढताना अधिक चांगली होईल.<Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11238807"><Superscript>11</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/25961060"><Superscript>12</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5537651/"><Superscript>13</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/22280901"><Superscript>14</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11697022"><Superscript>15</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>मनोबल उंच ठेवा:</ListPoint> जर तुम्ही आवश्यक काळजी घेतली तर तुम्ही ठीक आहात. कदाचित जगाचा शेवट होण्यासारखा वाटेल पण तसे झाले नाही. आपल्या छंदांवर कार्य करण्यासाठी, नवीन कौशल्यांचा विकास करण्यासाठी, आपल्या आवडीची पुस्तके वाचण्यासाठी, आपण कदाचित गमावलेला कदाचित घरी चित्रपट पाहण्यास आणि आपल्या कुटुंबासमवेत काही दर्जेदार वेळ घालविण्यासाठी हा वेळ घ्या.</ListItem>
                </ul>
            </Body>
        )
    },
    NEPALI: {
        title: () => (
            <Title>तपाईंले गर्नुपर्ने कामहरू।</Title>
        ),
        body: () => (
            <Body>
                यहाँ केहि चीजहरू छन् <ListImportant>पर्छ</ListImportant> कोरोनाभायरस महामारीको बेलामा गर्नुहोस्:
                <br/>
                <ul>
                    <ListItem><ListPoint>सधैं बाहिर मास्क लगाउनुहोस्:</ListPoint> मास्कहरूले तपाईंलाई तपाईंको अनुहार छोइदिन मात्र रोक्छ, उनीहरूले जीवाणु कणहरूलाई तपाईंको नाक र मुखमा प्रवेश गर्नबाट रोक्दछन्।</ListItem>
                    <ListItem><ListPoint>बारम्बार हात धुनुहोस्:</ListPoint> तपाईंले बाहिरी वा वाशरूमबाट आउँदा र खाँदा वा खाना पकाउनु अघि हात धुनु पर्छ। राम्रो स्वास्थ्य सुनिश्चित गर्न उचित स्वच्छता बिल्कुल महत्त्वपूर्ण छ। थप रूपमा, उडानमा आफ्ना हातहरू सफा गर्न, तपाईंसँग एक सानो हात सेनिटाइजर बोक्नुहोस्।</ListItem>
                    <ListItem><ListPoint>दान गर्नुहोस्:</ListPoint> तपाईका छिमेकीहरू र तपाईंको समुदायका पुराना सदस्यहरूलाई समर्थन गर्नुहोस्, तपाईंको छिमेकीहरू, परिवारका सदस्यहरू र नोकर्नीहरूलाई (यदि कुनै छ भने) थप मास्क चन्दा दिनुहोस्। थप रूपमा, तपाईको घर / अफिसमा काम गर्ने कुनै घरकी नोकर्नीहरूलाई बिदा लिन सोच्न सक्नुहुनेछ।</ListItem>
                    <ListItem><ListPoint>बिजुली प्रबन्ध गर्नुहोस्:</ListPoint> यो सम्भव छ कि त्यहाँ जहाँसुकै लामो लामो बिजली कटौती हुनेछ। यसको लागि, यो निश्चित गर्नुहोस् कि तपाईंसँग एक इनभर्टर प्रणाली छ, वा कमसेकम पावर बैंकहरू र रिचार्जेबल ब्याट्रीहरू। केहि साना सौर प्यानलहरू र चार्ज कन्ट्रोलर खरीद विचार गर्न सक्छन्।</ListItem>
                    <ListItem><ListPoint>सफा पिउने पानी:</ListPoint> यो निश्चित गर्नुहोस् कि तपाईंसँग एक बुनियादी पानी फिल्टरेशन प्रणाली छ जुन बिजुली बिना काम गर्न सक्दछ। पिउन अघि पानी उमाल्दा आश्चर्यजनक कार्य गर्दछ, अन्य विधिहरूमा पोटेशियम परमंगनेटको सानो चुटकी प्रयोग गरेर, आयोडिन ट्याब्लेटहरू थप्दै, क्लोरीन ड्रप प्रयोग गरेर, वा पानी शुद्ध पार्न युभी टर्च प्रयोग गर्नु समावेश गर्दछ।<Reference target="_blank" href="https://www.bryceviewlodge.com/make-water-safe-drinking-simple-water-purification-techniques/"><Superscript>8</Superscript></Reference></ListItem>
                </ul>
                <br/>
                यहाँ केहि थप सल्लाहहरू छन्:
                <ul>
                    <ListItem><ListPoint>कपडामा isopropyl रक्सी (रक्सी रबिंग) स्प्रे गर्नुहोस्:</ListPoint> बाहिर छोटो यात्रा बाट घर फर्के पछि, लुगा रक्सी / isopropyl रक्सीको साथ आफ्नो लुगा स्प्रे (धेरै सास फेर्न!)।<Reference target="_blank" href="https://journal.com.ph/lifestyle/health-and-wellness/ethyl-or-isopropyl-alcohol"><Superscript>9</Superscript></Reference> थप रूपमा, तपाईंको मोबाइल स्क्रीनहरू रबिंग मदिरा / isopropyl रक्सीको साथ साथै सफा गर्न सुनिश्चित गर्नुहोस्, किनभने <ListImportant>अनुसन्धानले सुझाव दिन्छ कि कोरोनाभायरस तपाईंको फोन स्क्रीनमा 96 hours घण्टा सम्म बाँच्न सक्छ।</ListImportant><Reference target="_blank" href="https://qz.com/1810508/covid-19-can-likely-live-up-to-96-hours-on-your-phone/"><Superscript>10</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>लसुन खानु:</ListPoint> लहसुनले यौगिकहरू समावेश गर्दछ जसले प्रतिरक्षा प्रणालीलाई जीवाणुहरूसँग लड्न मद्दत गर्दछ, साथ साथै एलिइन भनेर चिनिन्छ। <ListImportant> नोट: लसुन खानेले तपाईंलाई कुनै पनि परिस्थितिमा कोरोनाभाइरसप्रति प्रतिरक्षा प्रदान गर्दैन।</ListImportant> लसुनले तपाईंको चिसो र फ्लूलाई तपाईंको शरीरमा आक्रमण गर्नबाट रोक्छ, यसको मतलब यदि तपाईं सुक्खा खोकी, ज्वरो, र घाँटी दुखाइ जस्ता लक्षणहरू देखाउँनुभयो भने, तपाईंलाई संक्रमित हुने सम्भावना बढी हुन्छ। तैपनि, तपाईंको बलियो प्रतिरक्षा प्रणाली कोरोनाभाइरससँग लड्नमा उत्तम हुनेछ।<Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11238807"><Superscript>11</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/25961060"><Superscript>12</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5537651/"><Superscript>13</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/22280901"><Superscript>14</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11697022"><Superscript>15</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>मनोबल उच्च राख्नुहोस्:</ListPoint> यदि तपाईंले आवश्यक सावधानीहरू अपनाउनुभयो भने, तपाईं ठीक हुनुहुनेछ। यो संसारको अन्त जस्तै महसुस हुन सक्छ, तर यो छैन। यस समयलाई आफ्नो शौकहरूमा काम गर्न, नयाँ सीपहरू विकास गर्न, तपाईंलाई मनपर्ने पुस्तकहरू पढ्न, घरबाट फिल्महरू हेर्नुहोस् जुन तपाईंले गुमाउनु भएको हुन सक्छ, र आफ्नो परिवारसँग केही गुणस्तरीय समय बिताउन यस समय लिनुहोस्।</ListItem>
                </ul>
            </Body>
        )
    },
    TAMIL: {
        title: () => (
            <Title>நீங்கள் செய்ய வேண்டியவை.</Title>
        ),
        body: () => (
            <Body>
                இங்கே நீங்கள் சில விஷயங்கள் <ListImportant>வேண்டும்</ListImportant> கொரோனா வைரஸ் தொற்றுநோய்களின் போது செய்யுங்கள்:
                <br/>
                <ul>
                    <ListItem><ListPoint>வெளியில் இருக்கும்போது எப்போதும் முகமூடிகளை அணியுங்கள்:</ListPoint> முகமூடிகள் உங்கள் முகத்தைத் தொடுவதைத் தடுப்பது மட்டுமல்லாமல், கிருமித் துகள்கள் உங்கள் மூக்கு மற்றும் வாய்க்குள் நுழைவதைத் தடுக்கின்றன.</ListItem>
                    <ListItem><ListPoint>அடிக்கடி கைகளை கழுவ வேண்டும்:</ListPoint> வெளியில் இருந்து அல்லது வாஷ்ரூமில் இருந்து வந்தபின்னும், உணவை சாப்பிடுவதற்கு அல்லது சமைப்பதற்கு முன்பும் கைகளை கழுவ வேண்டும். நல்ல ஆரோக்கியத்தை உறுதி செய்வதற்கு சரியான சுகாதாரம் முற்றிலும் முக்கியமானது. கூடுதலாக, பறக்கும்போது உங்கள் கைகளை சுத்தம் செய்ய, ஒரு சிறிய கை சுத்திகரிப்பாளரை உங்களுடன் எடுத்துச் செல்லுங்கள்.</ListItem>
                    <ListItem><ListPoint>நன்கொடை:</ListPoint> உங்கள் அயலவர்களுக்கும் உங்கள் சமூகத்தின் பழைய உறுப்பினர்களுக்கும் ஆதரவளிக்கவும், உங்கள் முகவர்கள், குடும்ப உறுப்பினர்கள் மற்றும் பணிப்பெண்களுக்கு (ஏதேனும் இருந்தால்) கூடுதல் முகமூடிகளை நன்கொடையாக வழங்கவும். கூடுதலாக, உங்கள் வீடு / அலுவலகத்தில் பணிபுரியும் எந்த வீட்டுப் பணிப்பெண்களையும் விடுப்பு எடுக்கச் சொல்வதை நீங்கள் கருத்தில் கொள்ள வேண்டும்.</ListItem>
                    <ListItem><ListPoint>மின்சாரத்தை நிர்வகிக்கவும்:</ListPoint> நீங்கள் தங்கியிருக்கும் இடமெல்லாம் நீடித்த மின்வெட்டு இருக்கும் என்பது முற்றிலும் சாத்தியம். இதற்காக, உங்களிடம் இன்வெர்ட்டர் சிஸ்டம் அல்லது குறைந்தபட்சம் பவர் பேங்க்ஸ் மற்றும் ரிச்சார்ஜபிள் பேட்டரிகள் உள்ளனவா என்பதை உறுதிப்படுத்திக் கொள்ளுங்கள். சிறிய சோலார் பேனல்கள் மற்றும் சார்ஜ் கன்ட்ரோலர்களை வாங்குவதையும் சிலர் கருத்தில் கொள்ளலாம்.</ListItem>
                    <ListItem><ListPoint>சுத்தமான குடிநீர்:</ListPoint> மின்சாரம் இல்லாமல் வேலை செய்யக்கூடிய அடிப்படை நீர் வடிகட்டுதல் அமைப்பு உங்களிடம் உள்ளது என்பதை உறுதிப்படுத்திக் கொள்ளுங்கள். குடிப்பதற்கு முன்பு தண்ணீரை வேகவைப்பது அதிசயங்களைச் செய்யும், மற்ற முறைகளில் ஒரு சிறிய சிட்டிகை பொட்டாசியம் பெர்மாங்கனேட்டைப் பயன்படுத்துதல், அயோடின் மாத்திரைகள் சேர்ப்பது, குளோரின் சொட்டுகளைப் பயன்படுத்துவது அல்லது தண்ணீரை சுத்திகரிக்க புற ஊதா ஒளிரும் விளக்கைப் பயன்படுத்துதல் ஆகியவை அடங்கும்.<Reference target="_blank" href="https://www.bryceviewlodge.com/make-water-safe-drinking-simple-water-purification-techniques/"><Superscript>8</Superscript></Reference></ListItem>
                </ul>
                <br/>
                சில கூடுதல் உதவிக்குறிப்புகள் இங்கே:
                <ul>
                    <ListItem><ListPoint>ஐசோபிரைல் ஆல்கஹால் (ஆல்கஹால் தேய்த்தல்) துணிகளில் தெளிக்கவும்:</ListPoint> வெளியில் ஒரு குறுகிய பயணத்திலிருந்து வீட்டிற்கு திரும்பி வந்த பிறகு, ஆல்கஹால் / ஐசோபிரைல் ஆல்கஹால் தேய்த்து உங்கள் துணிகளை தெளிக்கவும் (அதை அதிகமாக சுவாசிக்க வேண்டாம்!).<Reference target="_blank" href="https://journal.com.ph/lifestyle/health-and-wellness/ethyl-or-isopropyl-alcohol"><Superscript>9</Superscript></Reference> கூடுதலாக, உங்கள் மொபைல் திரைகளை ஆல்கஹால் / ஐசோபிரைல் ஆல்கஹால் தேய்த்தல் மூலம் சுத்தம் செய்யுங்கள் <ListImportant>கொரோனா வைரஸ் உங்கள் தொலைபேசி திரைகளில் 96 மணி நேரம் வரை வாழ முடியும் என்று ஆராய்ச்சி கூறுகிறது.</ListImportant><Reference target="_blank" href="https://qz.com/1810508/covid-19-can-likely-live-up-to-96-hours-on-your-phone/"><Superscript>10</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>பூண்டு சாப்பிடுங்கள்:</ListPoint> பூண்டு நோயெதிர்ப்பு மண்டலத்திற்கு கிருமிகளை எதிர்த்துப் போராட உதவும் சேர்மங்களைக் கொண்டுள்ளது, அதோடு அல்லின் எனப்படும் ஒரு கலவை உள்ளது. <ListImportant>குறிப்பு: பூண்டு சாப்பிடுவது எந்த சூழ்நிலையிலும் கொரோனா வைரஸை நோக்கி உங்களைத் தடுக்காது.</ListImportant> பொதுவான சளி மற்றும் காய்ச்சல் உங்கள் உடலைத் தாக்குவதை பூண்டு தடுக்கிறது, அதாவது உலர்ந்த இருமல், காய்ச்சல் மற்றும் தொண்டை புண் போன்ற அறிகுறிகளை நீங்கள் காண்பித்தால், நீங்கள் பாதிக்கப்படுவதற்கான அதிக நிகழ்தகவு இருக்கும். அப்படியிருந்தும், உங்கள் வலுவான நோயெதிர்ப்பு அமைப்பு கொரோனா வைரஸை எதிர்த்துப் போராடுவதில் சிறப்பாக இருக்கும்.<Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11238807"><Superscript>11</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/25961060"><Superscript>12</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5537651/"><Superscript>13</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/22280901"><Superscript>14</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11697022"><Superscript>15</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>மன உறுதியை அதிகமாக வைத்திருங்கள்:</ListPoint> நீங்கள் தேவையான முன்னெச்சரிக்கை நடவடிக்கைகளை எடுத்தால், நீங்கள் சரியாக இருப்பீர்கள். இது உலகின் முடிவு போல் உணரலாம், ஆனால் அது இல்லை. உங்கள் பொழுதுபோக்குகளில் பணியாற்றவும், புதிய திறன்களை வளர்த்துக் கொள்ளவும், உங்களுக்கு விருப்பமான புத்தகங்களைப் படிக்கவும், நீங்கள் தவறவிட்டிருக்கக்கூடிய வீட்டிலேயே திரைப்படங்களைப் பார்க்கவும், உங்கள் குடும்பத்துடன் சில தரமான நேரத்தை செலவிடவும் இந்த நேரத்தை எடுத்துக் கொள்ளுங்கள்.</ListItem>
                </ul>
            </Body>
        )
    },
    TELUGU: {
        title: () => (
            <Title>మీరు తప్పక చేయాలి.</Title>
        ),
        body: () => (
            <Body>
                ఇక్కడ మీరు కొన్ని విషయాలు ఉన్నాయి <ListImportant>తప్పక</ListImportant> కరోనావైరస్ మహమ్మారి సమయంలో చేయండి:
                <br/>
                <ul>
                    <ListItem><ListPoint>బయట ఉన్నప్పుడు ఎప్పుడూ ముసుగులు ధరించాలి:</ListPoint> ముసుగులు మీ ముఖాన్ని తాకకుండా నిరోధించడమే కాదు, అవి మీ ముక్కు మరియు నోటిలోకి రాకుండా సూక్ష్మక్రిమి కణాలను కూడా ఆపుతాయి.</ListItem>
                    <ListItem><ListPoint>చేతులు తరచుగా కడగాలి:</ListPoint> మీరు బయటి నుండి లేదా వాష్ రూమ్ నుండి వచ్చిన తరువాత, మరియు ఆహారం తినడానికి లేదా వంట చేయడానికి ముందు చేతులు కడుక్కోవాలి. మంచి ఆరోగ్యాన్ని నిర్ధారించడానికి సరైన పరిశుభ్రత ఖచ్చితంగా అవసరం. అదనంగా, ఫ్లైలో మీ చేతులను శుభ్రం చేయడానికి, ఒక చిన్న హ్యాండ్ శానిటైజర్‌ను మీతో తీసుకెళ్లండి.</ListItem>
                    <ListItem><ListPoint>దానం:</ListPoint> మీ పొరుగువారికి మరియు మీ సంఘంలోని పాత సభ్యులకు మద్దతు ఇవ్వండి, మీ పొరుగువారికి, కుటుంబ సభ్యులు మరియు పనిమనిషికి (ఏదైనా ఉంటే) అదనపు ముసుగులు ఇవ్వండి. అదనంగా, మీ ఇల్లు / కార్యాలయంలో పనిచేసే ఇంటి పనిమనిషిని సెలవు తీసుకోవడాన్ని మీరు అడగాలి.</ListItem>
                    <ListItem><ListPoint>విద్యుత్తును నిర్వహించండి:</ListPoint> మీరు ఎక్కడ ఉన్నా సుదీర్ఘ విద్యుత్ కోతలు ఉండడం పూర్తిగా సాధ్యమే. దీని కోసం, మీకు ఇన్వర్టర్ సిస్టమ్ లేదా కనీసం పవర్ బ్యాంకులు మరియు పునర్వినియోగపరచదగిన బ్యాటరీలు ఉన్నాయని నిర్ధారించుకోండి. కొంతమంది చిన్న సౌర ఫలకాలను మరియు ఛార్జ్ కంట్రోలర్‌లను కొనడాన్ని కూడా పరిగణించవచ్చు.</ListItem>
                    <ListItem><ListPoint>విద్యుత్తును నిర్వహించండి:</ListPoint> మీకు విద్యుత్ లేకుండా పనిచేయగల ప్రాథమిక నీటి వడపోత వ్యవస్థ ఉందని నిర్ధారించుకోండి. త్రాగడానికి ముందు నీటిని ఉడకబెట్టడం అద్భుతాలు చేస్తుంది, ఇతర పద్ధతుల్లో పొటాషియం పర్మాంగనేట్ యొక్క చిన్న చిటికెడు వాడటం, అయోడిన్ మాత్రలు జోడించడం, క్లోరిన్ చుక్కలను ఉపయోగించడం లేదా నీటిని శుద్ధి చేయడానికి UV ఫ్లాష్‌లైట్ ఉపయోగించడం వంటివి ఉన్నాయి.<Reference target="_blank" href="https://www.bryceviewlodge.com/make-water-safe-drinking-simple-water-purification-techniques/"><Superscript>8</Superscript></Reference></ListItem>
                </ul>
                <br/>
                ఇక్కడ కొన్ని అదనపు చిట్కాలు ఉన్నాయి:
                <ul>
                    <ListItem><ListPoint>ఐసోప్రొపైల్ ఆల్కహాల్ (మద్యం రుద్దడం) బట్టలపై పిచికారీ చేయండి:</ListPoint> వెలుపల ఒక చిన్న ట్రిప్ నుండి ఇంటికి తిరిగి వచ్చిన తరువాత, మద్యం / ఐసోప్రొపైల్ ఆల్కహాల్ తో మీ బట్టలు పిచికారీ చేయండి (దీన్ని ఎక్కువగా he పిరి తీసుకోకండి!).<Reference target="_blank" href="https://journal.com.ph/lifestyle/health-and-wellness/ethyl-or-isopropyl-alcohol"><Superscript>9</Superscript></Reference> అదనంగా, ఆల్కహాల్ / ఐసోప్రొపైల్ ఆల్కహాల్ తో రుద్దడం ద్వారా మీ మొబైల్ స్క్రీన్లను శుభ్రపరచాలని నిర్ధారించుకోండి <ListImportant>కరోనావైరస్ మీ ఫోన్ స్క్రీన్‌లలో 96 గంటల వరకు జీవించగలదని పరిశోధనలు సూచిస్తున్నాయి.</ListImportant><Reference target="_blank" href="https://qz.com/1810508/covid-19-can-likely-live-up-to-96-hours-on-your-phone/"><Superscript>10</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>వెల్లుల్లి తినండి:</ListPoint> వెల్లుల్లిలో అల్లిన్ అని పిలువబడే సమ్మేళనంతో పాటు రోగనిరోధక వ్యవస్థ జెర్మ్స్ తో పోరాడటానికి సహాయపడే సమ్మేళనాలు ఉన్నాయి. <ListImportant>గమనిక: వెల్లుల్లి తినడం వల్ల మీరు ఎట్టి పరిస్థితుల్లోనూ కరోనావైరస్ వైపు రోగనిరోధక శక్తిని పొందలేరు.</ListImportant> వెల్లుల్లి మీ శరీరంపై దాడి చేయకుండా సాధారణ జలుబు మరియు ఫ్లూ నిరోధిస్తుంది, అంటే మీరు పొడి దగ్గు, జ్వరం మరియు గొంతు నొప్పి వంటి లక్షణాలను చూపిస్తే, మీరు సంక్రమించే అవకాశం ఎక్కువగా ఉంటుంది. అప్పుడు కూడా, మీ బలమైన రోగనిరోధక శక్తి కరోనావైరస్తో పోరాడటంలో మెరుగ్గా ఉంటుంది.<Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11238807"><Superscript>11</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/25961060"><Superscript>12</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5537651/"><Superscript>13</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/22280901"><Superscript>14</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11697022"><Superscript>15</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>ధైర్యాన్ని ఎక్కువగా ఉంచండి:</ListPoint> మీరు అవసరమైన జాగ్రత్తలు తీసుకుంటే, మీరు బాగానే ఉంటారు. ఇది ప్రపంచం అంతం అనిపించవచ్చు, కానీ అది కాదు. మీ అభిరుచులపై పని చేయడానికి, కొత్త నైపుణ్యాలను పెంపొందించడానికి, మీకు ఆసక్తి ఉన్న పుస్తకాలను చదవడానికి, మీరు తప్పిపోయిన ఇంట్లో సినిమాలు చూడటానికి మరియు మీ కుటుంబంతో కొంత నాణ్యమైన సమయాన్ని గడపడానికి ఈ సమయాన్ని కేటాయించండి.</ListItem>
                </ul>
            </Body>
        )
    },
    URDU: {
        title: () => (
            <Title>وہ کام جو آپ کو کرنا چاہئے۔</Title>
        ),
        body: () => (
            <Body>
                یہ کچھ چیزیں آپ ہیں <ListImportant>لازمی</ListImportant> کورونا وائرس وبائی مرض کے دوران کریں:
                <br/>
                <ul>
                    <ListItem><ListPoint>باہر جب ہمیشہ ماسک پہنیں:</ListPoint> ماسک آپ کو نہ صرف آپ کے چہرے کو چھونے سے روکتے ہیں ، بلکہ وہ جراثیم کے ذرات کو آپ کے ناک اور منہ میں جانے سے بھی روکتے ہیں۔</ListItem>
                    <ListItem><ListPoint>اکثر ہاتھ دھوئے:</ListPoint> آپ کو باہر سے یا واش روم سے آنے کے بعد ، اور کھانا کھانے پینے سے پہلے ہاتھ دھوئے۔ اچھی صحت کو یقینی بنانے کے لئے مناسب حفظان صحت بالکل ضروری ہے۔ اضافی طور پر ، مکھی پر اپنے ہاتھوں کو صاف کرنے کے لئے اپنے ساتھ ایک چھوٹا کھجور صاف کرنے والا رکھیں۔</ListItem>
                    <ListItem><ListPoint>عطیہ کریں:</ListPoint> اپنے پڑوسیوں اور اپنی برادری کے پرانے ممبروں کی مدد کریں ، اپنے پڑوسیوں ، کنبہ کے افراد اور نوکرانیوں (اگر کوئی ہے) کو اضافی نقاب عطیہ کریں جن کے پاس کوئی سامان نہیں ہے۔ مزید برآں ، آپ کو کسی گھر کی نوکرانیوں سے جو آپ کے گھر / دفتر میں ملازمت کرتے ہیں چھٹی لینے کے لئے کہیں گے۔</ListItem>
                    <ListItem><ListPoint>بجلی کا انتظام کریں:</ListPoint> یہ مکمل طور پر ممکن ہے کہ جہاں بھی آپ ٹھہریں بجلی کی طویل کٹوتی ہوگی۔ اس کے ل sure ، یہ یقینی بنائیں کہ آپ کے پاس ایک انورٹر سسٹم ہے ، یا کم از کم پاور بینک اور ریچارج ایبل بیٹریاں ہیں۔ کچھ تو چھوٹے سولر پینلز اور چارج کنٹرولرز کی خریداری پر بھی غور کر سکتے ہیں۔</ListItem>
                    <ListItem><ListPoint>پینے کا صاف پانی:</ListPoint> اس بات کو یقینی بنائیں کہ آپ کے پاس واٹر فلٹریشن کا ایک بنیادی نظام موجود ہے جو بجلی کے بغیر کام کرسکتا ہے۔ پینے سے پہلے پانی کو ابالنے سے عجیب و غریب کام آجائے گا ، دوسرے طریقوں میں ایک چھوٹی چوٹکی پوٹاشیم پرمانگٹیٹ کا استعمال ، آئوڈین گولیاں شامل کرنا ، کلورین کے قطرے استعمال کرنا ، یا پانی کو پاک کرنے کے لئے یووی ٹارچ کا استعمال کرنا شامل ہیں۔<Reference target="_blank" href="https://www.bryceviewlodge.com/make-water-safe-drinking-simple-water-purification-techniques/"><Superscript>8</Superscript></Reference></ListItem>
                </ul>
                <br/>
                کچھ اضافی نکات یہ ہیں:
                <ul>
                    <ListItem><ListPoint>کپڑوں پر آئوسوپائل شراب (الکحل کی مالش) چھڑکیں:</ListPoint> باہر مختصر سفر سے گھر واپس آنے کے بعد ، اپنے کپڑوں کو چھڑکنے والی الکحل / آئسوپروپائل شراب سے چھڑکیں (اس میں زیادہ سانس نہ لیں!)۔<Reference target="_blank" href="https://journal.com.ph/lifestyle/health-and-wellness/ethyl-or-isopropyl-alcohol"><Superscript>9</Superscript></Reference> مزید برآں ، الکحل / آئوسوپائل شراب کو بھی رگڑنے سے اپنے موبائل اسکرینوں کو صاف کرنا یقینی بنائیں ، کیونکہ <ListImportant>تحقیق سے پتہ چلتا ہے کہ کورونا وائرس آپ کے فون کی اسکرینوں پر 96 گھنٹوں تک زندہ رہ سکتا ہے۔</ListImportant><Reference target="_blank" href="https://qz.com/1810508/covid-19-can-likely-live-up-to-96-hours-on-your-phone/"><Superscript>10</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>لہسن کھائیں:</ListPoint> لہسن میں ایسے مرکبات ہوتے ہیں جو مدافعتی نظام کو جراثیم سے لڑنے میں مدد دیتے ہیں ، اس کے ساتھ ساتھ ایک مرکب جس میں ایلین بھی کہا جاتا ہے۔ <ListImportant>نوٹ: لہسن کھانے سے آپ کو کسی بھی حالت میں کورونا وائرس کے خلاف استثنیٰ نہیں ملے گا۔</ListImportant> لہسن عام سردی اور فلو کو آپ کے جسم پر حملہ کرنے سے روکتا ہے ، اس کا مطلب یہ ہے کہ اگر آپ خشک کھانسی ، بخار ، اور گلے کی سوزش کی علامات ظاہر کرتے ہیں تو ، اس کا امکان زیادہ ہوجائے گا کہ آپ کو انفکشن ہو۔ تب بھی ، آپ کا مضبوط مدافعتی نظام کورونا وائرس سے لڑنے میں بہتر ہوگا۔<Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11238807"><Superscript>11</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/25961060"><Superscript>12</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5537651/"><Superscript>13</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/22280901"><Superscript>14</Superscript></Reference> <Reference target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/11697022"><Superscript>15</Superscript></Reference></ListItem>
                    <ListItem><ListPoint>حوصلے بلند رکھیں:</ListPoint> اگر آپ ضروری احتیاطی تدابیر اختیار کرتے ہیں تو آپ ٹھیک ہوجائیں گے۔ یہ دنیا کے خاتمے کی طرح محسوس ہوگا ، لیکن ایسا نہیں ہے۔ اس وقت کو اپنے شوق پر کام کرنے ، نئی مہارتوں کو فروغ دینے ، اپنی دلچسپی کی کتابیں پڑھنے ، گھر میں ایسی فلمیں دیکھنے کے لئے استعمال کریں جن سے آپ کو کوئی کمی محسوس نہیں ہوسکتی ہے ، اور اپنے اہل خانہ کے ساتھ کچھ معیاری وقت گزار سکتے ہیں۔</ListItem>
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

function MustDo(props) {
    return (
        <Wrapper id="mustdo" global={ props.global }>
            <Content global={ props.global }/>
        </Wrapper>
    )
}


// PropTypes:
MustDo.propTypes = {
    global: PropTypes.object.isRequired,
    reduxProps: PropTypes.object.isRequired
};


// Exports:
export default connect(mapStateToProps, null)(MustDo);