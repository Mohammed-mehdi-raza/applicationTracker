import './globals.css'
import { Inter } from 'next/font/google';
import Header from './header';
import { ContextProvider } from '@/components/client';

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
        <ContextProvider>
          <>
            <Header/>
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  )
}
