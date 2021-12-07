import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Logo } from '../../shared';
import colors from '../../colors';
export default function AuthLoadingScreen({ navigation }) {
	// console.log(navigation);
	useEffect(() => {
		setTimeout(() => navigation.replace('BottomTab'), 2000);
	}, []);

	return (
		<View style={{ flex: 1, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' }}>
			<Logo />
		</View>
	);
}
