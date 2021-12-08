import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// https://github.com/torgeadelin/react-native-animated-nav-tab-bar
// import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { createStackNavigator } from '@react-navigation/stack';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTabNavigator from './BottomTabNavigator';
import { AuthLoadingScreen, LoginScreen } from '../screens';
// import colors from '../colors';

const Stack = createStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{
					headerShown: false,
					presentation: 'card'
				}}
			>
				<Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="BottomTab" component={BottomTabNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
