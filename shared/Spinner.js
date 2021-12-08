import React from 'react';
// https://reactnative.dev/docs/activityindicator
import { ActivityIndicator } from 'react-native';
import colors from '../colors';
export default function Spinner({ ...rest }) {
	return <ActivityIndicator size="small" color={colors.primaryAccent} {...rest} />;
}
