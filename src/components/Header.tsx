import React from "react";
import Cell from "./Cell";

import { sub, format, add, nextMonday } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon
          onClick={prevYear}
          icon={faAnglesLeft}
          className="m-2 text-green-800 xl:text-4xl lg:text-4xl md:text-3xl text-lg transition-all duration-200 cursor-pointer hover:text-green-100"
        />
        <FontAwesomeIcon
          onClick={prevMonth}
          icon={faAngleLeft}
          className="m-2 text-green-800 xl:text-4xl lg:text-4xl md:text-3xl text-lg transition-all duration-200 cursor-pointer hover:text-green-100"
        />

        <h1 className="mx-2 text-center xl:text-4xl lg:text-4xl md:text-3xl text-lg">{format(value, "LLLL yyyy")}</h1>

        <FontAwesomeIcon
          onClick={addMonth}
          icon={faAngleRight}
          className="m-2 text-green-800 xl:text-4xl lg:text-4xl md:text-3xl text-lg transition-all duration-200 cursor-pointer hover:text-green-100"
        />
        <FontAwesomeIcon
          onClick={addYear}
          icon={faAnglesRight}
          className="m-2 text-green-800 xl:text-4xl lg:text-4xl md:text-3xl text-lg transition-all duration-200 cursor-pointer hover:text-green-100"
        />
      </div>
    </div>
  );
};
