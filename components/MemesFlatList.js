import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import * as React from 'react'

const MemesFlatList = (props) => {
	return (
		<FlatList
			data={props.meme}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<View
					style={{
						borderWidth: 1,
						borderRadius: 1,
						margin: 10,
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text style={{ fontSize: 25 }}>{item.name}</Text>
					<Image
						resizeMode="contain"
						style={{
							flex: 1,
							overflow: 'visible',
							width: 350,
							height: 350,
						}}
						source={{ uri: item.url }}
					/>
				</View>
			)}
		/>
	)
}

export default MemesFlatList
