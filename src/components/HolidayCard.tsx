import React from 'react'
import type { Holiday } from '../types/Holiday'



interface Props { holiday: Holiday }


const HolidayCard: React.FC<Props> = ({ holiday }) => {
return (
<div className="holiday-card">
<h3>{holiday['Holiday Name']}</h3>
<p><strong>Date:</strong> {holiday.Date}</p>
<p><strong>Type:</strong> {holiday.Type}</p>
</div>
)
}


export default HolidayCard