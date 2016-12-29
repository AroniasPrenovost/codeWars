// just need to refine time to years 
// otherwise, it's done 


function formatDuration (seconds) {
  
// get raw number of minutes, seconds -- rawMins
if (seconds > 59) {
rawMins = Math.floor(seconds / 60);
} else {
   seconds = seconds;  
}

// get number of hours -- hours
if (rawMins > 59) {

 hours = Math.floor(rawMins / 60);
} else {
 rawMins = rawMins;
}

// find leftover minutes
extraMinutes = rawMins % 60;

// find leftover seconds
extraSeconds = seconds % 60;

// get number of hours -- hours
if (rawMins > 59) {
 hours = Math.floor(rawMins / 60);
} else {
 hours = 0;
}

// determines plurality of hour/hours
    if (hours > 1) {
  h = "hours";
} else if (hours < 1) {
  h = "hours";
} else {
	h = "hour";
}

// determines plurality of minute/minutes
    if (rawMins > 1) {
  m = "minutes";
} else if (rawMins < 1) {
  m = "minutes";
} else {
	m = "minute";
}

// determines plurality of second/seconds
    if (seconds > 1) {
  s = "seconds";
} else if (seconds < 1) {
  s = "seconds";
} else {
	s = "second";
}


var answer = [];
if (hours > 0 && extraMinutes > 0 && extraSeconds > 0) {
answer.push(hours + " " + h + " " + extraMinutes + " " + m + " " + extraSeconds + " " + s);
} else if (hours > 0 && extraMinutes > 0 && extraSeconds < 0) {
answer.push(hours + " " + h + " " + extraMinutes + " " + m);
} else if (hours > 0 && extraMinutes < 0 && extraSeconds > 0) {
answer.push(hours + " " + h + " " + extraSeconds + " " + s);
} else if (hours > 0 && extraMinutes < 0 && extraSeconds < 0) {
answer.push(hours + " " + h);
} else if (hours < 0 && extraMinutes > 0 && extraSeconds > 0) {
answer.push(extraMinutes + " " + m + " " + extraSeconds + " " + s);
} else if (hours < 0 && extraMinutes > 0 && extraSeconds < 0) {
answer.push(extraminutes + " " + m);
} else  {
answer.push("now");
} 

/* 
var wrong = [];
	if (hours > 0) {
	answer.push(hours + " " + h);
	} else {
    wrong.push(hours + " " + h);
	}

	if (extraMinutes > 0) {
	answer.push(extraMinutes + " " + m);
	} else {
    wrong.push(extraMinutes + " " + m);
	}

	if (extraSeconds > 0) {
	answer.push(extraSeconds + " " + s);
	} else {
    wrong.push(extraSeconds + " " + s);
	}
*/

return answer.toString(); 
}

formatDuration(9990);
// "1 minute", "40 seconds"


//          complete 
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////




