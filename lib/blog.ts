import { readFileSync, readdirSync } from 'node:fs'
import { basename, extname, join } from 'node:path'

type Metadata = {
	title: string
	publishedAt: string
	summary: string
	image?: string
}

function parseFrontmatter(fileContent: string) {
	const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
	const match = frontmatterRegex.exec(fileContent)
	if (!match) throw new Error('Failed to parse front matter from the file content.')
	const frontMatterBlock = match[1]
	const content = fileContent.replace(frontmatterRegex, '').trim()
	const frontMatterLines = frontMatterBlock.trim().split('\n')
	const metadata: Partial<Metadata> = {}

	for (const line of frontMatterLines) {
		const [key, ...valueArr] = line.split(': ')
		const value = valueArr
			.join(': ')
			.trim()
			.replace(/^['"](.*)['"]$/, '$1') // Remove quotes and trim
		metadata[key.trim() as keyof Metadata] = value
	}

	return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string) {
	return readdirSync(dir).filter((file) => extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
	const rawContent = readFileSync(filePath, 'utf-8')
	return parseFrontmatter(rawContent)
}

function extractTweetIds(content: string) {
	const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g)
	return tweetMatches
		? tweetMatches
				.map((tweet: string) => {
					const idMatch = tweet.match(/[0-9]+/g)
					return idMatch ? idMatch[0] : null
				})
				.filter((id: string | null) => id !== null)
		: []
}

function getMDXData(dir: string) {
	const mdxFiles = getMDXFiles(dir)
	return mdxFiles.map((file) => {
		const { metadata, content } = readMDXFile(join(dir, file))
		const slug = basename(file, extname(file))
		const tweetIds = extractTweetIds(content)
		return {
			metadata,
			slug,
			tweetIds,
			content,
		}
	})
}

export function getBlogPosts() {
	return getMDXData(join(process.cwd(), 'content'))
}
