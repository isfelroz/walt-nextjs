import ButtonsGroup from './buttons-group'
import HtmlText from './html-text'

export default function Text({ content, group_buttons }) {
	return (
		<div className="flex flex-col gap-12">
			<HtmlText content={content} />
			<ButtonsGroup {...group_buttons} />
		</div>
	)
}
