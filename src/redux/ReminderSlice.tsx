import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { add } from "date-fns";
import { generateId } from '../utils/randomId';

export enum Priority {
  NoPriority = "bg-black-200",
  Low = "bg-green-200",
  Medium = "bg-yellow-200",
  High = "bg-red-500"
}

export interface Reminder {
  id: string;
  content: string;
  date: Date;
  priority: Priority
};
export interface ReminderState {
  reminders: Array<Reminder>;
}

const initialState: ReminderState = {
  reminders: [
    {
      id: "c2187edf-041b-0a61-3651-79d671fa3db7",
      content: "Write essay 2",
      date: new Date(2022, 11, 12, 0, 0, 0),
      priority: Priority.High
    },
    {
      id: "c2187edf-12re-0a61-3651-79d671fa3db7",
      content: "Write poem",
      date: new Date(2022, 11, 24, 0, 0, 0),
      priority: Priority.Low
    },
    {
      id: generateId(),
      content: "Write poem yeah",
      date: new Date(2022, 11, 23, 0, 0, 0),
      priority: Priority.Low
    },
    {
      id: generateId(),
      content: "Write poem text",
      date: new Date(2022, 11, 16, 0, 0, 0),
      priority: Priority.High
    },
    {
      id: generateId(),
      content: "Write poem 2",
      date: new Date(2022, 11, 18, 0, 0, 0),
      priority: Priority.Medium
    },
    {
      id: generateId(),
      content: "Write poem 3",
      date: new Date(2022, 11, 24, 0, 0, 0),
      priority: Priority.Low
    },
    {
      id: generateId(),
      content: "Write handbook",
      date: new Date(2022, 11, 24, 0, 0, 0),
      priority: Priority.Medium
    }
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
        priority: action.payload.priority
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
