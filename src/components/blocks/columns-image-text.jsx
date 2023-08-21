import Container from '../shared/container'
import Media from '../shared/media'
import Text from '../shared/text'
import Block from './block'

export default function ColumnsImageText({ block_options, content }) {
	const { columns = [] } = content
	return (
		<Block options={block_options}>
			<Container>
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 relative z-10">
					{columns.map((col, key) => (
						<ColItem key={key} {...col} />
					))}
				</div>
			</Container>
		</Block>
	)
}

function ColItem({ image, text }) {
	return (
		<article className=" flex flex-col gap-12">
			<div className="h-[100px] [&>div]:w-full [&>div]:h-full">
				<Media choice={'image'} image={image} sizes="30vw" />
			</div>
			<Text content={text} />
		</article>
	)
}
