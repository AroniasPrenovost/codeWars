


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

// -------------------------------------------------


/*
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
} else if (hours < 0 && extraMinutes < 0 && extraSeconds > 0) {
answer.push(extraSeconds + " " + s);
} else {
return "none";
}
*/

var answer = [];
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



return answer; 


//  return hours + h + " " + extraMinutes + m + " " + extraSeconds + s;
// "0 15 0"
}

formatDuration(9990);
// ["1 minute", "40 seconds"]






//          complete 
///////////////////////////////////
//////////////////////////////////










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

// -------------------------------------------------

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
} else if (hours < 0 && extraMinutes < 0 && extraSeconds > 0) {
answer.push(extraSeconds + " " + s);
} else {
return "none";
}


return answer;
/*
	if (hours > 0) {
	answer.push(hours + h);
	} else {

	}
return answer; 
*/

//  return hours + h + " " + extraMinutes + m + " " + extraSeconds + s;
// "0 15 0"
}

formatDuration(9990);
// "2hours 46minutes 30seconds"



