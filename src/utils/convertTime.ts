

export function convert12to24(hours: string, ap: string): string {

    if (hours === '12') {
      hours = '00';
    }
  
    if (ap === 'PM') {
      hours = (parseInt(hours, 10) + 12).toString();
    }
  
    return hours;
  }
  