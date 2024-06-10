'use client'

import { PageHeader } from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'
import { Plus } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function Home() {
  const [teste, setTeste] = useState([])
  const { data: session } = useSession()

  const userName = session && session.user?.name

  async function handleCallApi() {
    const response = await api.get('/users')

    setTeste(response.data)
  }

  return (
    <div>
      <PageHeader.Root>
        <PageHeader.Title title="Dashboard" />
        <PageHeader.Actions>
          <Button variant="outline" size="icon">
            <Plus className="w-4 h-4" />
          </Button>
        </PageHeader.Actions>
      </PageHeader.Root>
      <p>Seja bem vindo(a), {userName}</p>
      <button onClick={handleCallApi}>Call API</button>
      <p>{JSON.stringify(teste)}</p>
    </div>
  )
}
