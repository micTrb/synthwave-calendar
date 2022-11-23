import { Tooltip } from "@material-tailwind/react";
import clsx from "clsx";
import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Reminder } from "../redux/ReminderSlice";
import { compareDates } from "../utils/compareDates";
import { isEqual } from 'date-fns';

interface Props {
  reminders: Reminder[];
  date: Date;
}

const RemindersGrid: React.FC<Props> = ({ reminders, date }) => {
  let filteredReminders = reminders.filter((r) => isEqual(r.date, date));

  
  return (
    <>
      {filteredReminders.map((reminder: Reminder) => (
        <Tooltip
          className="bg-black-100 p-4"
          key={reminder.id}
          content={reminder.content}
        >
          <p
            onClick={() => console.log(reminder)}
            className={clsx(`text-center text-black-500 
              ${reminder.priority} hover:opacity-80 p-2 rounded-md`)}
          />
        </Tooltip>
      ))}
    </>
  );
};

export default RemindersGrid;
