import { View, Text, Button, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/meme-logo.png'
import ScreenTitle from '../components/ScreenTitle'

function Home({ navigation }) {
	const [name, setName] = useState('')
	const [typedName, setTypedName] = useState(false)

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
			<ScreenTitle message="Classic Meme Images" />

			<Image
				resizeMode="contain"
				source={logo}
				style={{ width: '75%', height: '75%' }}
			/>

			<TextInput
				style={{ borderWidth: 1, borderRadius: 1 }}
				placeholder="What's your name?"
				onChange={(event) => setName(event.target.value)}
			/>

			{name.length > 2 && typedName === false && (
				<Button title="Get a greeting" onPress={() => setTypedName(true)} />
			)}

			{typedName && (
				<Text>
					Welcome, {name}! Continue to the{' '}
					<Button title="About" onPress={() => navigation.navigate('About')} />{' '}
					page!
				</Text>
			)}
		</View>
	)
}
export default Home
