import { getMediaById } from '@/libs/wordpress'
import Container from '../shared/container'
import Block from './block'
import Actuality from '../shared/actuality'

export default async function Actualites({ content, block_options }) {
	const { block_title } = content
	return (
		<Block options={block_options}>
			<Container>
				<div>
					<h2 className="mb-8">{block_title}</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<Actuality />
						<Actuality />
						<Actuality />
					</div>
				</div>
			</Container>
		</Block>
	)
}
