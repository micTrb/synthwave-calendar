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

interface Props {
  value?: Date;
  onChange?: (value: Date) => void;
}

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const [isOpen, closeModal, openModal] = useModalStatus(false);

  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
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
      <Modal isOpen={isOpen} closeModal={closeModal} openModal={openModal} />

      <Header value={value} onChange={onChange} />

      <div className="mt-2 mx-auto w-full">
        <div
          className="grid grid-cols-7 gap-2 border-blue-400 
        border-t border-b border-green-400 items-center justify-center text-center"
        >
          {weekdays.map((day, index) => (
            <div
              key={index}
              className="m-2 h-12 flex items-start justify-end cursor-pointer"
            >
              <p className="m-auto text-xl text-yellow-500 uppercase">{day}</p>
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
                onClick={openModal}
                className="text-3xl border-black-500 bg-black-500 hover:border-green-500 
                hover:border text-pink-400
                flex items-start justify-end cursor-pointer transition-all duration-400"
              >
                <p
                  className={clsx("my-2 mr-4", {
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
    </div>
  );
};

export default Calendar;
