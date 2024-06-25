export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className='mx-4 mb-40 mt-8 flex max-w-3xl w-full flex-col md:flex-row lg:mx-auto'>
			<div className='mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0'>{children}</div>
		</div>
	)
}
