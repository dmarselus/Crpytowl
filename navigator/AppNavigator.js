import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { HomeScreen, SettingsScreen } from '../screens';
import colors from '../colors';

const Tabs = AnimatedTabBarNavigator();
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
		label: 'Settings'
	}
];

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Tabs.Navigator
				tabBarOptions={{
					activeTintColor: colors.light,
					activeBackgroundColor: colors.secondary
				}}
				labeled={false}
			>
				{BOTTOM_TAB_SCREENS.map(({ name, component, icon, label }) => {
					return (
						<Tabs.Screen
							key={name}
							name={name}
							component={component}
							options={{
								tabBarLabel: label,
								tabBarIcon: ({ focused, color }) => (
									<MaterialCommunityIcons
										name={`${icon}${!focused ? '-outline' : ''}`}
										color={focused ? colors.light : colors.dark}
										size={26}
									/>
								)
							}}
						/>
					);
				})}
			</Tabs.Navigator>
		</NavigationContainer>
	);
}
