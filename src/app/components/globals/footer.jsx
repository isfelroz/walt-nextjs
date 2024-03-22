import Link from 'next/link'
import Container from '../shared/container'
import ButttonArrow from '../shared/button-arrow'
import ExternalSvg from '../shared/external-svg'
import clsx from 'clsx'

export default function Footer({ menu, logo, createby, contact_details }) {
	return (
		<footer className="bg-background dark overflow-hidden">
			<Container className={'relative isolate'}>
				{logo && (
					<div className="absolute -bottom-[5%] -left-[5%] z-[-10] text-white opacity-10 w-[60%]">
						<ExternalSvg
							className={clsx('external-svg  [&_*]:fill-current w-full')}
							dangerouslySetInnerHTML={{ __html: logo.html }}
						/>
					</div>
				)}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--xl-space)] py-28">
					<div>
						<Link href={'/'} className="flex w-fit items-center gap-8">
							<span className="text-link-hover hover:text-link duration-500 transition text-h2">
								Nous suivre
							</span>
							<ButttonArrow />
						</Link>
					</div>
					<div>
						<div className="flex justify-end gap-[var(--xl-space)]">
							<div>
								<h4 className="mb-8">Réseaux</h4>
								<ul className="flex flex-col gap-2 text-xs">
									<li>
										<a href="#" class="text-link hover:text-link-hover uppercase transition">
											Instagram
										</a>
									</li>
									<li>
										<a href="#" class="text-link hover:text-link-hover uppercase transition">
											Facebook
										</a>
									</li>
									<li>
										<a href="#" class="text-link hover:text-link-hover uppercase transition">
											Linkedin
										</a>
									</li>
								</ul>
							</div>
							{contact_details?.addresses?.length && (
								<div className="flex flex-col gap-12">
									{contact_details.addresses.map((address, key) => (
										<div key={key}>
											<h4 className="mb-8">{address.title}</h4>
											<p>{address.address}</p>
											<p>
												{address.zip_code} {address.city}
											</p>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="flex justify-between items-center py-2">
					<MenuLegal menu={menu} />
					<span className="text-sm text-p-color">{createby}</span>
				</div>
			</Container>
		</footer>
	)
}

function MenuLegal({ menu }) {
	return (
		<ul>
			{menu.length &&
				menu.map((item, key) => (
					<li key={key}>
						<Link
							href={item?.path?.path}
							className="text-link hover:text-link-hover text-sm transition"
						>
							{item.title}
						</Link>
					</li>
				))}
		</ul>
	)
}
