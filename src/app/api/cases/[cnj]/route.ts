import data from '../data.json'
import { z } from 'zod'

export async function GET(_: Request, { params }: { params: { cnj: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const cnjRegex = /^\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4}$/
  const cnj = z
    .string()
    .refine((value) => cnjRegex.test(value), {
      message: 'CNJ deve seguir o formato 0000000-00.0000.0.00.0000',
    })
    .parse(params.cnj)

  const caseItem = data.cases.find((caseItem) => caseItem.cnj === cnj)
  if (!caseItem) {
    return Response.json(
      { message: 'Processo não encontrado!' },
      { status: 400 },
    )
  }

  return Response.json(caseItem)
}