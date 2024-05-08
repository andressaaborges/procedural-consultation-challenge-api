interface Parties {
  plaintiff: string
  defendant: string
}

interface Movements {
  date: string
  description: string
}

export interface Case {
  cnj: string
  parties: Parties[]
  court: string
  start: string
  movements: Movements[]
  details: string
}
