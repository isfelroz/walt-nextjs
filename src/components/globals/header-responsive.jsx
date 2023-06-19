'use client'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Container from '../shared/container'

export default function HeaderResponsive({ menu, setMinified }) {
	const [open, setOpen] = useState(false)
	useEffect(() => {
		const root = document.querySelector('html')
		if (open) {
			setMinified(true)
			root.classList.add('frozen')
		} else {
			root.classList.remove('frozen')
		}
	}, [open, setMinified])
	return (
		<div className="lg:hidden">
			<button class="h-[40px] group/toggle" onClick={() => setOpen(!open)}>
				<div className="space-y-2 ">
					<span class="block w-8 h-0.5 bg-btn-bg group-hover/toggle:bg-btn-bg-hover transition duration-300"></span>
					<span class="block w-5 h-0.5 bg-btn-bg group-hover/toggle:bg-btn-bg-hover transition duration-300"></span>
					<span class="block w-8 h-0.5 bg-btn-bg group-hover/toggle:bg-btn-bg-hover transition duration-300"></span>
				</div>
			</button>
			<div
				className={clsx(
					'fixed top-0 -right-[100%] h-screen w-full bg-background [&.active]:right-0 responsive_panel z-[-1] transition-all duration-500 py-[66px]',
					{
						active: open,
					}
				)}
			>
				<Container>
					<nav className="responsive_navigation" role="navigation">
						<div className="menu">
							<ul>
								<li className="page_item page-item-130">
									<a href="https://walt-docker.dev-app.net/accueil/">Accueil</a>
								</li>
								<li className="page_item page-item-133">
									<a href="https://walt-docker.dev-app.net/test-marco/">Test Marco</a>
								</li>
							</ul>
						</div>
					</nav>
				</Container>
			</div>
		</div>
	)
}
