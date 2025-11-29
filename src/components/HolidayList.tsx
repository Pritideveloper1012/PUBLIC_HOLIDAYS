import React from 'react'

import HolidayCard from './HolidayCard'
import type { Holiday } from '../types/Holiday'


interface Props { holidays: Holiday[] }


const HolidayList: React.FC<Props> = ({ holidays }) => {
return (
<div id="holiday-list">
{holidays.map((h) => (
<HolidayCard key={`${h.Date}-${h['Holiday Name']}`} holiday={h} />
))}
</div>
)
}


export default HolidayList