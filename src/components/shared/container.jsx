import clsx from 'clsx'
export default function Container({ className, children }) {
	return <div className={clsx('container px-4 mx-auto', className)}>{children}</div>
}
