import React from 'react'
import { View, Text, Button, Image, TextInput } from 'react-native'

const ScreenTitle = (props) => {
	return (
		<View style={{ alignItems: 'center', justifyContent: 'top' }}>
			<Text style={{ fontSize: 25 }}>{props.message}</Text>
		</View>
	)
}

export default ScreenTitle
