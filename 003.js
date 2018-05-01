//Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities.
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
function comp(array1, array2){
    if(array1===null ||array2 === null){
        return true;
    }
    array1= array1.sort(sortNumber);
    array2= array2.sort(sortNumber);
    for(var i=0; i<array2.length; i++){
        if(Math.pow(array1[i], 2)!==array2[i]){
            return false;
        }
    }
    return true;
}

function sortNumber(a,b) {
    return a - b;
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log(comp(a1,a2));