import Link from 'next/link'
import { SearchForm } from './search-form'

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
        <SearchForm />
      </div>
    </div>
  )
}
