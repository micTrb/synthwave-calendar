import React from "react";
import Cell from "./Cell";

import "../css/fonts.scss";

import { sub, format, add, nextMonday } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FBackward from "../svg/FBackward.svg";
import Backward from "../svg/Backward.svg";
import Forward from "../svg/Forward.svg";
import FForward from "../svg/FForward.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <div className="w-full mx-auto flex flex-col items-center justify-center text-center space-x-2">
        <div className="flex flex-col h-max">
          <h1
            className="font-horsemen
        retrotext
        font-extrabold
        px-16 pt-16 pb-8
        mx-2 text-center xl:text-6xl lg:text-4xl 
        md:text-3xl text-3xl"
          >
            {format(value, "LLLL")}
          </h1>
          <h1
            className="font-cyberspaceFront uppercase
            year glow
        font-extrabold
       
        mx-2 text-center xl:text-6xl lg:text-4xl
         md:text-3xl text-3xl"
          >
            {format(value, "yyyy")}
          </h1>
        </div>

        <div className="my-12 space-x-8 w-full flex flex-row items-center justify-center mx-auto">
          <img
            onClick={prevYear}
            src={FBackward}
            className="hover:-translate-x-2 hover:shadow-pink-500 hover:shadow-left 
          hover:border-pink-100 hover:border
          transition-all duration-100 cursor-pointer w-12 h-12"
          />
          <img
            onClick={prevMonth}
            src={Backward}
            className="hover:-translate-x-2 hover:shadow-green-500 hover:shadow-left 
          hover:border-green-100 hover:border
          transition-all duration-100 cursor-pointer w-12 h-12"
          />
          <img
            onClick={addMonth}
            src={Forward}
            className="hover:translate-x-2 hover:shadow-green-500 hover:shadow-left 
          hover:border-green-100 hover:border
          transition-all duration-100 cursor-pointer w-12 h-12"
          />
          <img
            onClick={addYear}
            src={FForward}
            className="hover:translate-x-2 hover:shadow-pink-500 hover:shadow-left 
          hover:border-pink-100 hover:border
          transition-all duration-100 cursor-pointer w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
};
