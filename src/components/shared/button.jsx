import clsx from 'clsx'
import Link from 'next/link'

export default function Buttton({ link }) {
	return (
		<Link
			className={clsx(
				'bg-btn-bg duration-300 group hover:bg-btn-bg-hover hover:text-btn-text-hover px-6 py-3 rounded-[30px] text-btn-text transition'
			)}
			href={link.url}
		>
			{link.title}
		</Link>
	)
}
