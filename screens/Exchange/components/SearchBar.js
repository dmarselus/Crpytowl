import React, { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function SearchBar({ data }) {
	const [ query, setQuery ] = useState('');

	function renderItem({ item: { asset_id, url } }) {
		return (
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					paddingHorizontal: 25,
					alignItems: 'center',
					backgroundColor: 'papayawhip',
					// paddingVertical: 10,
					marginVertical: 2
				}}
				onPress={() => console.log(url)}
			>
				<Image resizeMode="contain" style={{ width: 25, height: 25, marginRight: 10 }} source={{ uri: url }} />
				<Text>{asset_id}</Text>
			</TouchableOpacity>
		);
	}

	return (
		<View style={{}}>
			<TextInput value={query} onChangeText={setQuery} />
			{renderItem({
				item: {
					asset_id: 'LTC',
					url:
						'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/a201762f149941ef9b84e0742cd00e48.png'
				}
			})}
			{renderItem({
				item: {
					asset_id: 'LTC',
					url:
						'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/a201762f149941ef9b84e0742cd00e48.png'
				}
			})}
			<FlatList
				data={data.filter(({ asset_id }) => asset_id.toLowerCase().includes(query.toLowerCase()))}
				renderItem={renderItem}
			/>
		</View>
	);
}
