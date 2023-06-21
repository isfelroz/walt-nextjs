import dynamic from 'next/dynamic'

export function useDynamicComponent({ component }) {
	switch (component) {
		case 'text':
			return dynamic(() => import('@/components/shared/text'))
		case 'media':
			return dynamic(() => import('@/components/shared/media'))

		default:
			return null
	}
}
