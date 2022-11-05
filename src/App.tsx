import React, { useState } from 'react'
import Calendar from './components/Calendar';

const App = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="items-center mt-8 sm:w-11/12 w-full mx-auto">
      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  )
}

export default App
