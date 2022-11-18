import React from "react";
import clsx from "clsx";
import { RootState } from "../redux/store";
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
  date: Date;
  hasReminder: Boolean;
}

const Cell: React.FC<Props> = ({ onClick, className, children, date, hasReminder }) => {
  const reminders = useSelector( (state: RootState) => state.reminders.reminders );


  return (
    <div onClick={onClick} className={clsx(`lg:h-24 md:h-24 h-12 p-auto`, 
    className)}>
      {children}
    </div>
  );
};

export default Cell;
