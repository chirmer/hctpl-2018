var dayOfWeek = (new Date).getDay();
var hours = ["Closed today; opens 9 a.m. Monday.",          // Sunday
             "Open 9 a.m. - 8 p.m.",   // Monday
             "Open 9 a.m. - 8 p.m.",   // Tuesday
             "Open 9 a.m. - 8 p.m.",   // Wednesday
             "Open 9 a.m. - 8 p.m.",   // Thursday
             "Open 9 a.m. - 5 p.m.",   // Friday
             "Open 9 a.m. - 5 p.m."];  // Saturday
var todaysHours = hours[dayOfWeek];
document.getElementById("hhours").innerHTML = todaysHours;

var dayOfWeek = (new Date).getDay();
var hours = ["Closed today; opens noon Monday.",          // Sunday
             "Open noon - 7 p.m.",   // Monday
             "Open 10 a.m. - 5 p.m.",   // Tuesday
             "Open noon - 7 p.m.",   // Wednesday
             "Open 10 a.m. - 5 p.m.",   // Thursday
             "Open noon - 7 p.m.",   // Friday
             "Open 10 a.m. - 5 p.m."];  // Saturday
var todaysHours = hours[dayOfWeek];
document.getElementById("mhours").innerHTML = todaysHours;
