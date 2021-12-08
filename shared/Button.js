import React from 'react';
import { Dimensions } from 'react-native';

// https://callstack.github.io/react-native-paper/button.html
import { Button as PaperButton } from 'react-native-paper';
import colors from '../colors';
const { height, width } = Dimensions.get('screen');
export default function Button({ text = '', onPress, loading = false, contentStyle = {}, ...rest }) {
	return (
		<PaperButton
			mode="contained"
			color={colors.primary}
			onPress={!loading && onPress}
			// disabled={loading}
			loading={loading}
			contentStyle={{
				width: width * 0.75,
				justifyContent: 'center',
				height: height / 15,
				flexDirection: 'row-reverse',
				...contentStyle
			}}
			{...rest}
		>
			{text}
		</PaperButton>
	);
}
