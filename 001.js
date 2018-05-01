//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(array1, array2) {
    return array1.filter(function (t) {
        return (array2.join("").indexOf(t) !== -1);
    }).sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

a1 = ["ly","arp", "mice", "bull"];

console.log(inArray(a1,a2));