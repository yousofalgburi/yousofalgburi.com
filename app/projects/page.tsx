import Link from 'next/link'

export const metadata = {
	title: 'Projects',
	description: "Check out projects I have built or I'm currently working on.",
}

export default function Page() {
	return (
		<section>
			<h1 className='mb-8 text-2xl font-medium tracking-tighter'>Check out my projects</h1>
			<h3 className='text-lg tracking-tighter'>
				<Link href='https://gameslink.app'>GamesLink</Link>
			</h3>

			<h3 className='text-lg tracking-tighter'>
				<Link href='https://github.com/yousofalgburi/DropAPI'>DropAPI</Link>
			</h3>

			<h2 className='my-8 text-xl tracking-tighter'>Older projects</h2>
			<h3 className='text-lg tracking-tighter'>
				<Link href='https://github.com/yousofalgburi/Bug-Tracker-PERN-Stack'>Bugs Tracker PERN</Link>
			</h3>
			<h3 className='text-lg tracking-tighter'>
				<Link href='https://github.com/yousofalgburi/destination-social-app'>Destination Social MERN</Link>
			</h3>
		</section>
	)
}
