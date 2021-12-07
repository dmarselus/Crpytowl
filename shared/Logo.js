import React from 'react';
import { Image, Dimensions } from 'react-native';
import LOGO from '../assets/logo.png';
const { width } = Dimensions.get('screen');

const SIZE = {
	large: width * 0.8,
	medium: width * 0.5,
	small: width * 0.2
};

export default function Logo({ size = 'medium', ...rest }) {
	return (
		<Image
			style={{ width: SIZE[size], height: SIZE[size] / 3.2 }}
			resizeMode="contain"
			source={{
				uri: LOGO
			}}
			{...rest}
		/>
	);
}
