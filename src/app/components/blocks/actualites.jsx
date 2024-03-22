import { getMediaById } from '@/libs/wordpress'
import Container from '../shared/container'
import Block from './block'
import Actuality from '../shared/actuality'

export default async function Actualites({ content, block_options }) {
	const { title } = content
	return (
		<Block options={block_options}>
			<Container>
				<div>
					<h3 className="mb-8">{title}</h3>
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
