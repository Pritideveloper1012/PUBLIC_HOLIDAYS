import React from "react";
import type { Holiday } from "../type/Holiday";


interface HolidayListProps {
  holidays: Holiday[];
}

const HolidayList: React.FC<HolidayListProps> = ({ holidays }) => {
  return (
    <div id="holiday-list">
      {holidays.map((holiday) => (
        <div key={holiday.Date} className="holiday-card">
          <h3>{holiday["Holiday Name"]}</h3>
          <p>Date: {holiday.Date}</p>
          <p>Type: {holiday.Type}</p>
        </div>
      ))}
    </div>
  );
};

export default HolidayList;
