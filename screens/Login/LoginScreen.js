import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from '../../shared';

export default function LoginScreen() {
	// console.log(firebaseConfig);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loading, setLoading ] = useState(false);
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View style={{ flex: 0.5, justifyContent: 'space-around' }}>
				<Input value={email} onChangeText={setEmail} label="Email" />
				<Input value={password} onChangeText={setPassword} label="Password" secureTextEntry />
				<Button text="Login" onPress={() => console.log('Login')} loading={loading} />
				<Button text="Register" onPress={() => console.log('Register')} loading={loading} mode="outlined" />
			</View>
		</View>
	);
}
