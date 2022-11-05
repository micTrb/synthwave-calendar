

import React from 'react'
import Cell from './Cell';

const Calendar = () => {
  return (
    <div className="border w-1/2">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell>{"<<"}</Cell>
        <Cell>{"<"}</Cell>
        <Cell className="col-span-3">{"August 2021"}</Cell>
        <Cell>{">>"}</Cell>
        <Cell>{">"}</Cell>
      </div>
    </div>
  )
}

export default Calendar
