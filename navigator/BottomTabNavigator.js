import React, { useContext ,useEffect} from 'react';

import { UserContext } from '../context';

// https://github.com/torgeadelin/react-native-animated-nav-tab-bar
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { HomeScreen, SettingsScreen, LoginScreen } from '../screens';
import colors from '../colors';

const Tabs = AnimatedTabBarNavigator();



export default function BottomTabNavigator() {
	const { user } = useContext(UserContext);

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
		},
		{
			name: 'LoginScreen',
			component: user?.name ? SettingsScreen : LoginScreen,
			icon: 'face',
			label: 'Profile'
		}
	];

	return (
		<Tabs.Navigator
			tabBarOptions={{
				activeTintColor: colors.light,
				activeBackgroundColor: colors.primary
			}}
			labeled={false}
			appearance={{
				// tabBarBackground: colors.primaryAlpha,
				floating: true,
				shadow: true
			}}

			// floating
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
	);
}
