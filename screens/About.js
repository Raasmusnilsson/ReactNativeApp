import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import MemesFlatList from '../components/MemesFlatList'
import { useAPI } from '../components/APIContext'

const About = () => {
	const [amount, setAmount] = useState(5)
	const [memesToRender, setMemesToRender] = useState(1)
	const { meme } = useAPI()

	function sliceMemes(props) {
		if (props < 1 || props > 100) {
			alert('Can only select a number between 1-100')
		}
		setAmount(props)
	}

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Famous meme templates</Text>
			<View>
				<Text>Select how many memes to be rendered:</Text>
				<TextInput
					style={{ borderWidth: 1, borderRadius: 1 }}
					type="numbers"
					keyboardType="numeric"
					onChange={(event) => setMemesToRender(event.target.value)}
				></TextInput>
			</View>
			<Button
				onPress={() => {
					sliceMemes(memesToRender)
				}}
				title="Render"
			/>
			{meme ? (
				<MemesFlatList meme={meme.slice(0, amount)} />
			) : (
				<Text> Couldn't fetch data..</Text>
			)}
		</View>
	)
}

export default About
