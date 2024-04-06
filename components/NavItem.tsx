'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function NavItem({ path, name, icon }: { path: string; name: string; icon?: JSX.Element }) {
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
                <div className="flex gap-2">
                    {icon}
                    {name}
                </div>
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
