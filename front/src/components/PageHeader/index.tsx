import { ChevronLeft, Plus } from 'lucide-react'
import { Button } from '../ui/button'

interface PageHeaderProps {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center border-[1px] gap-3 p-2 rounded-sm">
      <Button variant="outline" size="icon">
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <h1 className="grow text-2xl font-medium">{title}</h1>
      <Button variant="outline" size="icon">
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  )
}
