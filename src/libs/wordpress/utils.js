export function mapThemeGlobals({ colors = null, fonts = null }) {
	const mappedTheme = '<style type="text/css">'
	let colorsVars = ''
	let fontsVars = ''

	if (colors?.length) {
		colors.forEach(({ palette }, key) => {
			const [name, variables] = mapPalette(palette)
			const stringPalette = `.${name}{ ${variables}}`

			if (key == 0) colorsVars += `:root{ ${variables}}`
			colorsVars += stringPalette
		})
	}

	if (fonts) {
		fontsVars = `:root{ ${mapFonts(fonts)}}`
	}

	return mappedTheme + colorsVars + fontsVars + '</style>'
}

function mapFonts(fonts) {
	let fontsToString = ''
	for (const tag in fonts) {
		if (tag == '') continue

		const fontSize = Number(fonts[tag]['font_size']) / 16
		const fontSizeMobil = Number(fonts[tag]['font_size_responsive']) / 16

		fontsToString += `--${tag}-size: ${fontSize}rem;`
		fontsToString += `--${tag}-size-mobil: ${fontSizeMobil}rem;`
		fontsToString += `--${tag}-weight: ${fonts[tag]['font_weight_choice']};`
		fontsToString += `--${tag}-leading: ${fonts[tag]['line_height']};`
	}
	return fontsToString
}

function mapPalette(palette) {
	let paletteToString = ''

	for (const variable in palette) {
		if (variable == '') continue
		if (variable == 'palette-name') continue

		paletteToString += `--${variable}: ${palette[variable]};`
	}
	return [palette['palette-name'], paletteToString]
}
