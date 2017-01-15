// converts meters to metric prefixes 

function meters(x) {
	if (x > 10000000000000000000000) {
		return (x / 1000000000000000000000000) + " Yottameters";
	} else if (x > 9999999999999999999999) {
		return (x / 1000000000000000000000000) + " Yottameter";	
	} else if (x > 10000000000000000000) {
		return (x / 1000000000000000000000) + " Zettameters"; 
	} else if (x > 9999999999999999999) {
		return (x / 1000000000000000000000) + " Zettameter"; 		
	} else if (x > 10000000000000000) {
		return (x / 1000000000000000000) + " Exameters";
	} else if (x > 9999999999999999) {
		return (x / 1000000000000000000) + " Exameter";
	} else if (x > 10000000000000) {
		return (x / 1000000000000000) + " Petameters";
	} else if (x > 9999999999999) {
		return (x / 1000000000000000) + " Petameter";
	} else if (x > 10000000000) {
		return (x / 1000000000000) + " Terameters";
	} else if (x > 9999999999) {
		return (x / 1000000000000) + " Terameter";	
	} else if (x > 1000000000) {
		return 	(x / 1000000000) + " Gigameters";
	} else if (x > 999999999) {
		return 	(x / 1000000000) + " Gigameter";	
	} else if (x > 10000000) {
		return (x / 1000000) + " Megameters";
	} else if (x > 9999999) {
		return (x / 1000000) + " Megameter";	
	} else if (x > 1000) {
		return (x / 1000) + " Kilometers";
	} else if (x > 999) {
		return (x / 1000) + " Kilometer";
	} else  if (x > 1) {
		return x + " Meters";
	} else {
		return x + " Meter";
	}
}
meters(4539922394836);
// returns "4.539922394836 Terameters"