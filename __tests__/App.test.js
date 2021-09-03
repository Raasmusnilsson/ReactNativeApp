import renderer from 'react-test-renderer'
import * as React from 'react'
import 'react-native'
import App from '../App'
import { render } from '@testing-library/react-native'
import Home from '../screens/Home'

it('renders correctly', () => {
	renderer.create(<App />)
})

it('have right placeholder text', () => {
	const { getByPlaceholderText } = render(<Home />)
	const element = getByPlaceholderText("What's your name?")
})

it('matches snapshot', () => {
	const tree = renderer.create(<App />).toJSON()
	expect(tree).toMatchSnapshot()
})

it('get element by id', () => {
	const { queryAllByTestId } = render(<Home />)
	const element = queryAllByTestId('greeting')
})
