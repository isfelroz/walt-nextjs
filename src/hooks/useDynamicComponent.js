import dynamic from 'next/dynamic'

export function useDynamicComponent({ component }) {
	switch (component) {
		case 'text':
			return dynamic(() => import('@/app/components/shared/text'))
		case 'media':
			return dynamic(() => import('@/app/components/shared/media'))
		case 'image':
			return dynamic(() => import('@/app/components/shared/image'))

		default:
			return null
	}
}
