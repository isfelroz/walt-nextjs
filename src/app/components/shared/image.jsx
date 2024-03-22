import { getMediaById } from '@/libs/wordpress'
import clsx from 'clsx'
import Image from 'next/image'

const ASPECT = {
    square: 'aspect-square',
    auto: '',
}

export default async function ExternalImage({ id, ratio, object_fit, link = null, sizes, className = 'first-letter:' }) {
    const image = await getMediaById(id)
    if (!image) return null
    let fill = true
    const props = {}
    if (image.width && image.height) fill = false
    if (image.width) props.width = image.width
    if (image.height) props.height = image.height

    return (
        <div className={clsx('relative', ASPECT[ratio])}>
            <Image src={image.src} alt={image.alt} sizes={sizes} fill={fill} {...props} />
        </div>
    )
}
