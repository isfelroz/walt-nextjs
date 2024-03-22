export default function Theme({ variables }) {
	return <div dangerouslySetInnerHTML={{ __html: variables }}></div>
}
