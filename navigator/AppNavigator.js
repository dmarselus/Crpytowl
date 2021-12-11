import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import { AuthLoadingScreen, LoginScreen } from '../screens';
import { UserContext } from '../context';

const Stack = createStackNavigator();

export default function AppNavigator() {
	const [ user, setUser ] = useState(null);

	return (
		<NavigationContainer>
			<UserContext.Provider value={{ user, setUser }}>
				<Stack.Navigator
					initialRouteName="BottomTab"
					screenOptions={{
						headerShown: false,
						presentation: 'card'
					}}
				>
					<Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="BottomTab" component={BottomTabNavigator} />
				</Stack.Navigator>
			</UserContext.Provider>
		</NavigationContainer>
	);
}
