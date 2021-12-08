import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../shared';
export default function LoginScreen() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	return (
		<View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Input value={email} onChangeText={setEmail} label="Email" />
			<Input value={password} onChangeText={setPassword} label="Password" secureTextEntry />
		</View>
	);
}
