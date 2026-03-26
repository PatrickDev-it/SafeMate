import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import PwaInstallPrompt from '../components/PwaInstallPrompt';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const playfair = Playfair_Display({
	variable: '--font-playfair',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'SafeMate',
	description: 'SafeMate - rete di sicurezza e supporto femminile',
	applicationName: 'SafeMate',
	manifest: '/manifest.webmanifest',
	appleWebApp: {
		capable: true,
		title: 'SafeMate',
		statusBarStyle: 'default',
	},
	icons: {
		apple: '/icons/icon-192.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="it">
			<body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
				<header className="sticky top-0 z-50 w-full border-b border-white/45 bg-white/45 backdrop-blur-xl supports-[backdrop-filter]:bg-white/28">
					<nav className="relative mx-auto max-w-7xl px-5 py-4">
						<div className="grid md:hidden grid-cols-3 items-center text-sm font-medium text-neutral-700">
							<div className="justify-self-start">
								<Link href="/come-funziona" className="apple-nav-link">
									Mission
								</Link>
							</div>
							<div className="justify-self-center">
								<Link href="/" className="apple-logo-pill">
									SafeMate
								</Link>
							</div>
							<div className="justify-self-end">
								<Link href="/ecosistema" className="apple-nav-link">
									How works
								</Link>
							</div>
						</div>

						<div className="hidden md:flex items-center justify-between">
							<div className="flex items-center gap-1 text-sm font-medium text-neutral-700">
								<Link href="/come-funziona" className="apple-nav-link">
									Come funziona
								</Link>
								<Link href="/ecosistema" className="apple-nav-link">
									Ecosistema
								</Link>
								<Link href="/community" className="apple-nav-link">
									Community
								</Link>
							</div>
							<Link href="/" className="apple-logo-pill">
								SafeMate
							</Link>
							<div className="flex items-center gap-1 text-sm font-medium text-neutral-700">
								<Link href="/dashboard" className="apple-nav-link">
									Dashboard
								</Link>
								<Link href="/magazine" className="apple-nav-link">
									Magazine
								</Link>
							</div>
						</div>
					</nav>
				</header>
				{children}
				<PwaInstallPrompt />
				<footer className="mt-16 border-t border-black/5">
					<div className="w-fit mx-auto max-w-7xl px-5 py-8 text-sm text-neutral-500">© {new Date().getFullYear()} SafeMate</div>
				</footer>
			</body>
		</html>
	);
}
