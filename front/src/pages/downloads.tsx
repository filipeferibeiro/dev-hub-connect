import { PageHeader } from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function Downloads() {
  return (
    <div>
      <PageHeader.Root>
        <PageHeader.Title title="Downloads" />
        <PageHeader.Actions>
          <Button variant="outline" size="icon">
            <Plus className="w-4 h-4" />
          </Button>
        </PageHeader.Actions>
      </PageHeader.Root>
    </div>
  )
}
