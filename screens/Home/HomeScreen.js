import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getTopCoins } from '../../controllers/cmc/CMCControllers';

export default function HomeScreen({ navigation }) {
	const [ topCoins, setTopCoins ] = useState([]);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			loadResource();
		});
		return unsubscribe;
	}, []);

	async function loadResource() {
		const coins = await getTopCoins();
		setTopCoins(coins.data);
	}

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen {topCoins.length} coins fetched</Text>
		</View>
	);
}
