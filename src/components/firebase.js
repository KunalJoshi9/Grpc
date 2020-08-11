import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAejHdxCDjY3Z7QQNLTMUrCkE4X2JoGlCo",
        authDomain: "chap-app-1b79a.firebaseapp.com",
        databaseURL: "https://chap-app-1b79a.firebaseio.com",
        projectId: "chap-app-1b79a",
        storageBucket: "chap-app-1b79a.appspot.com",
        messagingSenderId: "488785874728",
        appId: "1:488785874728:web:817d7fc7bd2924e36d8a1d",
        measurementId: "G-T5ZPBQVT8K"
    });

    const db = firebaseApp.firestore();

    export default db;