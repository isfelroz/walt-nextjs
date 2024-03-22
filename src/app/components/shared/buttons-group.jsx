import Buttton from './button'

export default function ButtonsGroup({ buttons, position }) {
	if (!buttons?.length) return null
	return (
		<div className="flex gap-4">
			{buttons?.length && buttons.map((btn, key) => <Buttton key={key} {...btn} />)}
		</div>
	)
}
