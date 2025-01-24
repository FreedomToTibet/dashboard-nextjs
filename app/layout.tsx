import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
	title: 'Acme Dashboard',
	description: 'Welcome to Acme Dashboard.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
				{children}
				<SpeedInsights />
			</body>
    </html>
  );
}
