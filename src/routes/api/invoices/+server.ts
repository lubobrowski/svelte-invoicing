import type { Invoice } from '$lib/models/types'
import { randomInvoices } from '$lib/utils'
import { json, type RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async (event) => {
  const invoices: Invoice[] = randomInvoices(10)

  return json(invoices)
}
