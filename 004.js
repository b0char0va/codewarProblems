//Build Tower by the following given argument: number of floors (integer and always greater than 0).
//for eg: 3 floor tower:
// [
// '  *  ',
// ' *** ',
// '*****'
// ]


function towerBuilder(nFloors) {
    var array=[];
    var m=1;
    var str="";
   for(var i=0; i<nFloors; i++){
       for(var k=0; k<m; k++){
           str+="*";
       }
       var spaces=((nFloors+nFloors-1)-str.length)/2;
       for(var j=0; j<spaces; j++){
           str=" "+str+" ";
       }
       array.push(str);
       m+=2;
       str="";
   }
   return array;
}


console.log(towerBuilder(55));