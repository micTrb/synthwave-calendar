import React, { Fragment, useState } from "react";
import Cell from "./Cell";
import clsx from "clsx";

import { weekdays } from "../configs/Weekdays";
import { Header } from "./Header";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import * as CalendarActions from "../redux/CalendarSlice";

import { useNavigate } from "react-router-dom";
import RemindersGrid from "./RemindersGrid";
import useCalendar from "../hooks/useCalendar";
import { hasReminders } from "../utils/hasReminders";
import useMediaQuery from "../hooks/useMediaQuery";
import { isEqual, parseISO, startOfDay } from "date-fns";
import { compareDates } from '../utils/compareDates';

const Calendar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const lg = useMediaQuery("(min-width: 769px)");
  const md = useMediaQuery("(max-width: 768px)");
  const sm = useMediaQuery("(max-width: 320px)");

  const [
    currentDate,
    setCurrentDate,
    startDate,
    endDate,
    numDays,
    prefixDays,
    suffixDays,
  ] = useCalendar(new Date());

  const reminders = useSelector(
    (state: RootState) => state.reminders.reminders
  );

  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );

  const handleSelectDate: (date: Date) => void = (date: Date) => {
    dispatch(CalendarActions.selectDate(date));
  };

  return (
    <div className="mb-12">
      <Header value={currentDate} onChange={setCurrentDate} />

      <div className="my-12 mx-auto w-full">
        <button className="bg-green-500" onClick={() => console.log(selectedDate)}>CLICK</button>
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
            const date = startOfDay(new Date(year, month, day));

            let hasRem = hasReminders(reminders, date);

            return (
              <Cell
                key={day}
                hasReminder={true}
                onClick={() => handleSelectDate(date)}
                className={clsx(
                  `items-center justify-center border-black-500 bg-black-300/40 hover:border-green-500
                hover:border text-pink-400 cursor-pointer transition-all duration-400`,
                  {
                    "bg-black-300 border-green-500 border-2 hover:border-2":
                      compareDates(selectedDate, date),
                  },
                  {
                    "overflow-auto": hasRem,
                    "bg-pink-500 text-green-700": hasRem && (md || sm), //always applies
                  }
                )}
              >
                <div
                  className={clsx(
                    `w-full flex flex-col lg:items-end lg:justify-center m-auto`
                  )}
                >
                  <p className="lg:my-1 lg:mr-2 lg:text-md text-sm">{day}</p>

                  {hasRem ? (
                    <div
                      className={clsx(
                        `grid lg:grid-cols-6 md:grid-cols-5 grid-cols-2 gap-1 justify-end mx-auto`
                      )}
                    >
                      {lg ? (
                        <RemindersGrid reminders={reminders} date={date} />
                      ) : null}
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
