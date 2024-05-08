import Link from 'next/link'
import { Search } from 'lucide-react'

export function Header() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-10">
      <div className="flex flex-col items-center justify-items-center gap-2">
        <Link href="/" className="text-2xl font-extrabold text-white">
          Consulta Processual
        </Link>
        <p className="text-base text-white">
          Selecione um tribunal para listar os processos ou buscar pelo número
          unificado.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-6 h-5 text-zinc-500" />

          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
            placeholder="Digite o número de processo..."
          />
        </form>
      </div>
    </div>
  )
}
