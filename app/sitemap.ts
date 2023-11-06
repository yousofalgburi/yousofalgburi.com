export default async function sitemap() {
	const routes = ['', '/blog', '/uses'].map((route) => ({
		url: `https://yousofalgburi${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	return [...routes]
}
