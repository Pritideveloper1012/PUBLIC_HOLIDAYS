import React, { useState } from "react";
import HolidayForm from "./components/HolidayForm";
import HolidayList from "./components/HolidayList";
import './App.css'

import { getHolidays } from "./services/api";
import type { Holiday } from "./type/Holiday";

const App: React.FC = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  const handleSearch = async (country: string) => {
    const data = await getHolidays(country);
    setHolidays(data);
  };

  return (
    <div className="App">
      <h1>Public Holidays Tracker</h1>
      <HolidayForm onSearch={handleSearch} />
      <HolidayList holidays={holidays} />
    </div>
  );
};

export default App;
