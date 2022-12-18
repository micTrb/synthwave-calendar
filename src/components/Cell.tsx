import React from "react";
import clsx from "clsx";
import { RootState } from "../store";
import { useSelector } from "react-redux";

interface Props extends React.PropsWithChildren {
  onClick?: () => void;
  className?: string;
}

const Cell: React.FC<Props> = ({ onClick, className, children }) => {
  const reminders = useSelector( (state: RootState) => state.reminders.reminders );

  return (
    <div onClick={onClick} className={clsx(`
    w-full
    xl:h-24
    lg:h-24
    md:h-20
    h-16 
    sm:rounded-lg
    rounded-lg
    p-auto
    items-center justify-center 
    `, 
    className)}>
      {children}
    </div>
  );
};

export default Cell;
