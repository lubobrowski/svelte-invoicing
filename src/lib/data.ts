import type { InvoiceListDto } from "./models/types";
import { randomInvoices } from "./utils";

const invoices: InvoiceListDto[] = randomInvoices(40)

export async function loadInvoices(page: number, perPage: number) : Promise<InvoiceListDto[]> {
    const pageCount = Math.ceil(page / perPage)
    const start = page * perPage

    await new Promise(r => setTimeout(r, 1000));

    return invoices.slice(start, Math.min(invoices.length, start + perPage))
}
