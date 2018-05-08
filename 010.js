// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For eg: "https://www.cnet.com" == "cnet"

function domainName(url){

    url= url.replace("http://","").replace("https://","").replace("www.","");
    return url.split('.')[0];
}

console.log(domainName("http://google.co.jp"));