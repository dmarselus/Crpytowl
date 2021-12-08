import React from 'react';
import { Dimensions } from 'react-native';
//https://callstack.github.io/react-native-paper/text-input.html
import { TextInput as PaperTextInput } from 'react-native-paper';

import colors from '../colors';
const { height, width } = Dimensions.get('screen');
export default function Input({ value, onChangeText, ...rest }) {
	return (
		<PaperTextInput
			value={value}
			onChangeText={onChangeText}
			activeUnderlineColor={colors.primary}
			activeOutlineColor={colors.primary}
			style={{ width: width * 0.75 }}
			{...rest}
		/>
	);
}
