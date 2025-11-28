import React, { useEffect, useState, type FormEvent } from "react";
import { getCountries } from "../services/api";

interface HolidayFormProps {
  onSearch: (country: string) => void;
}

const HolidayForm: React.FC<HolidayFormProps> = ({ onSearch }) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  // Fetch countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedCountry) onSearch(selectedCountry);
  };

  return (
    <form id="holiday-form" onSubmit={handleSubmit}>
      <select
        id="country-select"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <button type="submit" id="fetch-holidays">
        Fetch Holidays
      </button>
    </form>
  );
};

export default HolidayForm;
