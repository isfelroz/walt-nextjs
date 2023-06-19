import Text from '../shared/text'

export default function TextText({ text1, text2 }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_50%] gap-[30px] md:gap-[63px] lg:gap-[126px] py-[84px]">
			<Text {...text1} />
			<Text {...text2} />
		</div>
	)
}
