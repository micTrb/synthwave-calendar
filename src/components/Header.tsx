import React from "react";
import Cell from "./Cell";

import { sub, format, add } from "date-fns";

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
    <>
      <h1 className="text-center text-3xl text-blue-600">{format(value, "LLLL yyyy")}</h1>
      <div className="w-full flex flex-row items-center justify-center text-center">
        <div className="mx-2 cursor-pointer" onClick={prevYear}>{"<<"}</div>
        <div className="mx-2 cursor-pointer" onClick={prevMonth}>{"<"}</div>
        <div className="mx-2 cursor-pointer" onClick={addMonth}>{">"}</div>
        <div className="mx-2 cursor-pointer" onClick={addYear}>{">>"}</div>
      </div>
    </>
  );
};
