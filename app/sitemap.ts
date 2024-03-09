import { getBlogPosts } from 'app/db/blog'

export default async function sitemap() {
	let blogs = getBlogPosts().map((post) => ({
		url: `https://yousofalgburi.com/blog/${post.slug}`,
		lastModified: post.metadata.publishedAt
	}))

	let routes = ['', '/blog', '/work', '/projects'].map((route) => ({
		url: `https://yousofalgburi.com${route}`,
		lastModified: new Date().toISOString().split('T')[0]
	}))

	return [...routes, ...blogs]
}