// just need to refine time to years 
// 
function formatDuration (seconds) {


  
// get raw number of minutes, seconds -- rawMins
if (seconds > 59) {
rawMins = Math.floor(seconds / 60);
} else {
   seconds = seconds;  
}

// get number of hours -- hours
if (rawMins > 59) {
 hours = Math.floor(rawMins / 60);
} else {
 rawMins = rawMins;
}

// find leftover minutes
extraMinutes = rawMins % 60;

// find leftover seconds
extraSeconds = seconds % 60;


// get number of days -- days 
if (hours > 23) {
 days = Math.floor(hours / 24);
} else {
 days = days;
}
// get number of years -- years 
if (days > 364) {
 years = Math.floor(days / 365);
} else {
 years = 0;
}

// find leftover hours
extraHours = days % 24;

// find leftover days 
extraDays = years % 365;

// determines plurality of hour/hours
    if (hours > 1) {
  h = "hours";
} else if (hours < 1) {
  h = "hours";
} else {
	h = "hour";
}

// determines plurality of extra hour/hours
    if (extraHours > 1) {
  h1 = "hours";
} else if (extraHours < 1) {
  h1 = "hours";
} else {
	h1 = "hour";
}

// determines plurality of minute/minutes
    if (rawMins > 1) {
  m = "minutes";
} else if (rawMins < 1) {
  m = "minutes";
} else {
	m = "minute";
}

// determines plurality of extra minute/minutes
    if (extraMinutes > 1) {
  m1 = "minutes";
} else if (extraMinutes < 1) {
  m1 = "minutes";
} else {
	m1 = "minute";
}

// determines plurality of second/seconds
    if (seconds > 1) {
  s = "seconds";
} else if (seconds < 1) {
  s = "seconds";
} else {
	s = "second";
}

// determines plurality of extra second/seconds
    if (extraSeconds > 1) {
  s1 = "seconds";
} else if (extraSeconds < 1) {
  s1 = "seconds";
} else {
	s1 = "second";
}

// determines plurality of day/days
    if (days > 1) {
  d = "days";
} else if (days < 1) {
  d = "days";
} else {
	d = "day";
}

// determines plurality of extra day/days
    if (extraDays > 1) {
  d1 = "days";
} else if (extraDays < 1) {
  d1 = "days";
} else {
	d1 = "day";
}

// determines plurality of year/years
    if (years > 1) {
  y = "years";
} else if (years < 1) {
  y = "years";
} else {
	y = "year";
}
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
var answer = [];
var equalsZero = [];

if (years > 1) {
answer.push(years + y);
} else {
equalsZero.push(years);
} 

if (days > 0) {
answer.push(days + d);
} else {
equalsZero.push(days);
}

if (extraDays > 0) {
answer.push(extraDays + d);
} else {
equalsZero.push(extraDays);
}

if (extraHours > 0) {
answer.push(extraHours + h1);
} else {
equalsZero.push(extraHours);
}

if (extraMinutes > 0) {
answer.push(extraMinutes + m1);
} else {
equalsZero.push(extraMinutes);
}

if (extraSeconds > 0) {
answer.push(extraSeconds + s1);
} else {
equalsZero.push(extraSeconds);
}

if (years < 1 && days < 1 && extraDays < 1 && extraHours < 1 && extraMinutes < 1 && extraSeconds < 1) {
answer = "now";
} else {
return answer.toString().replace(",", " ");
}


}

formatDuration(9990);
// "1 minute", "40 seconds"




//          complete 
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////




// just need to refine time to years 
// 
function formatDuration (seconds) {
        years = Math.floor(seconds / 31536000);
        days = Math.floor((seconds % 31536000) / 86400);
        hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        minutes = ((((seconds % 31536000) % 86400) % 3600) / 60);
        seconds = (((seconds % 31536000) % 86400) % 3600) % 60;


// determines plurality of year/years
    if (years > 1) {
  y = "years";
} else if (years < 1) {
  y = "years";
} else {
	y = "year";
}

// determines plurality of day/days
    if (days > 1) {
  d = "days";
} else if (days < 1) {
  d = "days";
} else {
	d = "day";
}



// determines plurality of hour/hours
    if (hours > 1) {
  h = "hours";
} else if (hours < 1) {
  h = "hours";
} else {
	h = "hour";
}

// determines plurality of miute/minutes 
    if (minutes > 1) {
  m = "minutes";
} else if (hours < 1) {
  m = "minutes";
} else {
	m = "minute";
}



// determines plurality of second/seconds
    if (seconds > 1) {
  s = "seconds";
} else if (seconds < 1) {
  s = "seconds";
} else {
	s = "second";
}






// here is the new bring it up function 
var answer = [];
var equalsZero = [];

// years
if (seconds > 30535999) {
	answer.push(years + y);
} else {
	equalsZero.push(years + y);
}



if (days > 364) {
	answer.push(days + y);
} else {                       
    equalsZero.push(days + d);
}

// ->>> complete ^^^^^

// hours
if (hours > 0) {
	answer.push(hours + h);
} else {
	equalsZero.push(hours + h);
}

// minutes
if (seconds > 59) {
	answer.push(minutes + m);
} else {
	equalsZero.push(minutes + m);
}

if (seconds > 1) {
		return equalsZero.toString()/*.replace(",", " ")*/;

} else {
return "now";
}


}

formatDuration(9990);
// "1 minute", "40 seconds"






