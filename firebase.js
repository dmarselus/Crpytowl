import * as firebase from 'firebase';
import Constants from 'expo-constants';

const firebaseConfig = {
	apiKey: Constants.manifest.extra.apiKey,
	authDomain: Constants.manifest.extra.authDomain,
	databaseURL: Constants.manifest.extra.databaseURL,
	projectId: Constants.manifest.extra.projectId,
	storageBucket: Constants.manifest.extra.storageBucket,
	messagingSenderId: Constants.manifest.extra.messagingSenderId,
	appId: Constants.manifest.extra.appId
};

let app;
if (firebase.apps.length === 0) app = firebase.initializeApp(firebaseConfig);
else app = firebase.app();

const auth = firebase.auth();

export { auth };
