'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import Image from 'next/image'

const config = {
	slidesPerView: 2,
	loop: true,
	spaceBetween: 16,
	snapIndex: false,
	lazyPreloadPrevNext: 2,
}

export default function SliderSwiper({ slides = [] }) {
	return (
		<Swiper spaceBetween={16} slidesPerView={2} loop lazyPreloadPrevNext={2}>
			{slides.map((slide, key) => {
				return (
					<SwiperSlide className="" key={key}>
						<div className="relative aspect-[3/2]">
							<Image
								className="absolute top-0 left-0 h-full w-full object-cover rounded-2xl"
								src={slide.url}
								alt={slide.alt}
								width={600}
								height={400}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}
