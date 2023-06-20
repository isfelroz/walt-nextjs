import { getMediaById } from '@/libs/wordpress'
import Container from '../shared/container'
import Block from './block'

export default async function Actualites({ content, block_options }) {
	const { title } = content
	return (
		<Block options={block_options}>
			<Container>
				<div>
					<h3>{title}</h3>
				</div>
			</Container>
		</Block>
	)
}
