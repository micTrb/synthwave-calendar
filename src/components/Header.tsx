import React from "react";
import Cell from "./Cell";

import { sub, format, add, nextMonday } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FBackward from '../svg/FBackward.svg'
import Backward from '../svg/Backward.svg'
import Forward from '../svg/Forward.svg'
import FForward from '../svg/FForward.svg'

interface Props {
  value?: Date;
  onChange?: (value: Date) => void;
}

export const Header: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const prevMonth = () => onChange && onChange(sub(value, { months: 1 }));
  const addMonth = () => onChange && onChange(add(value, { months: 1 }));
  const prevYear = () => onChange && onChange(sub(value, { years: 1 }));
  const addYear = () => onChange && onChange(add(value, { years: 1 }));

  return (
    <div className="text-white">
      <div className="w-11/12 mx-auto flex flex-row items-center justify-center text-center">
        <img
          onClick={prevYear}
          src={FBackward}
          className="hover:-translate-x-2 hover:shadow-pink-500 hover:shadow-left 
          hover:border-pink-100 hover:border
          transition-all duration-100 w-16 h-16 cursor-pointer mx-4"
        />
        <img
          onClick={prevMonth}
          src={Backward}
          className="hover:-translate-x-2 hover:shadow-green-500 hover:shadow-left 
          hover:border-green-100 hover:border
          transition-all duration-100 w-16 h-16 cursor-pointer mx-4"
        />

        <h1 className="mx-2 text-center xl:text-6xl lg:text-4xl md:text-3xl text-lg">{format(value, "LLLL yyyy")}</h1>
        
        <img
          onClick={addMonth}
          src={Forward}
          className="hover:translate-x-2 hover:shadow-green-500 hover:shadow-left 
          hover:border-green-100 hover:border
          transition-all duration-100 w-16 h-16 cursor-pointer mx-4"
        />
        <img
          onClick={addYear}
          src={FForward}
          className="hover:translate-x-2 hover:shadow-pink-500 hover:shadow-left 
          hover:border-pink-100 hover:border
          transition-all duration-100 w-16 h-16 cursor-pointer mx-4"
        />
      </div>
    </div>
  );
};
