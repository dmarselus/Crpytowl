// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigator/AppNavigator';

function App() {
	return (
		<SafeAreaProvider>
			<AppNavigator />
		</SafeAreaProvider>
	);
}

export default App;
