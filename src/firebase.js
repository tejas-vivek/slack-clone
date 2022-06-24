import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB739q_4NsGnHf4VKQqqeYfbvpS-GGqYLU",
    authDomain: "slack-clone-d22c7.firebaseapp.com",
    projectId: "slack-clone-d22c7",
    storageBucket: "slack-clone-d22c7.appspot.com",
    messagingSenderId: "287994112853",
    appId: "1:287994112853:web:aab9ae5629621f2cf21ddc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export{auth, provider}
  export default db;
