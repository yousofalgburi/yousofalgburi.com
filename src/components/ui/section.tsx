import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...props }: BadgeProps) {
	return <section className={cn('flex min-h-0 flex-col gap-y-3', className)} {...props} />
}
