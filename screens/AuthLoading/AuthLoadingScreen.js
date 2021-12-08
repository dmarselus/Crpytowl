import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Logo, Spinner } from '../../shared';
import colors from '../../colors';

export default function AuthLoadingScreen({ navigation }) {
	useEffect(() => {
		setTimeout(() => navigation.replace('Login'), 2000);
	}, []);

	return (
		<View style={{ flex: 1, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' }}>
			<Logo />
			<View style={{ marginTop: '10%' }}>
				<Spinner size="large" />
			</View>
		</View>
	);
}
