import { Logo } from '@/components/Logo'
import { ReactNode } from 'react'

interface LoginLayoutProps {
  children: ReactNode
}

export function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-4 border-[1px] rounded-md w-full max-w-sm gap-6">
        <header className="flex justify-between gap-4 items-center">
          <h1 className="text-2xl font-bold">Login</h1>
          <Logo />
        </header>
        <main className="">{children}</main>
      </div>
    </div>
  )
}
