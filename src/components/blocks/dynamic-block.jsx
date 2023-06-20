import { useDynamicBlock } from '@/hooks/useDynamicBlock'

export default function DynamicBlock({ name, block }) {
	const Component = useDynamicBlock({ block: name })
	if (!Component) return null
	return <Component {...block} />
}
