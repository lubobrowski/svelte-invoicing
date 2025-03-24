export type UserProfile = {
  company: Company
}

export type Company = {
  id?: number
  taxIdNumber: string
  fullName: string
  streetAddress: string
  postalCode: string
  city: string
}

export type VatRate = {
  id?: number
  description: string
  rate: number
}

export type Item = {
  id?: number
  description: string
  quantity: number
  unitPrice: number
  vatRate: VatRate
}

export type Invoice = {
  id?: number
  number: string
  issueDate: string
  transactionDate: string
  dueDate: string
  supplier: Company
  customer: Company
  bankAccount: string
  items: Item[]
}

export type Template = {
  id?: number
  name: string
  customer: Company
  itemDescriptionTemplate: string
  hourlyRate: number
  bankAccount: string
  vatRate: VatRate
}
