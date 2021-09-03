import { Button, View } from 'react-native'
import React from 'react'
import { useAPI } from '../components/APIContext'

const RenderRandom = ({ setter }) => {
	//const { meme } = useAPI() Getting a warning if I re-render too often with API. So hardcoding array length.

	function randomAmount() {
		setter.setAmount(Math.floor(Math.random() * (100 - 1 + 1)))
	}

	return (
		<View>
			<Button title="Random amount" onPress={() => randomAmount()}></Button>
		</View>
	)
}

export default RenderRandom
