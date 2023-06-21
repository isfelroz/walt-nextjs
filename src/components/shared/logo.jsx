import { getMediaById } from '@/libs/wordpress'
import Image from 'next/image'

export default async function Logo({ image, link }) {
	const logo = await getMediaById(image)
	return <Image sizes="20vw" {...logo} />
}
