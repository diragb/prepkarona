// // Imports:
// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';


// Initializations:
// admin.initializeApp();


// // Exports:
// export const hitCounter = functions.https.onRequest((req, res) => {
//     const counterRef = admin.database().ref("/hit_counter");
//     return counterRef
//         .transaction(current => {
//             return (current || 0) + 1;
//         })
// });