import Container from '@/components/shared/container'
import WaltIcon from '@/components/icons/walt-icon'
import HtmlText from '../shared/html-text'
import Image from 'next/image'
import Text from '../shared/text'
import clsx from 'clsx'
import SliderSwiper from '../shared/slider-swiper'

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
		<section className={clsx('bg-background', palette?.palette_choice)}>
			<Container>
				<div className="grid grid-cols-2 gap-[126px] py-[84px]">
					<Text {...text_left} />
					<Text {...text_right} />
				</div>
			</Container>
			<div>{images_slider?.length && <SliderSwiper slides={images_slider} />}</div>
		</section>
	)
}
