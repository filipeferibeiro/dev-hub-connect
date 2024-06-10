import { ComboBox } from '@/components/ComboBox'
import { LinkCard } from '@/components/LinkCard'
import { PageHeader } from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { api } from '@/lib/api'
import { Plus } from 'lucide-react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useState } from 'react'

interface Link {
  id: string
  url: string
  title: string
}

export default function Links({
  links,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [value, setValue] = useState<string>('')

  const frameworks = [
    {
      value: 'next.js',
      label: 'Next.js',
    },
    {
      value: 'sveltekit',
      label: 'SvelteKit',
    },
    {
      value: 'nuxt.js',
      label: 'Nuxt.js',
    },
    {
      value: 'remix',
      label: 'Remix',
    },
    {
      value: 'astro',
      label: 'Astro',
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <PageHeader.Root>
        <PageHeader.Title title="Links" />
        <PageHeader.Actions>
          <Input className="w-52" placeholder="Search..." />
          <ComboBox
            placeholder="Filter by category..."
            items={frameworks}
            value={value}
            setValue={setValue}
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Plus className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add new link</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </PageHeader.Actions>
      </PageHeader.Root>
      <div className="grid gap-4 grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => {
          return <LinkCard key={link.id} title={link.title} url={link.url} />
        })}
      </div>
    </div>
  )
}

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const linksResponse = await api.get('/links')
  const links: Link[] = linksResponse.data

  // Pass data to the page via props
  return { props: { links: links || [] } }
}) satisfies GetServerSideProps<{ links: Link[] }>
