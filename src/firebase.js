import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDlTqrEB-rD_6K_F8D3SqPIaLGPPbnGYec",
    authDomain: "badwinefinder.firebaseapp.com",
    databaseURL: "https://badwinefinder.firebaseio.com",
    projectId: "badwinefinder",
    storageBucket: "badwinefinder.appspot.com",
    messagingSenderId: "633641818187"
};
firebase.initializeApp(config);


export default firebase;