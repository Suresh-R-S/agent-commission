import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAXoG8mUTIzrKA5vyBek9s5WYiIdcjJwnY",
  authDomain: "agentcommission-7c931.firebaseapp.com",
  databaseURL: "https://agentcommission-7c931.firebaseio.com",
  projectId: "agentcommission-7c931",
  storageBucket: "agentcommission-7c931.appspot.com",
  messagingSenderId: "525796794724"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
