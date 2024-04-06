import { CustomMDX } from '@/components/mdx'
import { getBlogPosts } from '@/lib/blog'
import type { Metadata } from 'next'
import { unstable_noStore as noStore } from 'next/cache'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
    let post = getBlogPosts().find((post) => post.slug === params.slug)
    if (!post) {
        return
    }

    let { title, publishedAt: publishedTime, summary: description, image } = post.metadata
    let ogImage = image ? `https://yousofalgburi.com${image}` : `https://yousofalgburi.com/og?title=${title}`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `https://yousofalgburi.com/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

function formatDate(date: string) {
    noStore()
    let currentDate = new Date()
    if (!date.includes('T')) {
        date = `${date}T00:00:00`
    }
    let targetDate = new Date(date)

    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
    let daysAgo = currentDate.getDate() - targetDate.getDate()

    let formattedDate = ''

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`
    } else {
        formattedDate = 'Today'
    }

    let fullDate = targetDate.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    return `${fullDate} (${formattedDate})`
}

export default function Page({ params }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <section className="pb-20">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.metadata.title,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.publishedAt,
                        description: post.metadata.summary,
                        image: post.metadata.image
                            ? `https://yousofalgburi.com${post.metadata.image}`
                            : `https://yousofalgburi.com/og?title=${post.metadata.title}`,
                        url: `https://yousofalgburi.com/blog/${post.slug}`,
                        author: {
                            '@type': 'Person',
                            name: 'Yousof Algburi',
                        },
                    }),
                }}
            />
            <h1 className="title max-w-[650px] text-2xl font-medium tracking-tighter">{post.metadata.title}</h1>
            <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {formatDate(post.metadata.publishedAt)}
                </p>
            </div>
            <article className="prose prose-quoteless prose-neutral dark:prose-invert">
                <CustomMDX source={post.content} />
            </article>
        </section>
    )
}
