import { ReactNode } from 'react'

interface PageHeaderActionsProps {
  children: ReactNode
}

export function PageHeaderActions({ children }: PageHeaderActionsProps) {
  return <div className="flex gap-2 items-center w-fit">{children}</div>
}
