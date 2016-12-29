function meters(x) {

	if (x > 9999999999999999999999) {
		return (x / 1000000000000000000000000) + "Ym";
	} else if (x > 9999999999999999999) {
		return (x / 1000000000000000000000) + "Zm";
	} else if (x > 9999999999999999) {
		return (x / 1000000000000000000) + "Em";
	}  else if (x > 9999999999999) {
		return (x / 1000000000000000) + "Pm";
	} else if (x > 9999999999) {
		return (x / 1000000000000) + "Tm";
	} else if (x > 999999999) {
		return 	(x / 1000000000) + "Gm";
	} else if (x > 9999999) {
		return (x / 1000000) + "Mm";
	} else if (x > 999) {
		return (x / 1000) + "km";
	} else {
		return x + "m";
	}
}

meters(1000000);