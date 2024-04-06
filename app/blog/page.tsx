import { getBlogPosts } from '@/lib/blog'
import Link from 'next/link'

export const metadata = {
    title: 'Blog',
    description: 'Read my thoughts on software development, design, and more.',
}

export default function Page() {
    let allBlogs = getBlogPosts()

    return (
        <section>
            <h1 className="mb-8 text-2xl font-medium tracking-tighter">Read my blog</h1>
            {allBlogs
                .sort((a, b) => {
                    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                        return -1
                    }
                    return 1
                })
                .map((post) => (
                    <Link key={post.slug} className="mb-4 flex flex-col space-y-1" href={`/blog/${post.slug}`}>
                        <div className="flex w-full flex-col">
                            <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
                                {post.metadata.title}
                            </p>
                        </div>
                    </Link>
                ))}
        </section>
    )
}
