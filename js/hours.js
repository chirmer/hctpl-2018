var dayOfWeek = (new Date).getDay();
var hours = ["Huntington & Markle are closed today.",          // Sunday
             "Huntington:   9 a.m. - 8 p.m.",   // Monday
             "Huntington:   9 a.m. - 8 p.m.",   // Tuesday
             "Huntington:   9 a.m. - 8 p.m.",   // Wednesday
             "Huntington:   9 a.m. - 8 p.m.",   // Thursday
             "Huntington:   9 a.m. - 5 p.m.",   // Friday
             "Huntington:   9 a.m. - 5 p.m."];  // Saturday
var todaysHours = hours[dayOfWeek];
document.getElementById("hhours").innerHTML = todaysHours;
document.getElementById("hhours-m").innerHTML = todaysHours;

var dayOfWeek = (new Date).getDay();
var hours = ["",          // Sunday
             "Markle:   12 p.m. - 7 p.m.",   // Monday
             "Markle:   10 a.m. - 5 p.m.",   // Tuesday
             "Markle:   12 p.m. - 7 p.m.",   // Wednesday
             "Markle:   10 a.m. - 5 p.m.",   // Thursday
             "Markle:   12 p.m. - 7 p.m.",   // Friday
             "Markle:   10 a.m. - 5 p.m."];  // Saturday
var todaysHours = hours[dayOfWeek];
document.getElementById("mhours").innerHTML = todaysHours;
document.getElementById("mhours-m").innerHTML = todaysHours;
