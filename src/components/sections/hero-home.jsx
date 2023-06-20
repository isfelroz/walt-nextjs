import Container from '@/components/shared/container'
import WaltIcon from '@/components/icons/walt-icon'
import HtmlText from '../shared/html-text'
import Image from 'next/image'
import Text from '../shared/text'
import clsx from 'clsx'
import SliderSwiper from '../shared/slider-swiper'
import TextText from '../blocks/text-text'

const text =
	'<p>Nous sommes une agence digitale où <strong>stratégie</strong>, design, technologie et webmarketing se rencontrent pour garantir le succès de votre communication sur le Web.</p>'
export default function HeroHome({
	text_left = null,
	text_right = null,
	images_slider = null,
	display = false,
	palette = null,
}) {
	if (!display) return null

	return (
		<section
			className={clsx(
				'bg-background flex flex-col [&_.swiper]:mb-[-100px]',
				palette?.palette_choice
			)}
		>
			<Container>
				<TextText text1={text_left} text2={text_right} />
			</Container>
			<div className="px-8  [&>.swiper]:overflow-visible">
				{images_slider?.length && <SliderSwiper slides={images_slider} />}
			</div>
		</section>
	)
}
