import { isEqual, getDate, getMonth, getFullYear } from "date-fns";

export function compareDates(dateLeft: Date, dateRight: Date): boolean {

  const d1 = dateLeft.getDate();
  const m1 = dateLeft.getMonth();
  const y1 = dateLeft.getFullYear();
  
  const d2 = dateRight.getDate();
  const m2 = dateRight.getMonth();
  const y2 = dateRight.getFullYear();
  
  const newDateLeft = new Date(y1, m1, d1);
  const newDateRight = new Date(y2, m2, d2);

  return isEqual(newDateLeft, newDateRight);
}