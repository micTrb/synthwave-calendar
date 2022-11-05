import React, { useState } from 'react'
import Calendar from './components/Calendar';

const App = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-4xl my-12">Calendar Scheduler</h1>
      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  )
}

export default App
