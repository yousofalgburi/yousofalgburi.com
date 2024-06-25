import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function NavItem({ path, name, icon, nonClickable }: { path: string; name: string; icon: React.ReactNode; nonClickable?: boolean }) {
	const pathname = usePathname()
	const isActive = path === pathname

	const content = (
		<>
			{icon}
			<span className='ml-2'>{name}</span>
		</>
	)

	return (
		<div className='relative'>
			{nonClickable ? (
				<div
					className={cn(
						'flex items-center py-3 text-sm font-medium text-neutral-500',
						isActive && 'text-neutral-800 dark:text-neutral-200',
					)}
				>
					{content}
				</div>
			) : (
				<Link
					href={path}
					className={cn(
						'flex items-center py-3 text-sm font-medium text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200',
						isActive && 'text-neutral-800 dark:text-neutral-200',
					)}
				>
					{content}
				</Link>
			)}
			{isActive && (
				<motion.div
					className='absolute inset-0 z-[-1] rounded-md bg-neutral-100 dark:bg-neutral-800'
					layoutId='sidebar'
					transition={{
						type: 'spring',
						stiffness: 350,
						damping: 30,
					}}
				/>
			)}
		</div>
	)
}
