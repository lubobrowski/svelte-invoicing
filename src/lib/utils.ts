import type { Company, Invoice } from './models/types'

const supplier: Company = {
  taxIdNumber: '5553002118',
  fullName: 'Walentyna Boćko-Parzyńska',
  streetAddress: 'ul. Księcia Świętopełka I 38/22',
  postalCode: '62-495',
  city: 'Poznań'
}

const customers: Company[] = [
  {
    taxIdNumber: '4326008081',
    fullName: 'Uniwersytecki Szpital Kliniczny w Olsztynie',
    streetAddress: 'ul. Warszawska 30',
    postalCode: '10-082',
    city: 'Olsztyn'
  },
  {
    taxIdNumber: '6443125780',
    fullName:
      'Samodzielny Publiczny Zakład Opieki Zdrowotnej Centralny Szpital Kliniczny Uniwersytetu Medycznego w Łodzi',
    streetAddress: 'ul. Pomorska 251',
    postalCode: '92-213',
    city: 'Łódź'
  },
  {
    taxIdNumber: '4326008081',
    fullName:
      'Samodzielny Publiczny Szpital Kliniczny im. prof. Witolda Orłowskiego Centrum Medycznego Kształcenia Podyplomowego w Warszawie',
    streetAddress: 'ul. Czerniakowska 231',
    postalCode: '00-416',
    city: 'Warszawa'
  }
]

const itemDescriptions: string[] = [
  'Usługi pielęgniarskie',
  'Usługi pielęgniarskie za marzec 2025',
  'Usługi pielęgniarskie w zakresie pielęgniarstwa anestezjologicznego i intensywnej terapii na podstawie umowy nr 119/2024'
]

const bankAccounts: string[] = [
  '70 1240 3930 0286 6096 6758 5303',
  '25 1020 2212 4268 7386 7288 0264',
  '55 9096 0004 3390 5347 3882 4162'
]

function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function addDays(date: Date) {}

function sample<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

function padNumber(number: number, size: number): string {
  let s = number + ''
  while (s.length < size) s = '0' + s
  return s
}

function formatDate(date: Date) {
  return `${date.getFullYear()}-${padNumber(date.getMonth() + 1, 2)}-${padNumber(date.getDate(), 2)}`
}

export function randomInvoices(count: number): Invoice[] {
  let results: Invoice[] = []

  const startDate = new Date('2025-01-01')
  const endDate = new Date(Date.now())
  let number = Math.round(Math.random() * 100)

  for (let i = 0; i < count; i++) {
    let date = randomDate(startDate, endDate)
    let dateString = formatDate(date)
    results.push({
      number: `${number++}/2025`,
      issueDate: dateString,
      transactionDate: dateString,
      dueDate: dateString,
      supplier: supplier,
      customer: sample(customers),
      bankAccount: sample(bankAccounts),
      items: [
        {
          description: sample(itemDescriptions),
          quantity: 1,
          unitPrice: 2000 + Math.round(Math.random() * 15000) / 2,
          vatRate: { description: 'ZW', rate: 0 }
        }
      ]
    })
  }
  return results
}
