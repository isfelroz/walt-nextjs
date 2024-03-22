// import DynamicBlock from '@/components/blocks/dynamic-block'
import Flexible from '@/app/components/sections/flexible'
import HeroHome from '@/app/components/sections/hero-home'
import { getHomePage } from '@/libs/wordpress'
import { notFound } from 'next/navigation'

export default async function Home() {
	const home = await getHomePage()
	if (!home) {
		notFound()
		return null
	}
	const { hero, blocks } = home?.acf

	console.log(blocks)

	return (
		<main className="isolate overflow-x-hidden">
			{hero && <HeroHome {...hero} />}
			{blocks?.length && <Flexible offset={true} blocks={blocks} />}
		</main>
	)
}
