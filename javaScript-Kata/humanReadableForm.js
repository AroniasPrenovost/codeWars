function humanReadable(seconds) {
	hours = Math.floor(seconds / (60 * 60));
	minutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
	secs = (((seconds % 31536000) % 86400) % 3600) % 60;
	hrs = ('0' + hours).slice(-2);
	mins = ('0' + minutes).slice(-2);
	scs = ('0' + secs).slice(-2);
	return hrs + "\:" + mins + "\:" + scs;
}