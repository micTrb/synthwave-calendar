import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { add } from "date-fns";
import { generateId } from '../utils/randomId';

export interface Reminder {
  id: string;
  content: string;
  date: Date;
};
export interface ReminderState {
  reminders: Array<Reminder>;
}

const initialState: ReminderState = {
  reminders: [
    {
      id: "c2181edf-041b-0a61-3651-79d671fa3db7",
      content: "Write essay",
      date: new Date('2022-12-24T03:24:00'),
    },
    {
      id: "c2181edf-041b-0a61-3456-79d671fa3db7",
      content: "Call Bob",
      date: new Date('2022-12-20T03:24:00'),
    },
  ],
};

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    addReminder: (state, action) => {
      let newReminder = {
        id: generateId(),
        content: action.payload.content,
        date: action.payload.date,
      };
      state.reminders.push(newReminder);
    },
    deleteReminder: (state, action) => {
      let { reminders } = state;
      state.reminders = reminders.filter(
        (item) => item.id !== action.payload.id
      );
    },
    editReminder: (state, action) => {
      let { reminders } = state;
      state.reminders = reminders.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addReminder, deleteReminder, editReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
