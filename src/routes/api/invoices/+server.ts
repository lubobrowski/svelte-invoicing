import type { Company, Invoice } from '$lib/models/types'
import { json, type RequestHandler } from '@sveltejs/kit'

const ownerCompany: Company = {
  taxIdNumber: '5553002118',
  fullName: 'Walentyna Boćko-Parzyńska',
  streetAddress: 'Księcia Świętopełka I 38/22',
  postalCode: '62-495',
  city: 'Poznań'
}

function RandomCustomer(): Company {
  const customers: Company[] = [
    {
      taxIdNumber: '5553002118',
      fullName: 'Walentyna Boćko-Parzyńska',
      streetAddress: 'Księcia Świętopełka I 38/22',
      postalCode: '62-495',
      city: 'Poznań'
    },
    {
      taxIdNumber: '5553002118',
      fullName: 'Walentyna Boćko-Parzyńska',
      streetAddress: 'Księcia Świętopełka I 38/22',
      postalCode: '62-495',
      city: 'Poznań'
    }
  ]

  return customers[Math.floor(Math.random() * customers.length)]
}

export const GET: RequestHandler = async (event) => {
  const invoices: Invoice[] = [{}]

  return json(invoices)
}
