import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { HomeScreen, SettingsScreen } from '../screens';
import colors from '../colors';

const Tab = createMaterialBottomTabNavigator();

const BOTTOM_TAB_SCREENS = [
	{
		name: 'HomeScreen',
		component: HomeScreen,
		icon: 'home',
		label: 'Home'
	},
	{
		name: 'SettingsScreen',
		component: SettingsScreen,
		icon: 'cog',
		label: 'Preference'
	}
	// {
	// 	name: 's',
	// 	component: SettingsScreen,
	// 	icon: 'cog'
	// }
];

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				activeColor={colors.primary}
				barStyle={{ backgroundColor: '#FFFFFF' }}
				shifting={true}
				// labeled={false}
			>
				{BOTTOM_TAB_SCREENS.map(({ name, component, icon, label }) => {
					return (
						<Tab.Screen
							name={name}
							component={component}
							options={{
								tabBarLabel: label,
								tabBarIcon: ({ color }) => (
									<MaterialCommunityIcons name={icon} color={color} size={26} />
								)
							}}
						/>
					);
				})}
			</Tab.Navigator>
		</NavigationContainer>
	);
}
