import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { DefaultLayout } from './DefaultLayout'
import { LoginLayout } from './LoginLayout'

interface LayoutSelectorProps {
  children: ReactNode
}

export function LayoutSelector({ children }: LayoutSelectorProps) {
  const router = useRouter()

  if (router.pathname.includes('/login')) {
    return <LoginLayout>{children}</LoginLayout>
  }

  return <DefaultLayout>{children}</DefaultLayout>
}
