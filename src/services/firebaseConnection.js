import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyAh2HoI7pkzlM9KruLw2d-UTihqu9FMi6A",
  authDomain: "tarefas-390ec.firebaseapp.com",
  projectId: "tarefas-390ec",
  storageBucket: "tarefas-390ec.appspot.com",
  messagingSenderId: "334170069086",
  appId: "1:334170069086:web:6587ccc5da95883f32bccf"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
};

export default firebase;