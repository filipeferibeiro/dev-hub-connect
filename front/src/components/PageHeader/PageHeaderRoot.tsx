import { ReactNode } from 'react'

interface PageHeaderRootProps {
  children: ReactNode
}

export function PageHeaderRoot({ children }: PageHeaderRootProps) {
  return (
    <div className="flex justify-between items-center border-[1px] gap-3 p-2 rounded-sm">
      {children}
    </div>
  )
}
