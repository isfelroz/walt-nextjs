import dynamic from 'next/dynamic'

export function useDynamicBlock({ block }) {
	switch (block) {
		case '2columns':
			return dynamic(() => import('@/components/blocks/2-columns'))
		case 'media':
			return dynamic(() => import('@/components/blocks/media'))

		default:
			return null
	}
}
