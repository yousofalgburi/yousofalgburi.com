'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { LayoutGroup } from 'framer-motion'
import { Suspense } from 'react'
import NavItem from './NavItem'
import { ModeToggle } from './ModeToggle'
import { Icons } from './Icons'

const navItems = {
    '/': {
        name: 'Home',
        icon: <Icons.UserIcon className="h-6 w-6" />,
    },
    '/work': {
        name: 'Work',
        icon: <Icons.BriefcaseIcon className="h-6 w-6" />,
    },
    '/blog': {
        name: 'Blog',
        icon: <Icons.PencilIcon className="h-6 w-6" />,
    },
    '/projects': {
        name: 'Projects',
        icon: <Icons.FolderIcon className="h-6 w-6" />,
    },
}

export default function Navbar() {
    return (
        <div className="flex flex-col border-b border-gray-200 dark:border-gray-600 md:border-b-0 md:border-r">
            <div className="flex-1 overflow-auto p-4 md:p-6">
                <div className="grid gap-8">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                            <Image
                                width={1920}
                                height={1280}
                                className="object-cover"
                                src="/yousof_algburi.jpg"
                                alt="Image of yousof algburi smiling."
                            />
                            <AvatarFallback>YA</AvatarFallback>
                        </Avatar>

                        <h2 className="text-xl font-semibold">Yousof Algburi</h2>

                        <ModeToggle />
                    </div>
                    <div className="grid gap-4">
                        <LayoutGroup>
                            <nav
                                className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
                                id="nav"
                            >
                                <div className="flex flex-col space-x-0 pr-10">
                                    <Suspense fallback={null}>
                                        {Object.entries(navItems).map(([path, { name, icon }]) => {
                                            return <NavItem key={path} path={path} name={name} icon={icon} />
                                        })}
                                    </Suspense>
                                </div>
                            </nav>
                        </LayoutGroup>
                    </div>
                    <div className="mt-4 grid gap-4">
                        <h3 className="text-lg font-semibold">Social</h3>
                        <div className="grid gap-4">
                            <Link
                                className="text-md inline-flex items-center font-medium"
                                href="https://github.com/yousofalgburi"
                            >
                                <Icons.GithubIcon className="mr-2 h-6 w-6" />
                                GitHub
                            </Link>
                            <Link
                                className="text-md inline-flex items-center font-medium"
                                href="https://twitter.com/yousof_dev"
                            >
                                <Icons.TwitterIcon className="mr-2 h-6 w-6" />
                                Twitter
                            </Link>
                            <Link
                                className="text-md inline-flex items-center font-medium"
                                href="https://www.linkedin.com/in/yousofalgburi/"
                            >
                                <Icons.LinkedinIcon className="mr-2 h-6 w-6" />
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
