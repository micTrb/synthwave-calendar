export function generateMinutes(interval: number): string[] {
  var x = interval; //minutes interval
  var times = []; // time array
  var tt = 0; // start time
  var ap = ["AM", "PM"]; // AM-PM

  //loop to increment the time and push results in array
  for (var i = 0; tt < 60; i++) {
    var mm = tt % 60; // getting minutes of the hour in 0-55 format
    times[i] =("0" + mm).slice(-2);
    tt = tt + x;
  }

  return times
}


export function generateHours(): string[] {
    var x = 1;
    var times = []; // time array
    var tt = 1; // start time
  
    //loop to increment the time and push results in array
    for (var i = 1; tt < 13; i++) {
      var hh = tt % 13; // getting hours
      times[i] =("0" + hh).slice(-2);
      tt = tt + x;
    }
  
    return times
  }