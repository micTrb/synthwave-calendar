import { Priority, Reminder } from "../redux/ReminderSlice";

const sortArray = (array: Reminder[]) => {
    const order = Object.values(Priority);
    
    return array.sort((a, b) => order.indexOf(a.priority) - order.indexOf(b.priority))

};
