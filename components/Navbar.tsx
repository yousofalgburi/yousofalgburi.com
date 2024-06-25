'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { LayoutGroup } from 'framer-motion'
import { Suspense } from 'react'
import NavItem from './NavItem'
import { ModeToggle } from './ModeToggle'
import { NavIcons as Icons } from '@/components/NavIcons'
import { usePathname } from 'next/navigation'

type BlogPost = {
	slug: string
	metadata: {
		title: string
		publishedAt: string
	}
}

const BlogList = ({ blogposts }: { blogposts: BlogPost[] }) => {
	const pathname = usePathname()
	return (
		<ul className='ml-6 mt-1 space-y-4 border-l pl-4'>
			{blogposts
				.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
				.map((post) => (
					<li
						key={post.slug}
						className={`relative flex items-center ${pathname === `/blog/${post.slug}` ? 'text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800' : ''}`}
					>
						<span className='mr-2 text-gray-400'>→</span>
						<Link href={`/blog/${post.slug}`} className='text-sm'>
							{post.metadata.title}
						</Link>
					</li>
				))}
		</ul>
	)
}

const navItems = {
	'/': {
		name: 'Home',
		icon: <Icons.UserIcon className='h-6 w-6' />,
		nonClickable: false,
	},
	'/work': {
		name: 'Work',
		icon: <Icons.BriefcaseIcon className='h-6 w-6' />,
		nonClickable: false,
	},
	'/blog': {
		name: 'Blog',
		icon: <Icons.PencilIcon className='h-6 w-6' />,
		nonClickable: true,
	},
	'/projects': {
		name: 'Projects',
		icon: <Icons.FolderIcon className='h-6 w-6' />,
		nonClickable: false,
	},
}

export default function Navbar({ blogPosts }: { blogPosts: BlogPost[] }) {
	return (
		<div className='flex flex-col border-b border-gray-200 dark:border-gray-600 md:border-b-0 md:border-r'>
			<div className='flex-1 overflow-auto p-4 md:p-6'>
				<div className='grid gap-8'>
					<div className='flex items-center gap-4'>
						<Avatar className='h-20 w-20'>
							<Image
								width={1920}
								height={1280}
								className='object-cover'
								src='/yousof_algburi.jpg'
								alt='Image of yousof algburi smiling.'
							/>
							<AvatarFallback>YA</AvatarFallback>
						</Avatar>
						<h2 className='text-xl font-semibold'>Yousof Algburi</h2>
						<ModeToggle />
					</div>
					<div className='grid gap-4'>
						<LayoutGroup>
							<nav className='fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto' id='nav'>
								<div className='flex flex-col space-x-0 pr-10'>
									<Suspense fallback={null}>
										{Object.entries(navItems).map(([path, { name, icon, nonClickable }]) => (
											<React.Fragment key={path}>
												<NavItem path={path} name={name} icon={icon} nonClickable={nonClickable} />
												{path === '/blog' && <BlogList blogposts={blogPosts} />}
											</React.Fragment>
										))}
									</Suspense>
								</div>
							</nav>
						</LayoutGroup>
					</div>
					<div className='mt-4 grid gap-4'>
						<h3 className='text-lg font-semibold'>Social</h3>
						<div className='grid gap-4'>
							<Link className='text-md inline-flex items-center font-medium' href='https://github.com/yousofalgburi'>
								<Icons.GithubIcon className='mr-2 h-6 w-6' />
								GitHub
							</Link>
							<Link className='text-md inline-flex items-center font-medium' href='https://twitter.com/yousof_dev'>
								<Icons.TwitterIcon className='mr-2 h-6 w-6' />
								Twitter
							</Link>
							<Link className='text-md inline-flex items-center font-medium' href='https://www.linkedin.com/in/yousofalgburi/'>
								<Icons.LinkedinIcon className='mr-2 h-6 w-6' />
								LinkedIn
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
