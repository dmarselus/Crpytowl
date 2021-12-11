import 'dotenv/config';
export default {
	expo: {
		name: 'Crptowl',
		slug: 'Crptowl',
		version: '1.0.0',
		orientation: 'portrait',
		icon: './assets/icon.png',
		splash: {
			image: './assets/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#ffffff'
		},
		updates: {
			fallbackToCacheTimeout: 0
		},
		assetBundlePatterns: [ '**/*' ],
		ios: {
			supportsTablet: true
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './assets/adaptive-icon.png',
				backgroundColor: '#FFFFFF'
			}
		},
		web: {
			favicon: './assets/favicon.png'
		},
		extra: {
			apiKey: process.env.FIREBASE_API_KEY,
			authDomain: process.env.FIREBASE_AUTH_DOMAIN,
			databaseURL: process.env.FIREBASE_DATABASE_URL,
			projectId: process.env.FIREBASE_PROJECT_ID,
			storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
			appId: process.env.FIREBASE_APP_ID,
			googleIos: process.env.GOOGLE_IOS_CLIENT_ID,
			googleAndroid: process.env.GOOGLE_ANDROID_CLIENT_ID,
			cmcApiKey: process.env.CMC_API_KEY,
			coinApiKey: process.env.COIN_API_KEY
		}
	}
};
