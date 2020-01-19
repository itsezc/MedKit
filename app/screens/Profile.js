import { Container } from '../components/styles/Container'
import { Card } from '../components/styles/Card'
import { CardTitle } from '../components/styles/CardTitle'

export default = () => {
	return(
		<Container>
			<Item >
			<Title >Item number 1</Title>
			</Item>
			<Item >
			<Title >Item number 2</Title>
			</Item>
			<Item >
			<Title >Item number 3</Title>
			</Item>
			<Item >
			<Title >Item number  4</Title>
			</Item>
		</Container>
	)
}