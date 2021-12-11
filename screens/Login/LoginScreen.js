import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo-constants';
import * as Google from 'expo-google-app-auth';

import { Input, Button } from '../../shared';
import { UserContext } from '../../context';

export default function LoginScreen() {
	const { setUser } = useContext(UserContext);

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loading, setLoading ] = useState(false);

	function handleGoogleSignIn() {
		const config = {
			iosClientId: Constants.manifest.extra.googleIos,
			androidClientId: Constants.manifest.extra.googleAndroid,
			scopes: [ 'profile', 'email' ]
		};

		Google.logInAsync(config)
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log('err', e);
				console.log('An error occurred. Check your network and try again');
			});
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View style={{ flex: 0.5, justifyContent: 'space-around' }}>
				<Input value={email} onChangeText={setEmail} label="Email" />
				<Input value={password} onChangeText={setPassword} label="Password" secureTextEntry />
				<Button text="Login" onPress={() => setUser({ name: 'hello' })} loading={loading} />
				<Button
					icon="google"
					text="Sign in with Google"
					onPress={() => console.log('Register')}
					loading={loading}
					mode="outlined"
				/>
			</View>
		</View>
	);
}
