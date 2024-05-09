'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/process/${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-6 h-5 text-zinc-500" />

      <input
        name="q"
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        placeholder="Digite o número de processo..."
        required
      />

      <button type="submit">Buscar</button>
    </form>
  )
}
