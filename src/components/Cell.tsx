import React from "react";
import clsx from "clsx";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { isEqual } from "date-fns";
import { Reminder } from "../redux/ReminderSlice";
import { compareDates } from "../utils/compareDates";
import { has } from "immer/dist/internal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons'


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
    lg:h-28
    md:h-20
    h-12 
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
