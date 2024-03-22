import Container from '../shared/container'
import Media from '../shared/media'
import Block from './block'

export default async function MediaB({ content, block_options }) {
	return (
		<Block options={block_options}>
			<Container>
				<Media {...content} sizes="100vw" />
			</Container>
		</Block>
	)
}
