import Text from '../shared/text'
import Block from './block'
import Container from '../shared/container'

export default function TextB({ text, block_options }) {
	return (
		<Block options={block_options}>
			<Container>
				<Text {...text} />
			</Container>
		</Block>
	)
}
