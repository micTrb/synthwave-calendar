import React from "react";
import Cell from "./Cell";

import { weekdays } from "../configs/Weekdays";
import {
  startOfMonth,
  endOfMonth,
  differenceInDays,
  sub,
  format,
  add,
} from "date-fns";
import { Header } from "./Header";

interface Props {
  value?: Date;
  onChange?: (value: Date) => void;
}

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay() - 1;
  const suffixDays = 7 - endDate.getDay();

  const prevMonth = () => onChange && onChange(sub(value, { months: 1 }));
  const addMonth = () => onChange && onChange(add(value, { months: 1 }));

  const prevYear = () => onChange && onChange(sub(value, { years: 1 }));
  const addYear = () => onChange && onChange(add(value, { years: 1 }));

  return (
    <div className="">
      <Header value={value} onChange={onChange} />

      <div className="mt-2 mx-auto w-full border-t border-l">
        <div className="grid grid-cols-7 items-center justify-center text-center">
          {weekdays.map((day, index) => (
            <Cell key={index} className="text-sm font-semibold uppercase">
              {day}
            </Cell>
          ))}

          {Array.from({ length: prefixDays }).map((_, index) => {
            return <Cell className="" key={index} />;
          })}

          {Array.from({ length: numDays }).map((_, index) => {
            const date = index + 1;
            return <Cell key={date} className="cursor-pointer text-3xl hover:bg-blue-200">{date}</Cell>;
          })}

          {Array.from({ length: suffixDays }).map((_, index) => {
            return <Cell key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
