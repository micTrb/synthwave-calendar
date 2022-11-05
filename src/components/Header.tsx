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
    <div className="w-full flex flex-row items-center justify-center text-center">
      

      <Cell onClick={prevYear}>{"<<"}</Cell>
      <Cell onClick={prevMonth}>{"<"}</Cell>
      <h1 className="text-3xl text-blue-600">{format(value, "LLLL yyyy")}</h1>
      <Cell onClick={addMonth}>{">"}</Cell>
      <Cell onClick={addYear}>{">>"}</Cell>
    </div>
  );
};
