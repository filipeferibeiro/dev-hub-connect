import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { DefaultLayout } from './DefaultLayout'

interface LayoutSelectorProps {
  children: ReactNode
}

export function LayoutSelector({ children }: LayoutSelectorProps) {
  const router = useRouter()

  if (router.pathname.includes('/login')) {
    return <div>{children}</div>
  }

  return <DefaultLayout>{children}</DefaultLayout>
}
