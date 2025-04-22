import type { Metadata } from 'next'
import { Lacquer } from 'next/font/google'
import { ApolloWrapper } from './_components/apolloProvider'
import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './_styles/globals.css'
import './layout.scss'

const lacquerFont = Lacquer({
  variable: '--font-lacquer',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Fight Club posters',
  description: 'A list of Fight Club posters with basic filtering, served via SSG',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lacquerFont.variable} antialiased`}>
        <ApolloWrapper>
          <Image
            src={'/portrait.webp'}
            alt="image"
            width={852}
            height={938}
            className="portrait-image"
            priority
            loading="eager"
          />
          <div className="page-container">
            <div className="page-inner">
              {children}
              <Analytics />
              <SpeedInsights />
            </div>
          </div>
        </ApolloWrapper>
      </body>
    </html>
  )
}
