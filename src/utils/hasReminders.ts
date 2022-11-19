import { Reminder } from "../redux/ReminderSlice";
import { isEqual } from 'date-fns';

type ReminderCheck = (r: Reminder[], d: Date) => boolean;

export const hasReminders: ReminderCheck = (reminders: Reminder[], date: Date) => {
    let hasReminder = reminders.some((reminder: Reminder) =>
      isEqual(reminder.date, date)
    );
    return hasReminder;
  };
