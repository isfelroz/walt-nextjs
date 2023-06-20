import { mapThemeGlobals } from './utils'

const domain = `https://${process.env.WORDPRESS_DOMAIN}/wp-json/`
const endpoint = `${domain}${process.env.WORDPRESS_API_ENDPOINT}`
const key = process.env.WORDPRESS_API_TOKEN

export async function wordpressFetch({
	query,
	method = 'GET',
	path = '',
	variables,
	headers,
	...args
}) {
	const request = {
		method,
		headers: {
			'Content-Type': 'application/json',
			...headers,
		},
		...args,
	}

	if (method === 'POST') {
		request[body] = JSON.stringify({
			...(query && { query }),
			...(variables && { variables }),
		})
	}
	try {
		const result = await fetch(`${endpoint}${path}`, request)

		const body = await result.json()
		return {
			status: result.status,
			body,
		}
	} catch (e) {
		throw {
			error: e,
			request,
		}
	}
}

export async function getGlobals() {
	try {
		const res = await wordpressFetch({
			path: '/globals',
			// cache: 'no-store',
		})
		const data = await res?.body?.data
		if (!data) throw new Error('No globals')

		const { theme } = data
		const mappedTheme = mapThemeGlobals(theme)
		data.themeVars = mappedTheme

		return data
	} catch (e) {
		console.log(e)
		return null
	}
}

/* -------------------------------------------------------------------------- */
/*                                    PAGES                                   */
/* -------------------------------------------------------------------------- */

export async function getHomePage() {
	try {
		const res = await wordpressFetch({
			path: '/pages/home',
			next: { revalidate: 900 },
			// cache: 'force-cache',
		})

		const data = await res?.body?.data
		if (!data) throw new Error('No data found')
		return data
	} catch (e) {
		console.log(e)
		return null
	}
}

export async function getPagesSlugs() {
	try {
		const res = await wordpressFetch({
			path: '/pages',
			cache: 'no-store',
			// next: { revalidate: 900 },
			// cache: 'force-cache',
		})

		const data = await res?.body?.data
		if (!data) throw new Error('No data found')
		return data
	} catch (e) {
		console.log(e)
		return null
	}
}

export async function getPageByPath({ path }) {
	try {
		const res = await wordpressFetch({
			path: '/pages/' + path,
			next: { revalidate: 900 },
			// cache: 'force-cache',
		})

		const data = await res?.body?.data
		if (!data) throw new Error('No data found')
		return data
	} catch (e) {
		console.log(e)
		return null
	}
}

/* -------------------------------------------------------------------------- */
/*                                    MEDIA                                   */
/* -------------------------------------------------------------------------- */

export async function getMediaById(id) {
	try {
		const res = await wordpressFetch({
			path: '/media/' + id,
			next: { revalidate: 900 },
			// cache: 'force-cache',
		})

		const data = await res?.body?.data
		if (!data) throw new Error('No data found')
		return data
	} catch (e) {
		console.log(e)
		return null
	}
}
