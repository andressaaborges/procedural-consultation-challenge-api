import data from '../../data.json'

export async function GET(
  _: Request,
  { params }: { params: { court: string } },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const caseByTribunal = data.cases.filter(
    (caseItem) => caseItem.court === params.court,
  )

  if (caseByTribunal.length === 0) {
    return Response.json(
      { message: 'Nenhum processo encontrado para o tribunal selecionado.' },
      { status: 404 },
    )
  }

  return Response.json(caseByTribunal)
}
