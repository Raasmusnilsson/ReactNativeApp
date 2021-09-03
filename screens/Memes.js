import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenTitle from '../components/ScreenTitle'
import MemesFlatList from '../components/MemesFlatList'
import { useAPI } from '../components/APIContext'
import RenderRandom from '../components/RenderRandom'

const Memes = () => {
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
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<ScreenTitle message="Famous Meme Templates" />
			<View>
				<Text>Select how many memes to be rendered: {amount}</Text>
				<TextInput
					style={{ borderWidth: 1, borderRadius: 1 }}
					keyboardType="numeric"
					onChange={(event) => setMemesToRender(event.target.value)}
				></TextInput>
			</View>

			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity
					style={{
						paddingRight: 10,
					}}
				>
					<Button
						onPress={() => {
							sliceMemes(memesToRender)
						}}
						title="Render"
					></Button>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						paddingLeft: 10,
					}}
				>
					<RenderRandom
						setter={{
							setAmount: setAmount,
						}}
						onPress={() => {
							sliceMemes(amount)
						}}
					/>
				</TouchableOpacity>
			</View>

			{meme ? (
				<MemesFlatList meme={meme.slice(0, amount)} />
			) : (
				<Text> Couldn't fetch data..</Text>
			)}
		</View>
	)
}

export default Memes
