// import DynamicBlock from '@/components/blocks/dynamic-block'
import Flexible from '@/components/sections/flexible'
import HeroHome from '@/components/sections/hero-home'
import { getHomePage } from '@/libs/wordpress'
import Image from 'next/image'

export default async function Home() {
	const home = await getHomePage()
	if (!home) {
		notFound()
		return null
	}
	const { hero, blocks } = home?.acf

	return (
		<main className="isolate">
			{hero && <HeroHome {...hero} />}
			{blocks?.length && <Flexible offset={true} blocks={blocks} />}
		</main>
	)
}
