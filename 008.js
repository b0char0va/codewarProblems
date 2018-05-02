//Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
function dirReduc(arr){
    for(var i=arr.length-1; i>=0; i--){
        if(arr[i]==='NORTH' && arr[i-1]==='SOUTH' || arr[i]==='SOUTH' && arr[i-1]==='NORTH' || arr[i]==='EAST' && arr[i-1]==='WEST'|| arr[i]==='WEST' && arr[i-1]==='EAST'){
            var arr2= arr.splice(i+1,arr.length-1);
            var arr1= arr.splice(0,i-1);
            arr= arr1.concat(arr2);
        }

    }
    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));


