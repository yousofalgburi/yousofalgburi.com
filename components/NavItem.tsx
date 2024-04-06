'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function NavItem({ path, name }: { path: string; name: string }) {
    let pathname = usePathname() || '/'
    if (pathname.includes('/blog/')) {
        pathname = '/blog'
    }
    const isActive = path === pathname

    return (
        <Link
            key={path}
            href={path}
            className={clsx('flex align-middle', {
                'text-neutral-500': !isActive,
            })}
        >
            <span className="relative px-2 py-1">
                {name}
                {path === pathname ? (
                    <motion.div
                        className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-neutral-200 dark:bg-neutral-500"
                        layoutId="sidebar"
                        transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                        }}
                    />
                ) : null}
            </span>
        </Link>
    )
}
