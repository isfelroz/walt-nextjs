import Link from 'next/link'
import url from 'url'
export default function PageLink({ link, children, ...props }) {
	const page_url = url.parse(link.url)
	return (
		<Link href={page_url.pathname} {...props}>
			{children}
		</Link>
	)
}
