import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { add, parseISO, startOfDay } from "date-fns";
import { generateId } from "../utils/randomId";

export interface CalendarState {
  selectedDate: Date;
}

const initialState: CalendarState = {
  selectedDate: new Date()
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectDate } = calendarSlice.actions;

export default calendarSlice.reducer;
