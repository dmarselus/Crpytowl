import React from 'react';

//https://callstack.github.io/react-native-paper/text-input.html
import { TextInput } from 'react-native-paper';

import colors from '../colors';
export default function Input({ value, onChangeText, ...rest }) {
	return (
		<TextInput
			value={value}
			onChangeText={onChangeText}
			activeUnderlineColor={colors.primary}
			activeOutlineColor={colors.primary}
			{...rest}
		/>
	);
}
