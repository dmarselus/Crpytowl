import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { getTopCoins, getTopCoinsImage } from '../../controllers/CoinApiController';
import SearchBar from './components/SearchBar';
export default function ExchangeScreen({ navigation }) {
	const [ query, setQuery ] = useState('');
	const [ coinsList, setCoinsList ] = useState([]);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			loadResource();
		});
		return unsubscribe;
	}, []);

	async function loadResource() {
		// const coins = await getTopCoinsImage();
		// setCoinsList(coins);
	}
	return (
		<View>
			<Text>Exchange</Text>
			<SearchBar data={coinsList} />
		</View>
	);
}
