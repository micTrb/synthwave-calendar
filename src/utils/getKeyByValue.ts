import { Priority } from "../redux/ReminderSlice";

export function getKeyByValue(value: string) {

    const indexOfS = Object.values(Priority).indexOf(value as unknown as Priority);
  
    const key = Object.keys(Priority)[indexOfS];
  
    return key;
  }