import HeroHome from '@/components/sections/hero-home'
import { getHomePage } from '@/libs/wordpress'
import Image from 'next/image'

export default async function Home() {
	const { acf } = await getHomePage()
	return <main className="">{acf?.hero && <HeroHome {...acf.hero} />}</main>
}
