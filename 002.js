//Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//The first word within the output should be capitalized only if the original word was capitalized.
function toCamelCase(str){
    var arr=[];
    for(var i=0; i<str.length; i++){

        if(str[i-1]==="_" || str[i-1]==="-"){
           arr.push(str[i].toUpperCase());
        }else{
            arr.push(str[i]);
        }
    }
    return arr.join("").replace(/-|_/g,"");
}

console.log(toCamelCase(''));
console.log(toCamelCase("The_stealth-warrior"));
