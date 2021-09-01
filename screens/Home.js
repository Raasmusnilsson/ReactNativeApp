import { View, Text, Button, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/meme-logo.png'

function Home({ navigation }) {
	const memeLogo = logo
	const [name, setName] = useState('')
	const [typedName, setTypedName] = useState(false)

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
			<Text style={{ fontSize: 25 }}>Home Screen</Text>

			<Image source={memeLogo} style={{ width: 500, height: 450 }}></Image>

			<TextInput
				style={{ borderWidth: 1, borderRadius: 1 }}
				placeholder="What's your name?"
				onChange={(event) => setName(event.target.value)}
			></TextInput>

			{name.length > 3 && typedName === false && (
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
