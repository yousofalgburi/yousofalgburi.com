import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { highlight } from 'sugar-high'
import { LiveCode } from './sandpack'
import { TweetComponent } from './tweet'

function Table({ data }: { data: any }) {
    let headers = data.headers.map((header: any, index: any) => <th key={index}>{header}</th>)
    let rows = data.rows.map((row: any, index: any) => (
        <tr key={index}>
            {row.map((cell: any, cellIndex: any) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ))

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

function CustomLink(props: any) {
    let href = props.href

    if (href.startsWith('/')) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        )
    }

    if (href.startsWith('#')) {
        return <a {...props} />
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: any) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Callout(props: any) {
    return (
        <div className="mb-8 flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
            <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
            <div className="callout w-full">{props.children}</div>
        </div>
    )
}

function ProsCard({ title, pros }: any) {
    return (
        <div className="my-4 w-full rounded-xl border border-emerald-200 bg-neutral-50 p-6 dark:border-emerald-900 dark:bg-neutral-900">
            <span>{`You might use ${title} if...`}</span>
            <div className="mt-4">
                {pros.map((pro: any) => (
                    <div key={pro} className="mb-2 flex items-baseline font-medium">
                        <div className="mr-2 h-4 w-4">
                            <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                    <path d="M22 4L12 14.01l-3-3" />
                                </g>
                            </svg>
                        </div>
                        <span>{pro}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function ConsCard({ title, cons }: any) {
    return (
        <div className="my-6 w-full rounded-xl border border-red-200 bg-neutral-50 p-6 dark:border-red-900 dark:bg-neutral-900">
            <span>{`You might not use ${title} if...`}</span>
            <div className="mt-4">
                {cons.map((con: any) => (
                    <div key={con} className="mb-2 flex items-baseline font-medium">
                        <div className="mr-2 h-4 w-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-4 w-4 text-red-500"
                            >
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </div>
                        <span>{con}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function Code({ children, ...props }: any) {
    let codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: any) {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: any) {
    // eslint-disable-next-line react/display-name
    return ({ children }: any) => {
        let slug = slugify(children)
        return React.createElement(
            `h${level}`,
            { id: slug },
            [
                React.createElement('a', {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: 'anchor',
                }),
            ],
            children
        )
    }
}

let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    a: CustomLink,
    Callout,
    ProsCard,
    ConsCard,
    StaticTweet: TweetComponent,
    code: Code,
    Table,
    LiveCode,
}

export function CustomMDX(props: any) {
    return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
}
