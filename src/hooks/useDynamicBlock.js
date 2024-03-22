import dynamic from 'next/dynamic'

export function useDynamicBlock({ block }) {
	switch (block) {
		case 'two-columns':
			return dynamic(() => import('@/app/components/blocks/two-columns'))
		case 'media':
			return dynamic(() => import('@/app/components/blocks/media'))
		case 'realisations':
			return dynamic(() => import('@/app/components/blocks/realisations'))
		case 'logos-grid':
			return dynamic(() => import('@/app/components/blocks/logos'))
		case 'text':
			return dynamic(() => import('@/app/components/blocks/text'))
		case 'columns-image-text':
			return dynamic(() => import('@/app/components/blocks/columns-image-text'))
		case 'links-columns':
			return dynamic(() => import('@/app/components/blocks/links-columns'))

		default:
			return null
	}
}
