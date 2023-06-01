import { ApplicationProvider } from '@/components/client';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './header';
import { Providers } from './redux/provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Application Tracker',
  description: 'This is an application tracker app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ApplicationProvider>
            <>
              <Header/>
              {children}
            </>
          </ApplicationProvider>
        </Providers>
      </body>
    </html>
  )
}
