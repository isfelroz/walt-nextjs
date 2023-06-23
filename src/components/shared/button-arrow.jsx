'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function ButttonArrow() {
	const btnRef = useRef(null)
	const spanRef = useRef(null)

	const handleMouseEnter = ({ offsetY, offsetX }) => {
		spanRef.current.style.top = offsetY + 'px'
		spanRef.current.style.left = offsetX + 'px'
		btnRef.current.classList.add('active')
	}

	const handleMouseOut = (e) => {
		btnRef.current.classList.remove('active')
	}

	useEffect(() => {
		btnRef.current?.addEventListener('mouseenter', handleMouseEnter)
		btnRef.current?.addEventListener('mouseleave', handleMouseOut)
		return () => {
			btnRef.current?.removeEventListener('mouseenter', handleMouseEnter)
			btnRef.current?.removeEventListener('mouseleave', handleMouseOut)
		}
	})

	return (
		<div
			ref={btnRef}
			className={clsx(
				'bg-btn-bg w-12 aspect-square group/btn-arrow hover:text-btn-text-hover px-6 py-3 rounded-full text-btn-text transition relative isolate overflow-hidden '
			)}
		>
			<div className="w-full h-full absolute top-0 left-0 grid place-content-center -rotate-45 group-hover/btn-arrow:rotate-0 transition-all duration-300">
				<FiArrowRight size={30} />
			</div>

			<div ref={spanRef} className="absolute top-0 left-0 w-[300%] aspect-square flex">
				<span className=" w-full aspect-square scale-0 group-[&.active]/btn-arrow:scale-100  bg-btn-bg-hover transition-all rounded-full z-[-1] -translate-x-1/2 -translate-y-1/2 delay-75 duration-500"></span>
			</div>
		</div>
	)
}
