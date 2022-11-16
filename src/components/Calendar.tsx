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
import Modal from "./Modal";
import useModalStatus from "../hooks/useModalStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useDateSelector from '../hooks/useDateSelector';

import { useNavigate } from 'react-router-dom';



const Calendar: React.FC<Props> = () => {
 
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDate, selectDate ] = useDateSelector(currentDate);

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

  return (
    <div className="">

      <Header value={currentDate} onChange={setCurrentDate} />

      <div className="mt-2 mx-auto w-11/12">
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
                onClick={() => selectDate(date)}
                className={clsx(`sm:text-3xl text-xl border-black-500 bg-black-500 hover:border-green-500 
                hover:border text-pink-400 flex items-start justify-end cursor-pointer transition-all duration-400`,
                {"bg-black-300 border-green-500 border-4 hover:border-4": compareDates(selectedDate, date)}
                )}
              >
                <p
                  className={clsx("lg:my-2 lg:mr-4 m-auto", {
                    "border-b-8 border-green-500": hasRem, //always applies
                  })}
                >
                  {day}
                </p>
              </Cell>
            );
          })}

          {Array.from({ length: suffixDays }).map((_, index) => {
            return <div key={index} className="" />;
          })}
        </div>
      </div>

      <div className="mt-8 mx-auto w-11/12 flex justify-end">
        <FontAwesomeIcon
          onClick={() => navigate('/add-reminder')}
          className="cursor-pointer hover:bg-pink-200 bg-pink-500 rounded-full sm:p-6 sm:text-3xl p-4 text-white"
          icon={faPlus}
        />
      </div>
    </div>
  );
};

export default Calendar;
