import type { FormEvent } from "react"



interface Props {
countries: string[]
selectedCountry: string
setSelectedCountry: (c: string) => void
onSearch: () => void
loading?: boolean
}


const HolidayForm: React.FC<Props> = ({ countries, selectedCountry, setSelectedCountry, onSearch, loading }) => {
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault() // IMPORTANT: prevent page refresh
onSearch()
}


return (
<form id="holiday-form" onSubmit={handleSubmit}>
<div className="form-row">
<select id="country-select" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
<option value="">Select a country</option>
{countries.map((c) => (
<option key={c} value={c}>
{c}
</option>
))}
</select>


<button id="fetch-holidays" type="submit" disabled={!selectedCountry || loading}>
{loading ? 'Loading...' : 'Fetch Holidays'}
</button>
</div>
</form>
)
}


export default HolidayForm