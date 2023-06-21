import { getMediaById } from '@/libs/wordpress'
import Image from 'next/image'
export default function Media({ choice, image, video, sizes = '60vw' }) {
	switch (choice) {
		case 'audio':
			return null
		case 'video':
			return null
		case 'image':
			return <ExternalImage {...image} sizes={sizes} />
		default:
			return null
	}
}

async function ExternalImage({ id, ratio, object_fit, link = null, sizes }) {
	const image = await getMediaById(id)
	console.log(image)
	return <Image {...image} sizes={sizes} />
}
