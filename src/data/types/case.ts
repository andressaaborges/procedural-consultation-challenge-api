interface Parties {
  plaintiff: string
  defendant: string
}

interface Movements {
  date: string
  description: string
}

export interface Case {
  case_number: string
  parties: Parties[]
  court_origin: string
  start_date: string
  movements: Movements[]
  case_details: string
}
