import clsx from 'clsx'

export default function HtmlText({ content = '', className }) {
    const html = {
        __html: content.replace('<strong>', '<strong class="text-highlight">'),
    }
    return <div className={clsx('global_content', className)} dangerouslySetInnerHTML={html} />
}
