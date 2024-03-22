import { getMediaById } from '@/libs/wordpress'
import Container from '../shared/container'
import Block from './block'
import Logo from '../shared/logo'
import clsx from 'clsx'

const OFFSET_CLASSES = {
	0: '[&:nth-last-child(-n+3)]:border-b-0',
	1: '',
	2: '',
	3: '[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(2)]:border-b md:[&:nth-last-child(3)]:border-b lg:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-last-child(2)]:border-b-0 lg:[&:nth-last-child(3)]:border-b-0',
	4: '[&:nth-last-child(-n+1)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+4)]:border-b-0',
	5: '',
}

export default async function Logos({ content, block_options, ...args }) {
	const { logos } = content

	const offset = logos.length % 6
	const classes = clsx(
		'aspect-square flex items-center justify-center p-8 md:p-10 lg:p-12 border-black border-r border-b [&:nth-child(3n)]:border-r-0 md:[&:nth-child(4n)]:border-r-0 md:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r lg:[&:nth-child(6n)]:border-r-0',
		OFFSET_CLASSES[offset]
	)

	return (
		<Block options={block_options}>
			<Container>
				<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
					{logos.length &&
						logos.map(({ image_id, link }, key) => {
							return (
								<div key={key} className={classes}>
									<Logo image={image_id} link={link} />
								</div>
							)
						})}
				</div>
			</Container>
		</Block>
	)
}
