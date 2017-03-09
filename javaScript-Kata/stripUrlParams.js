// Complete the method so that it does the following:
// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 
// 2nd argument (optional array)

function stripUrlParams(url, paramsToStrip){
  // complete me

  // returns "www.something.com" without the query string
  var plainUrl = url.substring(0, url.indexOf("?"));
   return plainUrl;
  
  // returns everything prior to query string
  var qString = url.substring(url.indexOf(".com") + 4);
  //  return qString;
}
stripUrlParams("www.chat.com?=1");
