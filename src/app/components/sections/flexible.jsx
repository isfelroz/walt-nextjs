import clsx from 'clsx'
import DynamicBlock from '../blocks/dynamic-block'

export default function Flexible({ blocks, offset = false }) {
	const classes = clsx('flex flex-col')
	return (
		<div className={classes}>
			{blocks.map((block, key) => {
				if (offset && key == 0) block.block_options.padding_height_top = '4xlarge'
				return block['acf_fc_layout'] ? (
					<DynamicBlock key={key} name={block['acf_fc_layout']} block={block} />
				) : null
			})}
		</div>
	)
}
