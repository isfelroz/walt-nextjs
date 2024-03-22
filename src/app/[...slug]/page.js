import Flexible from '@/app/components/sections/flexible'
import HeroHome from '@/app/components/sections/hero-home'
import { getPageByPath, getPagesSlugs } from '@/libs/wordpress'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	const pages = await getPagesSlugs()

	const slugs = pages
		.map((page) => {
			const url = new URL(page.link)
			const slug = url.pathname.split('/').filter((path) => path != '')

			return {
				slug,
			}
		})
		.filter(({ slug }) => slug.length)

	return slugs
}

export default async function Page({ params }) {
	const path = params.slug.join('/')
	const page = await getPageByPath({ path })
	if (!page) {
		notFound()
		return null
	}

	const { hero, blocks } = page?.acf

	return (
		<main className="isolate">
			{hero && <HeroHome {...hero} />}
			{blocks?.length && <Flexible offset={false} blocks={blocks} />}
		</main>
	)
}
