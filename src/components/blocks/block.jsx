import clsx from 'clsx'

const defaultOptions = {
	show: true,
	id: '',
	class: '',
	palette: { palette_choice: 'light' },
	padding_height_top: 'xlarge',
	padding_height_bottom: 'xlarge',
}

const PADDING_BOTTOM = {
	xlarge: 'pb-[var(--xl-space)]',
}
const PADDING_TOP = {
	xlarge: 'pt-[var(--xl-space)]',
	'4xlarge': 'pt-[208px]',
}
export default function Block({ children, options = {} }) {
	const { show, id, palette, padding_height_bottom, padding_height_top } = {
		...defaultOptions,
		...options,
	}
	if (!show) return null

	const classes = clsx(
		'bg-background',
		palette?.palette_choice,
		PADDING_BOTTOM[padding_height_bottom],
		PADDING_TOP[padding_height_top]
	)

	return (
		<section id={id} className={classes}>
			{children}
		</section>
	)
}
