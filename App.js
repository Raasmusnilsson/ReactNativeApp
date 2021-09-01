import * as React from 'react'
import { View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import About from './screens/About'
import Home from './screens/Home'
import APIContextProvider from './components/APIContext'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function NotificationsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	)
}

function App() {
	return (
		<APIContextProvider>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="Home">
					<Drawer.Screen name="Home" component={Home} />
					<Drawer.Screen name="About" component={About} />
					<Drawer.Screen name="Notifications" component={NotificationsScreen} />
				</Drawer.Navigator>
			</NavigationContainer>
		</APIContextProvider>
	)
}

export default App
