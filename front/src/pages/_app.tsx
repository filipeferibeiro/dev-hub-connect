import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@/components/ThemeProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LayoutSelector } from '@/Layouts/LayoutSelector'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LayoutSelector>
          <Component {...pageProps} />
        </LayoutSelector>
      </ThemeProvider>
    </SessionProvider>
  )
}
