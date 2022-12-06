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
import { compareDates } from "../utils/compareDates";
import { useEffect } from "react";
import { generateHours, generateMinutes } from "../utils/generateTimes";

import Plus from "../svg/plus.svg";

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

  useEffect(() => {
  }, []);


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
    <div className="my-24 w-full">
      <Header value={currentDate} onChange={setCurrentDate} />

      <div className="my-2 mx-auto w-11/12">
        <div
          className="grid grid-cols-7 sm:gap-2 gap-0 my-4
        border-t border-b border-green-400 items-center justify-center text-center"
        >
          {weekdays.map((day, index) => (
            <div
              key={index}
              className="h-12 flex lg:items-start lg:justify-end cursor-pointer"
            >
              <p className="m-auto sm:text-xl text-md text-yellow-500 uppercase">
                {day}
              </p>
            </div>
          ))}
        </div>

        <div className="my-8 gap-2 grid grid-cols-7 items-center justify-center text-center">
          {Array.from({ length: prefixDays }).map((_, index) => {
            return <div className="m-2" key={index} />;
          })}

          {Array.from({ length: numDays }).map((_, index) => {
            const day = index + 1;
            const year = startDate.getFullYear();
            const month = startDate.getMonth();
            const date = new Date(year, month, day);
            let hasRem = hasReminders(reminders, date);

            return (
              <Cell
                key={day}
                onClick={() => {
                  handleSelectDate(date);
                }}
                className={clsx(
                  `items-center justify-center border-black-500 bg-black-300/40 hover:border-green-500
                hover:border text-pink-400 cursor-pointer transition-all duration-400`,
                  {
                    "bg-black-300 border-green-500 border-2 hover:border-2":
                      compareDates(selectedDate, date),
                  },
                  {
                    "overflow-auto": hasRem,
                    "bg-pink-500/20 text-green-500": hasRem && (md || sm), //always applies
                  }
                )}
              >
                <div
                  className={clsx(
                    `w-full flex flex-col 
                    lg:items-end lg:justify-center 
                    xl:items-end xl:justify-center 
                    items-center justify-center 
                    m-auto`,
                    {
                      "w-3/4": sm || md,
                    }
                  )}
                >
                  <p className={clsx(`lg:my-1 lg:mr-2 xl:my-1 xl:mr-2 text-lg font-sans`)}>
                    {day}
                  </p>

                  {/* Mobile reminder visual */}
                  {hasRem && (sm || md) ? (
                    <p
                      className={clsx(`w-2/3 h-2 rounded-lg mx-auto
                    bg-pink-500 lg:my-1 lg:mr-2 xl:my-1 xl:mr-2 lg:text-md text-sm`)}
                    />
                  ) : null}

                  {/* Desktop reminder visual */}
                  {hasRem ? (
                    <div
                      className={clsx(
                        `grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-1 
                        justify-end mx-auto`
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

        <div
          className="
        flex w-full h-full my-24 justify-end
         items-end cursor-pointer bg-black-900"
        >
          <button
            onClick={() => navigate("/add-reminder")}
            className="fixed bottom-10 hover:shadow-green-500 hover:shadow-left 
        hover:-translate-y-2 transition-all duration-200  rounded-full"
          >
            <img src={Plus} className="float-right w-20 h-20" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
