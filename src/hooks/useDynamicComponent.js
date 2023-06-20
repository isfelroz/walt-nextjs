import dynamic from 'next/dynamic'

export function useDynamicComponent({ component }) {
	switch (component) {
		case 'text':
			return dynamic(() => import('@/components/shared/text'))
			return null

		default:
			return null
	}
}
