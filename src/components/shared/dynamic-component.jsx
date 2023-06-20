import { useDynamicComponent } from '@/hooks/useDynamicComponent'

export default function DynamicComponent({ name, component }) {
	const Component = useDynamicComponent({ component: name })
	if (!Component) return null
	return <Component {...component} />
}
