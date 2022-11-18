
import { Fragment, useEffect, useState } from "react";

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDate,
  getMonth,
  getYear,
  parse,
  startOfToday,
} from "date-fns";

import { FormData } from './Form';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import { compareDates } from "../../utils/compareDates";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";


interface InputProps {
  formData: FormData,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}


const DatePicker = ({ formData, setFormData }: InputProps) => {
  let today = startOfToday();

  let [selectedDay, setSelectedDay] = useState(today);

  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));

  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  const onChangeDate = (date: Date) => {
    setSelectedDay(date);
    setFormData({ ...formData, date: date });
  }
  

  return (
    <div className="pt-16">
      <div className="text-white mx-auto lg:w-1/3 md:1/2 w-full">
        <div className="">
          <div className="">
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={previousMonth}
              >
                <span className="sr-only">Previous month</span>
                <FontAwesomeIcon
                  icon={faChevronCircleLeft}
                  className="text-3xl hover:text-pink-400 transition-colors duration-300"
                  aria-hidden="true"
                />
              </button>
              <h2 className="text-3xl flex mx-4 text-center font-semibold text-gray-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>

              <button onClick={nextMonth} type="button">
      
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  className="text-3xl hover:text-pink-400 duration-300 transition-colors"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-4 text-lg leading-6 text-center text-gray-500 border-b border-white py-4">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-lg">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  onClick={() => onChangeDate(day)}
                  className={clsx(
                    "transition-colors duration-300 cursor-pointer text-center rounded-full p-2 hover:bg-black-400",
                    {
                      "bg-pink-400 hover:bg-pink-100": compareDates(
                        day,
                        selectedDay
                      ),
                    }
                  )}
                >
                  <p>{format(day, "d")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default DatePicker;