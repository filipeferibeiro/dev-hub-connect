'use client'

import { PageHeader } from '@/components/PageHeader'
import { api } from '@/lib/api'
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
      <PageHeader title="Dashboard" />
      <p>Seja bem vindo(a), {userName}</p>
      <button onClick={handleCallApi}>Call API</button>
      <p>{JSON.stringify(teste)}</p>
    </div>
  )
}
