import { convert12to24 } from './convertTime';



export function createDate(selectedDate: Date, hours: string, minutes: string, ap:string): Date {

    let y = selectedDate.getFullYear();
    let m = selectedDate.getMonth();
    let d = selectedDate.getDate();

    hours = convert12to24(hours, ap);
    
    return new Date(y, m, d, parseInt(hours), parseInt(minutes));

}