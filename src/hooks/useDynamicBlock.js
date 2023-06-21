import dynamic from 'next/dynamic'

export function useDynamicBlock({ block }) {
	switch (block) {
		case '2columns':
			return dynamic(() => import('@/components/blocks/2-columns'))
		case 'media':
			return dynamic(() => import('@/components/blocks/media'))
		case 'actualites':
			return dynamic(() => import('@/components/blocks/actualites'))
		case 'logos':
			return dynamic(() => import('@/components/blocks/logos'))
		case 'text':
			return dynamic(() => import('@/components/blocks/text'))

		default:
			return null
	}
}
