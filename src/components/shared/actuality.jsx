import Link from 'next/link'
import Image from 'next/image'
import ButttonArrow from './button-arrow'
export default function Actuality() {
	return (
		<article className="group aspect-[4/5] relative w-full rounded-3xl overflow-hidden isolate">
			<Image
				src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg"
				alt=""
				fill
				className="transition-all duration-300 ease group-hover:grayscale z-0"
			/>
			<div className="absolute flex flex-col justify-center w-full h-full bg-highlight/70 opacity-0 transition-all duration-300 ease top-0 left-0 group-hover:opacity-100 z-10">
				<div className="scrolling_text as_h1 text-primary whitespace-nowrap animate-[scrolling-text_5s_linear_infinite]">
					Village de montagne au cœur de la Haute-Savoie. Village de montagne au cœur de la
					Haute-Savoie. Village de montagne au cœur de la Haute-Savoie. Village de montagne au cœur
					de la Haute-Savoie.
				</div>
			</div>
			<Link href="#" className=" relative z-20 ">
				<div className="flex flex-col align-center justify-end h-full p-3">
					<div className="bg-background rounded-[10px] p-3 flex justify-between gap-4 items-center">
						<div className="content_content flex-1">
							<h4>La Clusaz</h4>
							<div className="tags">{`Stratégie • Campagnes d'acquisition`}</div>
						</div>
						<div>
							<ButttonArrow link={{ url: '#' }} />
						</div>
					</div>
				</div>
			</Link>
		</article>
	)
}
