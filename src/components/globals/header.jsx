'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from '../shared/container'
import clsx from 'clsx'
import HeaderResponsive from './header-responsive'

export default function Header({ logo, menu }) {
	const [minified, setMinified] = useState('')
	const [openMenu, setOpenMenu] = useState(false)

	const onScroll = (e) => {
		let value = window.scrollY
		if (value > 50) {
			setMinified(true)
		} else if (value < 1) {
			setMinified(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])
	return (
		<section id="header" className={clsx('group sticky top-0 w-full dark', { minified })}>
			<div className="bg-background py-4 group-[&.minified]:py-2 transition-all isolate">
				<Container>
					<div className="wrapper flex justify-between items-center lg:grid lg:grid-cols-[20%_1fr_20%]">
						<div className="">
							{logo && (
								<Link href="/">
									<div
										className={clsx(
											'external-svg stroke-[3.6] stroke-link hover:stroke-link-hover transition-all duration-200',
											{
												'h-[60px]': minified,
												'h-[100px]': !minified,
											}
										)}
										dangerouslySetInnerHTML={{ __html: logo.html }}
									/>
								</Link>
							)}
						</div>
						<nav
							className="main_navigation hidden lg:flex justify-center items-center gap-12 h-full"
							role="navigation"
						>
							<a href="">L’agence</a>

							<a href="">Nos expertises</a>

							<a href="">Nos réalisations</a>

							<a href="">News &amp; jobs</a>
						</nav>
						<div className="h-full">
							<div className="flex gap-4 items-center h-full justify-end">
								<div>
									<a
										href="/"
										className="bg-btn-bg duration-300 group hover:bg-btn-bg-hover hover:text-btn-text-hover px-6 py-3 rounded-[30px] text-btn-text transition"
									>
										<span className="">Contact </span>
									</a>
								</div>
								<div>
									<button
										id="theme-toggle"
										type="button"
										className="bg-btn-bg text-btn-text hover:text-btn-text-hover hover:bg-btn-bg-hover rounded-full aspect-square text-sm p-2.5 h-full grid place-items-center"
									>
										<svg
											id="theme-toggle-dark-icon"
											className="w-5 h-5 hidden"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
										</svg>
										<svg
											id="theme-toggle-light-icon"
											className="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
												fill-rule="evenodd"
												clip-rule="evenodd"
											></path>
										</svg>
									</button>
								</div>
								<HeaderResponsive menu={menu} setMinified={setMinified} />
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	)
}
