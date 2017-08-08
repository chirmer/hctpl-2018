var dayOfWeek = (new Date).getDay();
var hours = ["Huntington & Markle are closed today.",          // Sunday
             "<b>Huntington: </b>  9 a.m. - 8 p.m.",   // Monday
             "<b>Huntington: </b>  9 a.m. - 8 p.m.",   // Tuesday
             "<b>Huntington: </b>  9 a.m. - 8 p.m.",   // Wednesday
             "<b>Huntington: </b>  9 a.m. - 8 p.m.",   // Thursday
             "<b>Huntington: </b>  9 a.m. - 5 p.m.",   // Friday
             "<b>Huntington: </b>  9 a.m. - 5 p.m."];  // Saturday
var todaysHours = hours[dayOfWeek];
document.getElementById("hhours").innerHTML = todaysHours;

var dayOfWeek = (new Date).getDay();
var hours = ["",          // Sunday
             "<b>Markle: </b>  12 p.m. - 7 p.m.",   // Monday
             "<b>Markle: </b>  10 a.m. - 5 p.m.",   // Tuesday
             "<b>Markle: </b>  12 p.m. - 7 p.m.",   // Wednesday
             "<b>Markle: </b>  10 a.m. - 5 p.m.",   // Thursday
             "<b>Markle: </b>  12 p.m. - 7 p.m.",   // Friday
             "<b>Markle: </b>  10 a.m. - 5 p.m."];  // Saturday
var todaysHours = hours[dayOfWeek];
document.getElementById("mhours").innerHTML = todaysHours;