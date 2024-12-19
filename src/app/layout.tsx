import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import {MSWProvider} from "@/app/_component/MSWcomponent";

if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.NODE_ENV !== 'production') {
  const {server} = require('@/mocks/http')
  server.listen();
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'X.com',
  description: '',
}

type Props = {
  children: React.ReactNode,
};
export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MSWProvider>
        {children}
      </MSWProvider>
      </body>
    </html>
  )
}
