import axios from 'axios'
import type { Holiday } from '../types/Holiday'



export interface CountryItem {
name: string
code: string
}


// Fetches array of country strings or objects depending on API
export const fetchCountries = async (): Promise<string[]> => {
const res = await axios.get('https://holiday-tracker-backend.labs.crio.do/countries')
// API returns an array of country names in lowercase or objects. Normalize to string array.
if (Array.isArray(res.data)) return res.data as string[]
// try fallback if API wraps
if (res.data && Array.isArray(res.data.countries)) return res.data.countries
return []
}


export const fetchHolidays = async (country: string): Promise<Holiday[]> => {
const res = await axios.get(
`https://holiday-tracker-backend.labs.crio.do/holidays?country=${country}`
)
// API returns array directly or wrapped. Normalize.
if (Array.isArray(res.data)) return res.data as Holiday[]
if (res.data && Array.isArray(res.data.holidays)) return res.data.holidays as Holiday[]
return []
}