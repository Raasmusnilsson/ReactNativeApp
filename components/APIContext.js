import React, { createContext, useState } from 'react'
import { useContext, useEffect } from 'react/cjs/react.development'

export const APIContext = createContext()

function APIContextProvider({ children }) {
	const [meme, setMeme] = useState(null)

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((response) => response.json())
			.then((data) => {
				setMeme(data.data.memes)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	return <APIContext.Provider value={{ meme }}>{children}</APIContext.Provider>
}

export default APIContextProvider

export function useAPI() {
	const context = useContext(APIContext)
	if (context === undefined) {
		throw new Error('Context must be used within a Provider')
	}
	return context
}
