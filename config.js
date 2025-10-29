// const firebaseConfig = {
//     apiKey: "AIzaSyD0TY0-S0edefmJwHsrDeT_kI5M1EXz_84",
//     authDomain: "registration-app-e8294.firebaseapp.com",
//     projectId: "registration-app-e8294",
//     storageBucket: "registration-app-e8294.appspot.com",
//     messagingSenderId: "194316632219",
//     appId: "1:194316632219:web:67d3098838d35d47ee063e"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyCa_1dcnDdylCZ4Lyt-4MB3UhRMgt4qlHw",
  authDomain: "sidejobs-6b826.firebaseapp.com",
  projectId: "sidejobs-6b826",
  storageBucket: "sidejobs-6b826.appspot.com",
  messagingSenderId: "558889253895",
  appId: "1:558889253895:web:c1c479e5a6cdb0b6fd3ea2",
};

//initialize
try {
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
} catch (err) {
  alert(err);
}
const db = firebase.firestore();
