import React from "react";
import Cell from "./Cell";

import { sub, format, add, nextMonday } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

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
      <h1 className="text-center text-3xl ">{format(value, "LLLL yyyy")}</h1>
      <div className="w-full flex flex-row items-center justify-center text-center">
        <FontAwesomeIcon
          onClick={prevYear}
          icon={faAnglesLeft}
          className="m-4 text-green-800 text-3xl transition-all duration-200 cursor-pointer hover:text-green-100"
        />
        <FontAwesomeIcon
          onClick={prevMonth}
          icon={faAngleLeft}
          className="m-4 text-green-800 text-3xl transition-all duration-200 cursor-pointer hover:text-green-100"
        />
        <FontAwesomeIcon
          onClick={addMonth}
          icon={faAngleRight}
          className="m-4 text-green-800 text-3xl transition-all duration-200 cursor-pointer hover:text-green-100"
        />
        <FontAwesomeIcon
          onClick={addYear}
          icon={faAnglesRight}
          className="m-4 text-green-800 text-3xl transition-all duration-200 cursor-pointer hover:text-green-100"
        />
      </div>
    </div>
  );
};
