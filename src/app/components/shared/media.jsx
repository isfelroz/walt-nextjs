import { getMediaById } from '@/libs/wordpress'
import clsx from 'clsx'
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

async function ExternalImage({
	id,
	ratio,
	object_fit,
	link = null,
	sizes,
	className = 'first-letter:',
}) {
	const image = await getMediaById(id)
	let fill = true
	const props = {}
	if (image.width && image.height) fill = false
	if (image.width) props.width = image.width
	if (image.height) props.height = image.height

	return (
		<div className={clsx('relative', fill ? '[&>img]:w-[auto_!important]' : '')}>
			<Image src={image.src} alt={image.alt} sizes={sizes} fill={fill} {...props} />
		</div>
	)
}
