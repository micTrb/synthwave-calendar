import { Reminder } from "../redux/ReminderSlice";
import { isEqual, parse, parseISO } from "date-fns";
import { compareDates } from "./compareDates";

type ReminderCheck = (r: Reminder[], d: Date) => boolean;

export const hasReminders = (
  reminders: Reminder[],
  date: Date
) => {

  

  let hasReminder = reminders.some((reminder: Reminder) => isEqual(reminder.date, date));

  return hasReminder;
};
