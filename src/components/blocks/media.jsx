import Container from '../shared/container'
import Block from './block'

export default async function Media({ content, block_options }) {
	console.log(content)
	const { image, video } = content
	return (
		<Block options={block_options}>
			<Container>hello</Container>
		</Block>
	)
}
