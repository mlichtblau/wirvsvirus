export interface Patient {
  id?: number
  zip_code?: string
  age?: number
  living_situation?: string
  workplace?: string
  flu_vaccinated?: boolean
  symptoms_since?: string
  anamnestic_items?: AnamnesticItem[]
}

interface AnamnesticItem {
  criterion: CriterionNames
  answer?: 'yes' | 'no' | 'unsure'
  question?: string
}

export type CriterionNames = 'smoking' | 'pregnancy' | 'chronic lung disease'
