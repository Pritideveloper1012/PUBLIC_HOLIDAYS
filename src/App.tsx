import React, { useEffect, useState } from 'react'
import HolidayList from './components/HolidayList'
import HolidayForm from './components/HolidayForm'
import { fetchCountries, fetchHolidays } from './api/holidayApi'
import type { Holiday } from './types/Holiday'
import './App.css'

const App: React.FC = () => {
const [countries, setCountries] = useState<string[]>([])
const [selectedCountry, setSelectedCountry] = useState<string>('')
const [holidays, setHolidays] = useState<Holiday[]>([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')


useEffect(() => {
const loadCountries = async () => {
try {
const data = await fetchCountries()
setCountries(data)
} catch (err) {
console.error(err)
}
}
void loadCountries()
}, [])


const handleSearch = async () => {
if (!selectedCountry) return
setLoading(true)
setError('')
try {
const data = await fetchHolidays(selectedCountry)
setHolidays(data)
} catch (err) {
console.error(err)
setError('Failed to fetch holidays')
setHolidays([])
} finally {
setLoading(false)
}
}


return (
<div className="app-container">
<div className="header">
<h1>Public Holidays Tracker</h1>
</div>


<HolidayForm
countries={countries}
selectedCountry={selectedCountry}
setSelectedCountry={setSelectedCountry}
onSearch={handleSearch}
loading={loading}
/>


{error && <div className="error">{error}</div>}
{loading && <div className="loading">Loading holidays...</div>}


<HolidayList holidays={holidays} />
</div>
)
}


export default App