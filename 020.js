function solution(list){
    var array=[];
    for(var i=0; i<list.length; i++){
        if(list[i]-1!==list[i-1]){
            array.push(list[i]);
        }
    }
    for(var k=0; k<list.length; k++){
        if(list[k]+1!==list[k+1]){
            if(!array.includes(list[k])) {
                array.push(" "+list[k]);
            }
        }
    }

   var myArray= array.sort(sortNumber);
    return myArray;
}

function sortNumber(a,b) {
    return a-b;

}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));