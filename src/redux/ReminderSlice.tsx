import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { add } from "date-fns";
import { generateId } from "../utils/randomId";
import { m } from "framer-motion";

export enum Priority {
  "High" = "bg-red-500",
  "Medium" = "bg-yellow-200",
  "Low" = "bg-green-200",
  "No Priority" = "bg-gray-100",
}

export interface Reminder {
  id: string;
  content: string;
  date: Date;
  priority: Priority;
}
export interface ReminderState {
  reminders: Array<Reminder>;
}

const initialState: ReminderState = {
  reminders: [
    {
      id: generateId(),
      content: "Write essay 2",
      date: new Date(),
      priority: Priority.High,
    },
    {
      id: generateId(),
      content: "Write poem",
      date: new Date(),
      priority: Priority.Medium,
    },
    {
      id: generateId(),
      content: "Call bob",
      date: new Date(),
      priority: Priority.Low,
    },
    {
      id: generateId(),
      content: "Write essay 2",
      date: new Date(),
      priority: Priority.High,
    },
    {
      id: generateId(),
      content: "Write poem",
      date: new Date(2022, 11, 4),
      priority: Priority.Medium,
    },
    {
      id: generateId(),
      content: "Call bob",
      date: new Date(2022, 11, 4),
      priority: Priority.Low,
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
        priority: action.payload.priority,
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
        item.id === action.payload.id ?
          {
            ...item,
            id: action.payload.id,
            content: action.payload.content,
            date: action.payload.date,
            priority: action.payload.priority,
          }
          : item);



    },

    editTodo: (state, action) => {
      let { reminders } = state;
      state.reminders = reminders.map((item) =>
        item.id === action.payload.id ? action.payload : item);
    }
  },
});

// Action creators are generated for each case reducer function
export const { addReminder, deleteReminder, editReminder } =
  reminderSlice.actions;

export default reminderSlice.reducer;
