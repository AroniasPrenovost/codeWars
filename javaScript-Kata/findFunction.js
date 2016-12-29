function domainName(url){
  
var One = url.slice(12);
var Two = url.slice(11);
var Three = url.slice(8);
var Four = url.slice(7);
var Five = url.slice(4);
var Six = url.slice(0);

  if (url.includes("s:\//www")) {
return One.split('.')[0]; 
   } else if (url.includes("p:\//www")) {
return Two.split('.')[0];
  } else if (url.includes("ps:")) {
return Three.split('.')[0];
  } else if (url.includes("ttp:")) {
return Four.split('.')[0];
  } else if (url.includes("www.")) {
return Five.split('.')[0];
  } else  {
  	return Six.split('.')[0];
  }
}

domainName("https://thisisatesturl.com");




// refactored 



function domainName(url){
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



















































