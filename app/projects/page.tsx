import Link from 'next/link'

export const metadata = {
	title: 'Projects',
	description: "Check out projects I have built or I'm currently working on.",
}

export default function BlogPage() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-8 tracking-tighter'>Check out my projects</h1>
			<h3 className='text-lg tracking-tighter'>
				<Link href='https://games-link.vercel.app/'>GamesLink</Link>
			</h3>

			<h3 className='text-lg tracking-tighter'>
				<Link href='https://github.com/yousofalgburi/DropAPI'>DropAPI</Link>
			</h3>

			<h2 className='text-xl my-8 tracking-tighter'>Older projects</h2>
			<h3 className='text-lg tracking-tighter'>
				<Link href='https://github.com/yousofalgburi/Bug-Tracker-PERN-Stack'>Bugs Tracker PERN</Link>
			</h3>
			<h3 className='text-lg tracking-tighter'>
				<Link href='https://github.com/yousofalgburi/destination-social-app'>Destination Social MERN</Link>
			</h3>
		</section>
	)
}
