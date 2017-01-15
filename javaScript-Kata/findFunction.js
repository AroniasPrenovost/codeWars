// take an entire web address in multiple formats and return 
// only the full name of the domain 

// this function filters by selecting the longest possible 
// web address first, slicing out elements based on known length. 
// using conditional statements the variations are manipulatd until 
// the code has checked from longest to shortest variation of URL slug.

function domainName(url){
// if url begins with s: followed by wwww
  if (url.includes("s:\//www")) {
return url.slice(12).split('.')[0]; 
   } else if (url.includes("p:\//www")) {
return url.slice(11).split('.')[0];
  } else if (url.includes("ps:")) {
return url.slice(8).split('.')[0];
  } else if (url.includes("ttp:")) {
return url.slice(7).split('.')[0];
  } else if (url.includes("www.")) {
return url.slice(4).split('.')[0];
  } else  {
  	return url.slice(0).split('.')[0];
  }
}
domainName("https://thisisatesturl.com");
// returns "thisisatesturl"



















































