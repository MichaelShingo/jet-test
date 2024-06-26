import type { Metadata } from 'next';
import './globals.css';
import { Ubuntu } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full w-full">
			<body
				className={
					ubuntu.className +
					'bg-none h-full w-full bg-transparent flex items-start justify-center'
				}
			>
				{children}
			</body>
		</html>
	);
}
