import axios from "axios";
import type { Holiday } from "../type/Holiday";


export const getCountries = async (): Promise<string[]> => {
  const response = await axios.get("https://holiday-tracker-backend.labs.crio.do/countries");
  return response.data; // assuming it returns an array of country names
};

export const getHolidays = async (country: string): Promise<Holiday[]> => {
  const response = await axios.get(`https://holiday-tracker-backend.labs.crio.do/holidays?country=${country}`);
  return response.data;
};
