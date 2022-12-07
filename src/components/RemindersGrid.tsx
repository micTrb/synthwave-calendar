import { Button, Popover, PopoverContent, PopoverHandler, Tooltip } from "@material-tailwind/react";
import clsx from "clsx";
import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Reminder } from "../redux/ReminderSlice";
import { compareDates } from "../utils/compareDates";
import { isEqual } from 'date-fns';
import ReminderTooltip from './reminder/ReminderTooltip';
import { propTypesDismissType } from "@material-tailwind/react/types/generic";

interface Props {
  reminders: Reminder[];
  date: Date;
}

type dismissType = {
  enabled?: boolean;
  escapeKey?: boolean;
  referencePointerDown?: boolean;
  outsidePointerDown?: boolean;
  ancestorScroll?: boolean;
  bubbles?: boolean;
};

const RemindersGrid: React.FC<Props> = ({ reminders, date }) => {


  let filteredReminders = reminders.filter((r) => compareDates(r.date, date));



  return (
    <>
      {filteredReminders.map((reminder: Reminder) => (
        // <Tooltip
        //   className="bg-black-100 p-4"
        //   key={reminder.id}
        //   open
        //   content={<ReminderTooltip reminder={reminder} />}
        // >
        //   <p
        //     onClick={() => handleOpenTooltip(reminders, reminder)}
        //     className={clsx(`text-center text-black-500 
        //     w-4

        //        ${reminder.priority} hover:opacity-80 p-2 rounded-md`)}
        //   />
        // </Tooltip>

        <Popover
          key={reminder.id}
          
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <PopoverHandler>
            <Button className={clsx(`text-center text-black-500 
            w-5 h-5 ${reminder.priority} 
            opacity-70 hover:opacity-100 p-2 rounded-md`)} children={""}></Button>
          </PopoverHandler>
          <PopoverContent className="w-1/3 bg-black-900 text-white border-green-500 border-2">
            <ReminderTooltip reminder={reminder} />
          </PopoverContent>
        </Popover>
      ))}
    </>
  );
};

export default RemindersGrid;
