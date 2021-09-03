import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screens/Home'
import Memes from './screens/Memes'
import About from './screens/About'
import APIContextProvider from './components/APIContext'

const Drawer = createDrawerNavigator()

function App() {
	return (
		<APIContextProvider>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="Home">
					<Drawer.Screen name="Home" component={Home} />
					<Drawer.Screen name="Memes" component={Memes} />
					<Drawer.Screen name="About" component={About} />
				</Drawer.Navigator>
			</NavigationContainer>
		</APIContextProvider>
	)
}

export default App
