import type { Invoice, InvoiceListDto, TemplateListDto } from './models/types'
import { randomInvoices, randomTemplates } from './utils'

const invoices: InvoiceListDto[] = randomInvoices(40)
const templates: TemplateListDto[] = randomTemplates()

export async function loadInvoices(page: number, perPage: number): Promise<InvoiceListDto[]> {
  const start = page * perPage

  await new Promise((r) => setTimeout(r, 1000))

  return invoices.slice(start, Math.min(invoices.length, start + perPage))
}

export async function loadTemplates(page: number, perPage: number): Promise<TemplateListDto[]> {
  const start = page * perPage

  await new Promise((r) => setTimeout(r, 500))

  return templates.slice(start, Math.min(templates.length + 1, start + perPage))
}
