import Container from '../shared/container'
import Block from './block'
import DynamicComponent from '../shared/dynamic-component'
import clsx from 'clsx'

const defaultOptions = {
	column_width: '50',
	gap: 'none',
	align: 'start',
	justify: 'center',
	items: [],
}

const COLUMNS_WIDTH = {
	30: 'lg:grid-cols-[30%_1fr]',
	40: 'lg:grid-cols-[40%_1fr]',
	50: '',
	60: 'lg:grid-cols-[60%_1fr]',
	70: 'lg:grid-cols-[70%_1fr]',
}

export default function TwoColumns({ content, block_options = {} }) {
	const {
		column_width,
		gap,
		align,
		justify,
		items,
		watermark = '',
	} = { ...defaultOptions, ...content }

	const classes = clsx(
		'grid grid-cols-1 gap-[30px] md:gap-[63px] lg:gap-[126px]',
		items.length > 1 ? 'md:grid-cols-2' : '',
		items.length > 1 ? COLUMNS_WIDTH[column_width] : ''
	)

	return (
		<Block options={block_options}>
			<Container>
				{watermark && (
					<div className="text-watermark leading-[1] opacity-5 mb-[-40px] relative z-0">
						{watermark}
					</div>
				)}
				<div className={classes}>
					{items?.length &&
						items.map((item, key) =>
							item['acf_fc_layout'] ? (
								<DynamicComponent key={key} name={item['acf_fc_layout']} component={item} />
							) : null
						)}
				</div>
			</Container>
		</Block>
	)
}
