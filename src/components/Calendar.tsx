import React, { Fragment, useState } from "react";
import Cell from "./Cell";
import clsx from "clsx";

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
import { RootState } from "../redux/store";
import { compareDates } from "../utils/compareDates";
import { Reminder } from "../redux/ReminderSlice";
import { useSelector } from "react-redux";
import { Tooltip, Button } from "@material-tailwind/react";
import useDateSelector from "../hooks/useDateSelector";

import { useNavigate } from "react-router-dom";

const Calendar: React.FC = () => {
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDate, selectDate] = useDateSelector(currentDate);

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay() - 1;
  const suffixDays = 7 - endDate.getDay();

  const reminders = useSelector(
    (state: RootState) => state.reminders.reminders
  );

  const hasReminder = (date: Date) => {
    let hasReminder = reminders.some((reminder: Reminder) =>
      compareDates(reminder.date, date)
    );
    return hasReminder;
  };

  const renderReminders = (reminders: Reminder[], date: Date) => {

    let filteredReminders = reminders.filter((r) => compareDates(r.date, date));

    let renderedRem = filteredReminders.map((reminder: Reminder) => (
      <Tooltip className="bg-black-100 p-4" key={reminder.id} content={reminder.content}>
        <p onClick={() => console.log(reminder)}
        className={clsx(`text-xs text-center text-black-500 
        ${reminder.priority} p-2 rounded-md`)}
        />
      </Tooltip>
    ));
    return renderedRem;
  };

  return (
    <div className="mb-12">
      <Header value={currentDate} onChange={setCurrentDate} />

      <div className="my-12 mx-auto w-11/12">
        <div
          className="grid grid-cols-7 sm:gap-2 gap-0 border-blue-400 
        border-t border-b border-green-400 items-center justify-center text-center"
        >
          {weekdays.map((day, index) => (
            <div
              key={index}
              className="h-12 flex items-start justify-end cursor-pointer"
            >
              <p className="m-auto sm:text-xl text-md text-yellow-500 uppercase">
                {day}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 gap-2 grid grid-cols-7 items-center justify-center text-center">
          {Array.from({ length: prefixDays }).map((_, index) => {
            return <div className="m-2" key={index} />;
          })}

          {Array.from({ length: numDays }).map((_, index) => {
            const day = index + 1;
            const year = startDate.getFullYear();
            const month = startDate.getMonth();
            const date = new Date(year, month, day);
            let hasRem = hasReminder(date);

            return (
              <Cell
                key={day}
                hasReminder={hasRem}
                date={date}
                onClick={() => navigate('/add-reminder')}
                className={clsx(
                  `items-center justify-center border-black-500 bg-black-300/40 hover:border-green-500 
                hover:border text-pink-400 cursor-pointer transition-all duration-400`,
                  {
                    "bg-black-300 border-green-500 border-4 hover:border-4":
                      compareDates(selectedDate, date),
                  },
                  {
                    "bg-black-500 overflow-auto": hasRem, //always applies
                  }
                )}
              >
                <div
                  className={clsx(
                    `flex flex-col sm:items-end sm:justify-center m-auto`
                  )}
                >
                  <p className="sticky lg:my-1 lg:mr-2 lg:text-md md:text-sm text-xs">
                    {day}
                  </p>

                  {hasRem ? (
                    <div
                      className={clsx(
                        `grid grid-cols-6 gap-1 justify-end m-auto`
                      )}
                    >
                      {renderReminders(reminders, date)}
                    </div>
                  ) : null}
                </div>
              </Cell>
            );
          })}

          {Array.from({ length: suffixDays }).map((_, index) => {
            return <div key={index} className="" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
