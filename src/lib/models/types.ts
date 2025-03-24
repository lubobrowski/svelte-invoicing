export type Company = {
	id: number
	taxIdNumber: string
	fullName: string
	streetAddress: string
	postalCode: string
	city: string
}

export type VatRate = {
	id: number
	description: string
	rate: number
}

export type Item = {
	id: number
	description: string
	quantity: number
	unitPrice: number
}
