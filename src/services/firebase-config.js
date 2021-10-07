import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAY1SjqMhq9SNCMUW1rBjvGNE_auMFV2j4',
	authDomain: 'counter-time-user.firebaseapp.com',
	projectId: 'counter-time-user',
	storageBucket: 'counter-time-user.appspot.com',
	messagingSenderId: '883707050169',
	appId: '1:883707050169:web:c814d44936698c2815c368'
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export  { firebase };