import React from 'react'
import { View, Text, Button } from 'react-native'
import ScreenTitle from '../components/ScreenTitle'

const About = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
			<ScreenTitle message="About Memes" />
			<Text style={{ fontSize: 20 }}>
				A meme is a cultural item that is transmitted by repetition and
				replication in a manner analogous to the biological transmission of
				genes.
				<br />
				An item in the form of an image, video, phrase, etc., that is spread via
				the internet and often altered in a creative or humorous way.
			</Text>
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	)
}

export default About
