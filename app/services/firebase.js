import * as firebase from 'firebase';

const firebaseConfig = {};

if(__DEV__){
  // Development
  firebaseConfig = {
    apiKey: "AIzaSyAXoG8mUTIzrKA5vyBek9s5WYiIdcjJwnY",
    authDomain: "agentcommission-7c931.firebaseapp.com",
    databaseURL: "https://agentcommission-7c931.firebaseio.com",
    projectId: "agentcommission-7c931",
    storageBucket: "agentcommission-7c931.appspot.com",
    messagingSenderId: "525796794724"
  };
}
else{
  // Production
  firebaseConfig = {
    apiKey: "AIzaSyCVYwfEj5VNDDFbERxcs404LNX0YRJx28g",
    authDomain: "agentcommission-production.firebaseapp.com",
    databaseURL: "https://agentcommission-production.firebaseio.com",
    projectId: "agentcommission-production",
    storageBucket: "",
    messagingSenderId: "362241957573"
  };
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
