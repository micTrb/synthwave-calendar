import { useState } from 'react';

function useDateSelector(initialState: Date) {
  
  const [selectedDate, setSelectedDate] = useState(initialState);

  const selectDate = (date: Date) => {
    setSelectedDate(date)
  }

  return [selectedDate, selectDate] as const;
}

export default useDateSelector;


