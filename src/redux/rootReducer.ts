import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from "./CounterSlice";
import reminderReducer from "./ReminderSlice";
import calendarReducer from "./CalendarSlice";


export const rootReducer = combineReducers({
    reminders: reminderReducer,
    calendar: calendarReducer,
    counter: counterReducer,
})



export type RootState = ReturnType<typeof rootReducer>