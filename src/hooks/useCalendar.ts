import { useState } from "react";
import {
    startOfMonth,
    endOfMonth,
    differenceInDays } from 'date-fns'

function useCalendar(initialState: Date) {

  const [currentDate, setCurrentDate] = useState(initialState);

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay() - 1;
  const suffixDays = 7 - endDate.getDay();

  return [ currentDate, setCurrentDate, startDate, endDate, numDays, prefixDays, suffixDays ] as const;
}

export default useCalendar;
