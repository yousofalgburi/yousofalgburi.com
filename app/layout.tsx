import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import MainContentWrapper from '@/components/MainContentWrapper'

export const metadata: Metadata = {
    metadataBase: new URL('https://yousofalgburi.com'),
    title: {
        default: 'Yousof Algburi',
        template: '%s | Yousof Algburi',
    },
    description: 'Developer and a creative.',
    openGraph: {
        title: 'Yousof Algburi',
        description: 'Developer and a creative.',
        url: 'https://yousofalgburi.com',
        siteName: 'Yousof Algburi',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: 'Yousof Algburi',
        card: 'summary_large_image',
    },
    verification: {
        google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
        yandex: '14d2e73487fa6c71',
    },
}

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <main className="grid min-h-screen w-full md:grid-cols-[300px_1fr]">
                        <Navbar />

                        <MainContentWrapper>{children}</MainContentWrapper>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}
